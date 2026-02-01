import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/app/ui/card";
import { Button } from "@/app/ui/button";
import { Github, Linkedin } from "lucide-react";
import { ContactButtons } from "@/app/components/ContactButtons";
import { NavHeader } from "@/app/components/NavHeader";
import { Analytics } from "@vercel/analytics/react"
import { Navbar } from "./components/Navbar";


export default function Home() {  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-40 sm:px-20 lg:px-40">
      < NavHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id= "about" className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md p-8">
          {/* Left column - Profile Picture and Titles */}
          <div className="flex flex-col justify-center items-center md:items-start space-y-4">
            <div className="relative w-48 h-48 rounded-full overflow-hidden">
              <Image
                src="/images/profile1.jpg"
                alt="Elliot Reese"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Elliot Reese</h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
                Robotics Engineering | 3D Design | Product Development
              </p>
            </div>
          </div>
          {/* Right column - Biography */}
          <div className="flex flex-col items-start space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">About Me</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I am a robotics engineering student focused on product development and customized solutions.
              With experience in FIRST robotics and various engineering projects, I specialize in
              creating innovative mechanical solutions and bringing ideas from concept to reality
              through rapid prototyping and iterative design. 
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I am currently looking for robotics, automation, and mechanical engineering positions starting in the summer of 2026.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center mt-8">
          {/* Projects Section */}
          <div id="projects" className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Engineering Experience Projects</h2>
            {/* <p className="text-m text-gray-700 dark:text-gray-300 mt-2">
              Here are some projects showcasing my skills and breadth of knowledge. </p> */}
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                (Click each box for more details)
              </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <Link href="/projects/ipg-photonics" className="block">
                <Card className="hover:shadow-lg bg-neutral-200 hover:bg-stone-300">
                  <CardContent className="p-4">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">IPG Hardware Engineering Internship</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      Aided in the expansion of automated assembly capacity for laser diode packages. Learned about precise, station-based automation. 
                    </p>
                  </CardContent>
                </Card>
              </Link>
            <Link href="/projects/abb-internship" className="block">
                <Card className="hover:shadow-lg bg-neutral-200 hover:bg-stone-300">
                  <CardContent className="p-4">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">ABB Inc. R&D Internship</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      Joined a team developing a new industrial circuit breaker. Spearheaded the brainstorming, design, and downselection process for a new padlocking method for the breaker (patent pending).
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/projects/eb-internship" className="block">
                <Card className="hover:shadow-lg bg-neutral-200 hover:bg-stone-300">
                  <CardContent className="p-4">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">General Dynamics Electric Boat Internship</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      Joined a team tasked with implementing industrial welding robots in production. Worked to test different models and write training materials for end users.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/projects/2022robot" className="block">
                <Card className="hover:shadow-lg bg-neutral-200 hover:bg-stone-300">
                  <CardContent className="p-4">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">FRC 2022 Robot</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      Led the design of FRC Team 2168's robot for the 2022 challenge Rapid React, including personal design of the drivetrain and the turreted shooter.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/projects/2021game-design" className="block">
                <Card className="hover:shadow-lg bg-neutral-200 hover:bg-stone-300">
                  <CardContent className="p-4">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">FRC 2021 Game Design Challenge</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      Led the design of FRC Team 2168's submission for the FIRST 2021 Game Design Challenge. Our submission was one of three global winners. 
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/projects/2020robot" className="block">
                <Card className="hover:shadow-lg bg-neutral-200 hover:bg-stone-300">
                  <CardContent className="p-4">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">FRC 2020/2021 Robot</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      Led the design of FRC Team 2168's robot for the 2020/2021 FRC challenge Infinite Recharge, including personal design of the ball-shooting mechanism and traversing climber.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/projects/7th-cadathon" className="block">
                <Card className="hover:shadow-lg bg-neutral-200 hover:bg-stone-300">
                  <CardContent className="p-4">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">F4 Cadathons</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      Competed in several 3 day challenges to fully design an FRC-style robot for a mock game with 2 other people.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/projects/2019robot" className="block">
                <Card className="hover:shadow-lg bg-neutral-200 hover:bg-stone-300">
                  <CardContent className="p-4">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">FRC 2019 Robot</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      Joined the design program of my high school's FRC robotics team. Learned SolidWorks and designed an adaptable intake mechanism.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          { /* Education */}
          <div id="education" className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Education</h2>
            <div className="mx-auto w-4/5 md:w-2/5">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Worcester Polytechnic Institute</strong> - Worcester, MA<br />
                Bachelor of Science in Robotics Engineering, <br/>
                Minor in Data Science,
                Expected May 2026<br />
                GPA: 3.9+/4.0
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div id="skills" className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Skills & Tools</h2>
            <div className="mx-auto w-4/5 md:w-2/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Languages and Software */}
                <div className="text-left">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Technical Package</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>SolidWorks</li>
                    <li>Creo PTC</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C/C++</li>
                  </ul>
                </div>
                {/* Engineering Skills */}
                <div className="text-left">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Engineering Skills</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Product Design</li>
                    <li>Rapid Prototyping</li>
                    <li>Data Analysis</li>
                    <li>3D Printing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div id= "contact" className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Get in Touch</h2>
          <ContactButtons />
            <h3 className="text-lg text-gray-700 dark:text-gray-300 mt-4">
              Send me an email at{" "}
              <a 
                href="mailto:elliot.g.reese@gmail.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                elliot.g.reese@gmail.com
              </a>
            </h3>
          </div>
          <br></br>
          <Analytics />
          
        </div>
      </div>
    </div>
  );
}
