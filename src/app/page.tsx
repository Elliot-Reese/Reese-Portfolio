import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/app/ui/card";
import { Button } from "@/app/ui/button";
import { Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Elliot Reese</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
          Robotics Engineering | 3D Design | Product Development
        </p>
        
        {/* Projects Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <Link href="/2022robot" className="block">
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">FRC 2022 Robot</h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Designed a 5DOF robotic arm using SolidWorks, optimized for additive manufacturing.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">FRC 2021 Robot</h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  Designed a 5DOF robotic arm using SolidWorks, optimized for additive manufacturing.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">FRC 2020 Robot</h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  Designed a 5DOF robotic arm using SolidWorks, optimized for additive manufacturing.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">FRC 2019 Robot</h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  Designed a 5DOF robotic arm using SolidWorks, optimized for additive manufacturing.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Autonomous Vehicle Prototype</h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  Developed an autonomous navigation system using ROS and embedded programming.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Skills & Tools</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Mechanical Engineering, SolidWorks, Creo PTC, Python, MATLAB, 3D Printing, FEA, Rapid Prototyping
          </p>
        </div>

        {/* Contact Section */}
        <div className="mt-10">
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
  );
}
