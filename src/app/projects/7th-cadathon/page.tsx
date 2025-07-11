import Image from 'next/image';
import { NavHeader } from "@/app/components/NavHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      < NavHeader />


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
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
            This was my first CAD challenge. The format was a 3 day challenge where teams were given a mock FRC game, 
            then did their best to design the most competetive robot they could. Our completed robot was judged 17th out of almost 100, 
            but the real value for me personally was learning to work under extreme time pressure and to work efficiently.
          </p>
         </div>
        
        
      </div>
    </div>
  )
}