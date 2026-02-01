import { NavHeader } from "@/app/components/NavHeader";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      < NavHeader />


      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">FRC 2020/2021 Robot</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
              This was my first year overseeing the design process for the entire robot. I began introducing my own training regimen for the team,
              focusing on strong principles of design and procedures within Solidworks. I personally designed a multiple fixed-position shooter mechanism with an interconnected pneumatic positioning system, as well as the transmission system for the robot. 
            </p>
          </div>
          <div className="flex items-center justify-center">
              <Image
                src="/images/Transmission Render 3.JPG"
                alt="Transmission Gearbox"
                width={300}
                height={225}
                className="rounded-lg shadow-lg"
              />
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
                The single speed transmission gearbox I built for the 2020 robot.
              </p>
          </div>
          <div className="flex items-center justify-center">
              <Image
                src="/images/Shooter Hopper Render 3.JPG"
                alt="Shooter Render"
                width={300}
                height={225}
                className="rounded-lg shadow-lg"
              />
          </div>
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
              My shooter utilized a system of longer positional and hardstop pancake pneumatics to create 4 distinct hood angles, to provide advantageous trajectories at the 4 main strategic shooting locations.
              While the season got cut short due to the pandemic, at the time the season stopped, this robot was ranked top 25 in the world.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
              <Image
                src="/images/Full Robot Render 4.JPG"
                alt="Full Robot Render"
                width={300}
                height={225}
                className="rounded-lg shadow-lg"
              />
          </div>
        
      </div>
    </div>
  )
}