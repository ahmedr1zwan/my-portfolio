import React from "react";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div
      id="home"
      // Outer container: stack on mobile, row on large
      className="flex flex-col lg:flex-row lg:items-center lg:justify-between
                 px-4 py-10"
    >
      {/* Left block: Bubble + Emojis + Typed text */}
      <div className="flex-col items-center lg:flex-row mt-10 lg:mt-20 w-full lg:w-2/3">
        
        {/* Bubble + Emojis Row */}
        <div className="flex flex-col items-center lg:flex-row lg:items-center">
          <img
            src="/assets/msgBubble.svg"
            alt="Message Bubble"
            // On large screens, push it right if needed
            className="mb-4 lg:mb-4 lg:ml-40"
          />
          <div className="flex gap-2 lg:ml-5">
            <img src="/assets/smileEmoji.svg" alt="Smile Emoji" />
            <img src="/assets/waveEmoji.svg" alt="Wave Emoji" />
          </div>
        </div>

        {/* Typed Text */}
        <div className="mt-12 lg:mt-0 lg:ml-20 text-2xl w-3/4 text-justify lg:text-left">
            <ReactTyped strings={["I am specializing in AI. I have a passion for learning new technologies and making projects. I have been part of several student clubs where I have gained valuable experience."]} typeSpeed={20} />
        </div>
      </div>

      {/* Right block: Links + Picture */}
      <div className="flex flex-col items-center gap-4 mt-8 lg:mt-20
                      lg:flex-row lg:justify-between lg:ml-10 lg:mr-40"
      >
        {/* Links */}
        <div className="mt-4 lg:mt-64 text-center lg:text-left">
          <div className="flex items-center gap-2 mb-2">
            <img src="/assets/github.svg" alt="GitHub" />
            <a
              href="https://github.com/ahmedr1zwan"
              className="text-blue-800 font-semibold hover:bg-yellow-200 hover:text-black"
            >
              GitHub Link
            </a>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <img src="/assets/linkedin.svg" alt="LinkedIn" />
            <a
              href="https://www.linkedin.com/in/ahmed-rizwan1/"
              className="text-blue-800 font-semibold hover:bg-yellow-200 hover:text-black"
            >
              LinkedIn Link
            </a>
          </div>
          <div className="flex items-center gap-2">
            <img src="/assets/mail.svg" alt="Email" />
            <p className="text-gray-600">ahmed.rizwan@queensu.ca</p>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="mt-2">
          <img
            src="/assets/ahmed.svg"
            alt="Ahmed's Picture"
            className="w-64 h-auto md:w-72 lg:w-80 xl:w-80 2xl:w-96 lg:mr-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;



// LEGACY CODE

// import React from 'react';
// import { ReactTyped } from "react-typed";

// const Home = () => {
//     return (
//         <div id="home" className="flex-row lg:flex lg:items-center lg:justify-between">
//             <div className="flex-col lg:flex-row mt-20 w-2/3">
//                 <div className="flex">
//                     <img src="/assets/msgBubble.svg" className="items-center lg:ml-40"></img>
//                     <div className="flex lg:w-16 lg:ml-20">
//                         <img src="/assets/smileEmoji.svg"></img>
//                         <img src="/assets/waveEmoji.svg"></img>
//                     </div>
//                 </div>
                
//                 <div className='mt-10 lg:ml-20 text-2xl w-full'>
//                     <ReactTyped strings={["I am specializing in AI. I have a passion for learning new technologies and making projects. I have been part of several student clubs where I have gained valuable experience."]} typeSpeed={20} />
//                     {/* <p> I have been part of several student clubs where I have gained valuable experience.</p> */}
//                 </div>
//             </div>

         

//             <div className='flex-row lg:flex lg:justify-between lg:ml-10 lg:mr-40 lg:mt-20'>
//                 <div className='mt-4 lg:mt-64'>
//                     <div className='flex space-x-2'>
//                         <img src="/assets/github.svg"></img>
//                         <a href="https://github.com/ahmedr1zwan" className="text-blue-800 font-semibold hover:bg-yellow-200 hover:text-black">GitHub Link</a>
//                     </div>
//                     <div className='flex space-x-2'>
//                         <img src="/assets/linkedin.svg"></img>
//                         <a href="https://www.linkedin.com/in/ahmed-rizwan1/" className="text-blue-800 font-semibold hover:bg-yellow-200 hover:text-black">LinkedIn Link</a>
//                     </div>
//                     <div className='flex space-x-2'>
//                         <img src="/assets/mail.svg"></img>
//                         <p className="text-gray-600">ahmed.rizwan@queensu.ca</p>
//                     </div>
                    
    
//                 </div>
                
//                 <div className='mt-2'>
//                     <img src="/assets/ahmed.svg" alt="Ahmed's Picture" className="w-56 h-auto md:w-48 lg:w-64 xl:w-80 2xl:w-96 lg:mr-20"></img>
//                 </div>
//             </div>
        

//         </div>
//     );
// };

// export default Home;