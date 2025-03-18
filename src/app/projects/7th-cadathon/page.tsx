import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">7th Bi-Annual F4 Cadathon Submission</h1>
        <div className="flex items-center justify-center mt-8 mb-4">
          <Image
              src="/images/FiniteCharge.png"
              alt="Game Logo"
              width={400}
              height={85}
              className="rounded-lg shadow-lg"
            />
         </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
          This was my first CAD challenge. Along with two other members of my team, I started work on a 
        </p>
        
      </div>
    </div>
  )
}