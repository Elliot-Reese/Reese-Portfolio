'use client';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-stone-400/80 dark:bg-stone-800/80 backdrop-blur-sm shadow-md mb-2">
        <nav className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex flex-wrap justify-left items-center h-16 space-x-8">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">Elliot Reese</p>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white">
              About
            </a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white">
              Projects
            </a>
            <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white">
              Skills
            </a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white">
              Contact
            </a>
          </div>
        </nav>
      </header>
  );
}