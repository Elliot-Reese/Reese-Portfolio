import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/app/ui/card";
import { Button } from "@/app/ui/button";
import { Github, Linkedin } from "lucide-react";

export default function Home() {  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-40 sm:px-20 lg:px-40">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-stone-400/80 dark:bg-stone-800/80 backdrop-blur-sm shadow-md mb-2">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-left items-center h-16 space-x-8">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">Elliot Reese</p>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              About
            </a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Projects
            </a>
            <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Skills
            </a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Contact
            </a>
          </div>
        </nav>
      </header>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id= "about" className="grid md:grid-cols-2 gap-8 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md p-8">
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
          <div className="flex items-center">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I am a robotics engineering student focused on product development and customized solutions.
              With experience in FRC robotics and various engineering projects, I specialize in
              creating innovative mechanical solutions and bringing ideas from concept to reality
              through rapid prototyping and iterative design. 
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center mt-8">
          {/* Projects Section */}
          <div id="projects" className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Engineering Experience Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <Link href="/projects/2022robot" className="block">
                <Card className="hover:shadow-lg hover:bg-gray-300">
                  <CardContent className="p-4">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">FRC 2022 Robot</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      Led the design of FRC Team 2168's robot for the 2022 challenge Rapid React, including personal design of the drivetrain and the turreted shooter.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/projects/2021game-design" className="block">
                <Card className="hover:shadow-lg hover:bg-gray-300">
                  <CardContent className="p-4">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">FRC 2021 Game Design Challenge</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      Led the design of FRC Team 2168's submission for the FIRST 2021 Game Design Challenge.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/projects/2020robot" className="block">
                <Card className="hover:shadow-lg hover:bg-gray-300">
                  <CardContent className="p-4">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">FRC 2020/2021 Robot</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      Led the design of FRC Team 2168's robot for the 2020/2021 FRC challenge Infinite Recharge, including personal design of the ball-shooting mechanism and traversing climber.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/projects/7th-cadathon" className="block">
                <Card className="hover:shadow-lg hover:bg-gray-300">
                  <CardContent className="p-4">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">7th Bi-Annual F4 Cadathon</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      Entered into a 3 day challenge to fully design an FRC-style robot for a mock game with 2 other people.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/projects/2019robot" className="block">
                <Card className="hover:shadow-lg hover:bg-gray-300">
                  <CardContent className="p-4">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">FRC 2019 Robot</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      Designed a functional mechanism for a robot to compete in the FRC challenge Deep Space.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          {/* Skills Section */}
          <div id="skills" className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Skills & Tools</h2>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Mechanical Engineering, SolidWorks, Creo PTC, Python, MATLAB, 3D Printing, FEA, Rapid Prototyping
            </p>
          </div>

          {/* Contact Section */}
          <div id= "contact" className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Get in Touch</h2>
            <div className="flex justify-center gap-4 mt-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Linkedin size={20} /> LinkedIn
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Github size={20} /> GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
