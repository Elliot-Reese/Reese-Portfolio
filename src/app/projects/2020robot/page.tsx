import { NavHeader } from "@/app/components/NavHeader";

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
          focusing on strong principles of design and procedures within Solidworks. I designed a multiple fixed-position shooter mechanism with an interconnected pneumatic positioning system. 
        </p>
        </div>
        </div>
        
      </div>
    </div>
  )
}