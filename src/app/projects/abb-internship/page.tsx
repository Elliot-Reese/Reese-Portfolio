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
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">ABB Internship</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center justify-center mt-2 mb-2">
              <Image
                src="/images/ABB-logo.png"
                alt="ABB Logot"
                width={250}
                height={175}
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">
              The summer of 2024, I relocated to Bloomfield, CT to work as an R&D Engineering Intern at ABB Inc. as part of their Electrification division. I joined a team of roughly a dozen engineers tasked with creating a new circuit breaker for use in lighting panels and other industrial applications.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">
              Inititally, I was tasked with designing fixtures to aid in the assembly process of these breakers, but as the team grew to understand my strengths, I was asked to join an effort to create an integrated method of padlocking the breaker in the off position for maitanance, something that had never been accomplished on a molded case circuit breaker.
            </p>
            <div className="flex items-center justify-center mt-2 mb-2">
              <Image
                src="/images/XT1.jpg"
                alt="XT1 Circuit Breaker"
                width={250}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex items-center justify-center mt-2 mb-2">
              <Image
                src="/images/breaker-loto.webp"
                alt="Breaker Lock-Out-Tag-Out Mechanism"
                width={250}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">
              The intent behind this system is similar to the mechanism at the right, but entirely contained within the breaker as a factory-issue functionality. This introduced a host of design constraints and trade offs that were fascinating to try to balance and work through. I took point on the effort to brainstorm as many possible solutions as possible, then to pare down the list to the most promising design. I presented the justification to the department, who approved the design for further development and the pursual of a patent.
              </p>
          </div>
        
      </div>
    </div>
  )
}