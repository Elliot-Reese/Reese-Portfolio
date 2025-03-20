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
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">General Dynamics Electric Boat Internship</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center justify-center">
              <Image
                src="/images/EB-sub.webp"
                alt="Nuclear Sub"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex items-center justify-center">
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">
                The summer of 2023, I joined the robotics engineering division of General Dynamics Electric Boat.
              </p>
              </div>
            <div className="flex items-center justify-center">
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">
                My first task was to compare the usability and reliability of several different cobots (collaborative robots), then to develop a training program for the most promising model.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/fanuc-cobot.jpg"
                alt="Fanuc Cobot"
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