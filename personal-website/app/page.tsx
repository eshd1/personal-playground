"use client"
import Image from "next/image";
import ed from "../public/ed.png";
import ThemeToggle from "../components/ui/theme-toggle";
import {motion} from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link"; 
import { FaGithub, FaLinkedin } from "react-icons/fa";
import project1 from "../public/project1.png";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white
    transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">

        <motion.header 
        initial = {{opacity:0, x:-100}}
        animate = {{opacity:1, x:0}}
        transition={{duration: 0.8}}
        
        className="flex items-center justify-between mb-12">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image src={ed} alt="profile picture" className="cursor-pointer transition-all duration-300 hover:scale-110"></Image>
          </div>
          <ThemeToggle />
        </motion.header>
        <main className="space-y-10">
          <section className="space-y-10">
            <motion.div
            initial = {{opacity:0, x:100}}
            animate = {{opacity:1, x:0}}
            transition={{duration: 0.8}}
            className="space-y-1">
              <h1 className="text-4xl fond-bold bg-gradient-to-r from-rose-600
              via-indigo-500 to-sky-500 bg-clip-text text-transparent">Eshaan Dua</h1>
              <p className ="text-gray-600 dark:text-gray-400">AI/ML Engineer</p>
              <p className ="text-gray-600 dark:text-gray-400">Minneapolis, MN</p>
            </motion.div>

            <motion.div
            initial = {{opacity:0, x:-100}}
            animate = {{opacity:1, x:0}}
            transition={{duration: 0.8}}
            className="space-y-3">
              <h2 className="text-lg font-semibold">About Me</h2>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl"> I am currently an AI/ML engineer at {" "} 
                <span className="text-black dark:text-white">U.S Bank. </span>
                I work with the ResearchOps division, focused heavily into LLM Evaluation. At the same time, I am pursuing a {" "}
                <span className="text-black dark:text-white">Master&apos;s of Science</span>{" "}in{" "}
                <span className="text-black dark:text-white">Artificial Intelligence</span>{" "} at {" "}
                <span className="text-black dark:text-white">Johns Hopkins University.</span>
                
              </p>

              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
              If I am not working or banging my head against broken code, you will probably find me outside flying my drone, capturing the world through a lens. However, if I do
              have spare time I love to read, build Legos, and tinker with new tech domains a.k.a the front-end techstack (its a whole new world for me)!
              </p>

              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
              Here are some of the most recent technologies I have been working with:{" "}
              <span className="text-black dark:text-white">Python</span>, {" "}
              <span className="text-black dark:text-white">Pandas</span>, {" "}
              <span className="text-black dark:text-white">NumPy</span>, {" "}
              <span className="text-black dark:text-white">PyTorch</span>, and {" "}
              <span className="text-black dark:text-white">TensorFlow. </span> {" "}
              </p>
                
            </motion.div>

            <motion.div
            initial = {{opacity:0, x:50}}
            animate = {{opacity:1, x:0}}
            transition={{duration: 0.8}}
            className="flex items-center gap-3">
              <Link href={'#'} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <FaGithub className="w-6 h-6"></FaGithub>
              </Link>
              <Link href={'#'} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <FaLinkedin className="w-6 h-6"></FaLinkedin>
              </Link>
            </motion.div>
          </section>

          <motion.section
          initial = {{opacity:0, y:100}}
          animate = {{opacity:1, y:0}}
          transition={{duration: 0.8}}
          className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Experience</h2>
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                <p className="font-medium">AI/ML Engineer</p>
                <p className="font-medium bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">U.S. Bank</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">June 2023 - Present</p>
                  
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Working with the AI Research Division at US Bank. Created an automated framework to test and gain insight into LLM evaluation for further research and implemented
                an algorithm that allowed to have automatic image analysis and detection utilizing the YOLO Algorithm for a consumer facing project.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                <p className="font-medium">SDE Intern</p>
                <p className="font-medium bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">U.S. Bank</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">June 2022 - August 2022</p>
                  
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Worked on core apps and microservices that are the pillars of U.S. Bank&apos;s Wealth Management Division. Assisted in creating a framework to further have higher effienciency
                within our Jenkins pipelines. Worked with DevOps technologies such as: Jenkins, JSON, YAML, Docker, Kubernetes, and Groovy
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                <p className="font-medium">Software Engineer Intern</p>
                <p className="font-medium bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">SPS Commerce</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">June 2021 - August 2021</p>
                  
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Designed company wide infrastructure for EKS cluster recovery, worked on the CloudOps and SRE team. Successfully automated companywide EC2 and RDS instance tagging operations
                to give dev teams a more accurate cost management for AWS resources. 
              </p>
            </div>
            
          </motion.section>
          <motion.section
          initial = {{opacity:0, y:100}}
          animate = {{opacity:1, y:0}}
          transition={{duration: 0.8}}
          className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Education</h2>
            <div className="space-y-2">
              <div className="flex-items-center justify-between">
                <div className="space-y-1">
                <p className="font-medium">Masters of Science - Artificial Intelligence</p>
                <p className="font-medium bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Johns Hopkins University</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">June 2024 - May 2026</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm"> </p>
            </div>

            <div className="space-y-2">
              <div className="flex-items-center justify-between">
                <div className="space-y-1">
                <p className="font-medium">Bachelors of Science - Computer Science</p>
                <p className="font-medium bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">University of Minnesota - Twin Cities</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">September 2020 - December 2022</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm"> </p>
            </div>
          </motion.section>
          <motion.section
          initial = {{opacity:0, y:100}}
          animate = {{opacity:1, y:0}}
          transition={{duration: 0.8}}
          className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Personal Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={project1} alt="project 1" className="rounded-lg mb-4"/>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Streamlit Stockbot</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Python, TensorFlow, Ollama, Streamlit</p>
                    </div>
                    <Button variant="ghost" size="icon">→</Button>
                  </div>
                </CardContent>
              </Card>
              {/* <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={project1} alt="project 1" className="rounded-lg mb-4"/>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Simple Stockbot</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Python, LSTM, TensorFlow, Ollama, Streamlit</p>
                    </div>
                    <Button variant="ghost" size="icon">→</Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={project1} alt="project 1" className="rounded-lg mb-4"/>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Simple Stockbot</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Python, LSTM, TensorFlow, Ollama, Streamlit</p>
                    </div>
                    <Button variant="ghost" size="icon">→</Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={project1} alt="project 1" className="rounded-lg mb-4"/>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Simple Stockbot</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Python, LSTM, TensorFlow, Ollama, Streamlit</p>
                    </div>
                    <Button variant="ghost" size="icon">→</Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={project1} alt="project 1" className="rounded-lg mb-4"/>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Simple Stockbot</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Python, LSTM, TensorFlow, Ollama, Streamlit</p>
                    </div>
                    <Button variant="ghost" size="icon">→</Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={project1} alt="project 1" className="rounded-lg mb-4"/>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Simple Stockbot</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Python, LSTM, TensorFlow, Ollama, Streamlit</p>
                    </div>
                    <Button variant="ghost" size="icon">→</Button>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </motion.section>
          
        </main>
      </div>
    </div>
  );
}
