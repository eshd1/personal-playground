import streamlit as st
import yfinance as yf
import numpy as np
import pandas as pd
from datetime import datetime, timedelta
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, LSTM
import ollama

# Function for preparing data for the LSTM model
def prepare_data(data, look_back=60):
    X, y = [], []
    for i in range(look_back, len(data)):
        X.append(data[i-look_back:i])
        y.append(data[i])
    X, y = np.array(X), np.array(y)
    return X, y

# Function to train an LSTM model for stock price prediction
def train_lstm_model(ticker_symbol):
    # Fetch historical stock data
    data = yf.download(ticker_symbol, start='2022-01-01', end=datetime.today().strftime('%Y-%m-%d'))
    data = data['Close'].values.reshape(-1, 1)
    scaler = MinMaxScaler(feature_range=(0, 1))
    scaled_data = scaler.fit_transform(data)

    # Prepare training data
    X_train, y_train = prepare_data(scaled_data)
    X_train = X_train.reshape((X_train.shape[0], X_train.shape[1], 1))

    # Build LSTM model
    model = Sequential()
    model.add(LSTM(units=50, return_sequences=True, input_shape=(X_train.shape[1], 1)))
    model.add(LSTM(units=50, return_sequences=False))
    model.add(Dense(units=1))

    model.compile(optimizer='adam', loss='mean_squared_error')
    model.fit(X_train, y_train, epochs=5, batch_size=32)

    return model, scaler, data, scaled_data

# Function to predict future stock prices using the trained LSTM model
def predict_stock_price_lstm(model, scaler, scaled_data, look_back=60, days_ahead=5):
    last_data = scaled_data[-look_back:]
    predictions = []
    for _ in range(days_ahead):
        input_data = last_data.reshape((1, look_back, 1))
        predicted_scaled_price = model.predict(input_data)
        predictions.append(predicted_scaled_price[0, 0])
        last_data = np.append(last_data[1:], predicted_scaled_price, axis=0)
    
    predicted_prices = scaler.inverse_transform(np.array(predictions).reshape(-1, 1))
    return predicted_prices.flatten()

# Function to get a response from Ollama's GPT model
def get_gpt_response(user_input):
    response = ollama.chat(
        model='llama3.2',  # Replace with your desired model name if different
        messages=[{'role': 'user', 'content': user_input}]
    )
    return response['message']['content']

# Streamlit app setup
st.title("Stock Prediction with LSTM and Conversational Chatbot")

# Stock Prediction Section
st.header("Stock Price Prediction")
ticker_symbol = st.text_input("Enter a stock ticker (AAPL, TSLA):", "AAPL")

if 'model_trained' not in st.session_state:
    st.session_state.model_trained = False

if st.button("Train and Predict"):
    model, scaler, data, scaled_data = train_lstm_model(ticker_symbol)
    st.session_state.model = model
    st.session_state.scaler = scaler
    st.session_state.scaled_data = scaled_data
    st.session_state.model_trained = True
    st.write(f"Model trained for {ticker_symbol}.")

# Only show prediction options if the model has been trained
if st.session_state.model_trained:
    days_ahead = st.slider("Select the number of days ahead for prediction:", min_value=1, max_value=30, value=5, step=1)
    predicted_prices = predict_stock_price_lstm(st.session_state.model, st.session_state.scaler, st.session_state.scaled_data, days_ahead=days_ahead)
    st.write(f"The predicted stock price for the next {days_ahead} days is:")
    for i, price in enumerate(predicted_prices, start=1):
        st.write(f"Day {i}: ${price:.2f}")

# Conversational GPT Section
st.header("Chat with GPT")
user_input = st.text_input("Ask me anything:")

if user_input:
    response = get_gpt_response(user_input)
    st.write("Chatbot Response:")
    st.write(response)

