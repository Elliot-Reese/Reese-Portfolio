import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">


      <header className="sticky top-0 z-50 bg-stone-400/80 dark:bg-stone-800/80 backdrop-blur-sm shadow-md mb-2">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-left items-center h-16 space-x-8">
            <a href='/' className="text-2xl font-bold text-gray-900 dark:text-white">Elliot Reese</a>
            <a href="/#about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              About
            </a>
            <a href="/#projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Projects
            </a>
            <a href="/#skills" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Skills
            </a>
            <a href="/#contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Contact
            </a>
          </div>
        </nav>
      </header>


      <div className="max-w-4xl mx-auto text-center mt-4">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">FRC 2019 Robot</h1>
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="flex items-center justify-center">
            <Image
              src="/images/2019-robot.jpg"
              alt="2019 Full Robot"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex items-center justify-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">
              This was my first year designing robotic mechanisms. I worked on an adaptable intake mechanism that could manipulate one of that year's game pieces, a large disk, up off the floor and onto a secondary manipulator. I was a part of the rapid prototyping effort, then was the sole designer that brought the prototyped design to a completed state in the condensed timeframe of 1.5 weeks.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              The panel that the robot was required to manipulate had several features that presented both opportunities and constraints for the design of the mechanism.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/hatch-panel.jpg"
              alt="Hatch Panel Game Piece"
              width={200}
              height={150}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex items-center justify-center"></div>
          <div className="flex items-center justify-center">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              This project was where I started developing an engineering mindset, as well as began learning Solidworks and the progression of the design process from prototyping to coordinating with machine shops and assembly.
            </p>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}