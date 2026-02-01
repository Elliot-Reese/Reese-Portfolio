import Image from 'next/image';
import { NavHeader } from "@/app/components/NavHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      < NavHeader />


      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">F4 Cadathons</h1>
        <div className="flex items-center justify-center mt-8 mb-4">
          <Image
              src="/images/FiniteCharge.png"
              alt="Game Logo"
              width={400}
              height={85}
              className="rounded-lg shadow-lg"
            />
        </div>
        <div className="flex items-center justify-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
              These have been my favorite CAD challenges. The format is a 3 day challenge where teams of 3 people are given a mock FRC game, 
              then do their best to design the most competetive robot they can. I have participated in several of these, giving me great practice with design principles and rapid ideation,
              but the real value for me personally was learning to work under extreme time pressure and to work efficiently.
            </p>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="flex items-center justify-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
              The first challenge that I participated in was the summer of my freshman year of high school. The challenge focused on acquiring, sorting, and shooting two different sized balls.
              This robot was judged 17th out of over 100 participants. 
            </p>
          </div>
          <div className="flex items-center justify-center mt-8 mb-4">
            <Image
              src="/images/CADathon full robot render.JPG"
              alt="Football/Weight Plate Robot"
              width={400}
              height={85}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex items-center justify-center mt-8 mb-4">
            <Image
              src="/images/CDM Full Robot Render 1.JPG"
              alt="Football/Weight Plate Robot"
              width={400}
              height={85}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex items-center justify-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
              Over the next several years I competed in several more of these challenges, each time tackling new styles of manipulation or control. My favorite design involved a football-shooting robot 
              where I personally designed the shooter tower as well as a lift that would manipulate steel weight plates. These challenges require extreme mental flexibility and focus in order to get so much done
              on such a constrained timeline with such a small team. I consider them to be some of the best design experiences I've had.
            </p>
          </div>
          
        </div>
        
        
      </div>
    </div>
  )
}