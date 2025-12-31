import React from "react";

const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start px-6 lg:px-12 pt-24 pb-4 max-w-7xl mx-auto gap-8 lg:gap-12"
    >
      {/* Left section: Content */}
      <div className="w-full lg:w-auto lg:flex-1 space-y-6 lg:pt-8">
        <div className="space-y-4">
          <p className="text-sm font-medium text-apple-gray-500 tracking-wide">
            Computer Science '27 @ Queen's University | Kingston, Ontario
          </p>
          
          <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-apple-gray-900 leading-tight">
            Ahmed Rizwan
          </h1>
          
          <p className="text-lg lg:text-xl text-apple-gray-600 leading-relaxed max-w-2xl">
            Exploring applied AI and full-stack development through hands-on projects and real-world experience.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="https://github.com/ahmedr1zwan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-apple-gray-700 hover:text-apple-gray-900 transition-colors"
          >
            <img src="/assets/github.svg" alt="GitHub" className="w-5 h-5" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/ahmed-rizwan1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-apple-gray-700 hover:text-apple-gray-900 transition-colors"
          >
            <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          
          <div className="flex items-center gap-2 text-apple-gray-600">
            <img src="/assets/mail.svg" alt="Email" className="w-5 h-5" />
            <span className="text-sm">ahmed.rizwan@queensu.ca</span>
          </div>
        </div>
      </div>

      {/* Right section: Profile Picture */}
      <div className="w-full lg:w-auto flex justify-center lg:justify-start mt-4 lg:mt-8">
        <img
          src="/assets/ahmed_2.svg"
          alt="Ahmed Rizwan"
          className="w-56 h-auto md:w-72 lg:w-80"
        />
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