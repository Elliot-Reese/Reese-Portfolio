import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto text-center mt-4">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">ABB Internship</h1>
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
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">
              The summer of 2024, I relocated to Bloomfield, CT to work as an R&D Engineering Intern at ABB Inc. as part of their Electrification division. I joined a team of roughly a dozen engineers tasked with creating a new circuit breaker for use in lighting panels and other industrial applications.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">
              Inititally, I was tasked with designing fixtures to aid in the assembly process of these breakers, but as the team grew to understand my strengths, I was asked to join an effort to create an integrated method of padlocking the breaker in the off position for maitanance, something that had never been accomplished on a molded case circuit breaker.
            </p>
          </div>
        
      </div>
    </div>
  )
}