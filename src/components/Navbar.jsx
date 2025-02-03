// src/components/Navbar.jsx
import Clock from "./Clock";

export default function Navbar() {
  return (


    // <nav className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-800">
    //   {/* Left side (Time + Toggle) */}
    //   <div className="flex items-center gap-4">
    //     <span className="font-semibold">4:28</span>
    //     <button
    //       onClick={toggleDarkMode}
    //       className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded-md hover:opacity-80"
    //     >
    //       {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    //     </button>
    //   </div>

    //   {/* Right side (Nav Links) */}
    //   <ul className="flex items-center gap-6">
    //     <li className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">Home</li>
    //     <li className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">About</li>
    //     <li className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">Projects</li>
    //   </ul>
    // </nav>
    
  
    <div className="fixed flex items-center w-full h-20  justify-center">
      <div className="flex-none mr-60 p-2">
        <div className="flex">
          
           <Clock />
        
          {/* FEATURE TO ADD: <div><img src="../src/assets/dnd.svg" alt="DnD" className="h-[1.5em] align-middle ml-2"></img></div> */}
        </div>
      </div> 

      <div className="fixed rounded-2xl w-1/4">
        <div className="bg-[#4F4D4D] p-2 w-full rounded-3xl" >
            <div className="flex items-center justify-left space-x-12 ml-24 text-[#FFFFFF]">
              <a href="#home">Home</a>
              <a href="#info">About</a>
              <a href="#info">Projects</a>
              <div className="bg-[#000000] w-1/5 ml-14 rounded-3xl h-6"></div>

            </div>
        </div>
        

      
      </div>        
      <div className="bg-black w-20 ml-60">
      </div>

      <div>
        <img src="/icons/network.svg" className="h-6 ml-7 mt-1"></img>
      </div>

    </div>

  );
}
