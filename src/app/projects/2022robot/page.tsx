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
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">FRC 2022 Robot</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">
              For this year, I once again oversaw training of our design team as well as the design process of the entire robot from ideation to production. 
              We had less adult mentor support this year than in previous years, so I took more organization and initiatives onto myself.
              In my final year as a student, I wanted to take on the most complicated mechanical system I could, to challenge myself.
            </p>
          </div>
          <div className="flex items-center justify-center mt-2 mb-2">
            <Image
              src="/images/2022-robot1.jpg"
              alt="FRC 2168 2022 Robot"
              width={250}
              height={175}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">
            </p>
          </div>
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">
              I began designing a turreted shooter mechanism that could aim and shoot at a target from any angle.
              While by far the most complex mechanism I had ever designed, it was also the most fun and invigorating as each time a new constraint cropped up, the redesign process became increasingly intricate.
              I also designed out intake mechanism and a few other functionalities.
            </p>
          </div>
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">
              The robot came together well, and after winning two competitions in New England, we were able to compete at the 2022 FRC World Championship in Houston, Texas. 
              Here, I gave a technical presentation to a panel of judges on not only the technical aspects of our robot, but also the engineering ideals behind the training programs and design process that I had implemented over the past three years.
              For those programs and design process, the judges awarded my team the Excellence in Engineering Award at the World Champoinship level.
              </p>
          </div>
          <div className="flex items-center justify-center mt-2 mb-2">
            <Image
              src="/images/excellence-in-engineering.webp"
              alt="Excellence in Engineering Award"
              width={250}
              height={175}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        
      </div>
    </div>
  )
}