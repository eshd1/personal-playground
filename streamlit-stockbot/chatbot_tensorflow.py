import yfinance as yf
import pandas as pd
import numpy as np
import tensorflow as tf
from sklearn.preprocessing import MinMaxScaler
import streamlit as st
from datetime import datetime, timedelta

# Define LSTM model function
def build_model(input_shape):
    model = tf.keras.Sequential([
        tf.keras.layers.LSTM(50, return_sequences=True, input_shape=input_shape),
        tf.keras.layers.LSTM(50),
        tf.keras.layers.Dense(1)
    ])
    model.compile(optimizer='adam', loss='mean_squared_error')
    return model

# Load stock data
def load_data(stock_symbol, start_date, end_date):
    data = yf.download(stock_symbol, start=start_date, end=end_date)
    return data['Close']

# Preprocess the data
def preprocess_data(data):
    scaler = MinMaxScaler(feature_range=(0, 1))
    scaled_data = scaler.fit_transform(data.values.reshape(-1, 1))
    
    x, y = [], []
    for i in range(60, len(scaled_data)):
        x.append(scaled_data[i-60:i])
        y.append(scaled_data[i])
        
    x, y = np.array(x), np.array(y)
    x = np.reshape(x, (x.shape[0], x.shape[1], 1))
    return x, y, scaler

# Streamlit interface
st.title("Stock Price Prediction Chatbot")
st.write("Enter the stock ticker symbol and date range for prediction.")

stock_symbol = st.text_input("Stock Symbol (e.g., AAPL, GOOG)", "AAPL")
start_date = st.date_input("Start Date", datetime.now() - timedelta(days=365))
end_date = st.date_input("End Date", datetime.now())

if st.button("Predict"):
    try:
        # Load and preprocess data
        data = load_data(stock_symbol, start_date, end_date)
        x, y, scaler = preprocess_data(data)

        # Build and train model
        model = build_model((x.shape[1], 1))
        model.fit(x, y, epochs=5, batch_size=32, verbose=2)

        # Predict the next value
        last_60_days = data[-60:].values.reshape(-1, 1)
        scaled_last_60 = scaler.transform(last_60_days)
        x_pred = np.reshape(scaled_last_60, (1, 60, 1))
        prediction = model.predict(x_pred)
        predicted_price = scaler.inverse_transform(prediction)

        st.write(f"Predicted price for the next day: ${predicted_price[0][0]:.2f}")
    except Exception as e:
        st.error(f"An error occurred: {e}")