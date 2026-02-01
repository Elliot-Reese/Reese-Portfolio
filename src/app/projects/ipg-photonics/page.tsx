import Image from 'next/image';
import { NavHeader } from "@/app/components/NavHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      < NavHeader />


      <div className="max-w-4xl mx-auto text-center mt-4">
        {/* <h1 className="text-5xl font-bold text-gray-900 dark:text-white">IPG Photonics</h1> */}
        <div className="flex items-center justify-center mt-2 mb-2">
          <Image
            src="/images/IPG.png"
            alt="IPG Logo"
            width={500}
            height={225}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="flex items-center justify-center mt-2 mb-2">
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">
              The summer of 2025, I worked in Oxford MA as an Hardware Engineering Intern at IPG Photonics Corp. as part of their diode packaging division. 
              I joined a team responsible for the placement of lenses that colimated the laser beam emitted from the diode.
            </p>
          </div>
          <div className="flex items-center justify-center mt-2 mb-2">
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">
              Each lense is only a few millimeters wide, and has to be placed with immense precision. I was responsible for overseeing the operation of the automated 
              assembly stations, troubleshooting problems, calibrating, and then eventually building another station from scratch. This internship gave me great experience in high precision automation
              as well as the construction of automation stations.
            </p>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">
          </p>
          <div className="flex items-center justify-center mt-2 mb-2">
          </div>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">
            </p>
        </div>
        
      </div>
    </div>
  )
}