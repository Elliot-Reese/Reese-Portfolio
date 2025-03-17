import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto text-center mt-4">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">FRC 2019 Robot</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">
          This was my first year designing robotic mechanisms. I worked on an adaptable intake mechanism that could manipulate one of that year's game pieces, a large disk, up off the floor and onto a secondary manipulator.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
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
          <div className="flex items-center justify-center">
            <Image
              src="/images/2019-robot.jpg"
              alt="2019 Full Robot"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        
      </div>
    </div>
  )
}