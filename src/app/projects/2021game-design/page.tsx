import Image from 'next/image';
import { NavHeader } from "@/app/components/NavHeader";

export default function Home() {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
        < NavHeader />


        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">FRC 2021 Game Design Challenge</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
              For this year, there was no specific challenge because of Covid-19, so FIRST instead asked FRC teams to design their own challenges, 
              to potentially be used as inspiration for future challenges. I was the lead designer for my team, and focused on assessing the viability of proposed element.
            </p>
            </div>
            <div></div>
            <div className="flex items-center justify-center mt-4 mb-4">
              <Image
                src="/images/GameDesignBanner.png"
                alt="Game Design Banner"
                width={180}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex items-center justify-center">
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
              We developed a game with multiple moving field elements, including a translating cargo bin to score game pieces into and a chain suspension bridge for robots to balance on.
              We were one of three global winners, with special credit being given to our game for its complexity and the number of moving parts, while still being comprehensible and retaining easy manufacturability.
            </p>
            </div>
          </div>
          
          
        </div>
      </div>
    )
  }