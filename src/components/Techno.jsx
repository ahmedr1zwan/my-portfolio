import React from 'react';

const Techno = () => {
  const technologies = [
    { name: 'Python', icon: '/icons/python.svg' },
    { name: 'Java', icon: '/icons/java.svg' },
    { name: 'JavaScript', icon: '/icons/javascript.svg' },
    { name: 'TypeScript', icon: '/icons/typescript.svg' },
    { name: 'Go', icon: '/icons/gologo.svg' },
    { name: 'C++', icon: '/icons/cpp.svg' },
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'Next.js', icon: '/icons/nextjs.svg' },
    { name: 'Node.js', icon: '/icons/node.svg' },
    { name: 'Flask', icon: '/icons/flask.svg' },
    { name: 'MongoDB', icon: '/icons/mongodb.svg' },
    { name: 'SQL', icon: '/icons/sql.svg' },
    { name: 'Tailwind', icon: '/icons/tailwind.svg' },
    { name: 'AWS', icon: '/icons/aws.svg' },
    { name: 'Git', icon: '/icons/gitlogo.svg' },
  ];

  return (
    <section id="technologies" className="pt-4 pb-12 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-apple-gray-900 mb-3">
          Skills
        </h2>
        <p className="text-lg text-apple-gray-600 font-light max-w-2xl mx-auto">
          Technologies and tools I work with
        </p>
      </div>

      {/* Technology Grid */}
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="group flex flex-col items-center justify-center w-24 h-28 rounded-xl hover:bg-apple-gray-50 transition-colors"
          >
            <div className="w-16 h-16 flex items-center justify-center mb-2">
              {tech.icon ? (
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-14 h-14 object-contain group-hover:scale-110 transition-transform"
                />
              ) : (
                <div className="w-14 h-14 rounded-lg bg-apple-gray-100 flex items-center justify-center text-apple-gray-500 text-sm font-semibold group-hover:scale-110 transition-transform">
                  {tech.name.substring(0, 2).toUpperCase()}
                </div>
              )}
            </div>
            <span className="text-xs text-apple-gray-600 font-medium text-center">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Techno;


// LEGACY CODE

// import React from 'react';

// const Techno = () => {
//   return (
//     <div className="mb-8 px-4 lg:px-8 lg:max-w-7xl mx-auto">
//       <h1 className="text-5xl font-light mt-12 mb-4 lg:ml-4">
//         Technologies
//       </h1>

//       {/* Parent flex: two columns on large screens */}
//       <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 text-gray-800">
        
//         {/* Icons column */}
//         <div className="flex flex-col items-center">
//           {/* First row of icons */}
//           <div className="flex gap-4">
//             <img
//               src="/icons/html15.svg"
//               alt="HTML5"
//               className="h-24 w-auto"
//             />
//             <img
//               src="/icons/css3.svg"
//               alt="CSS3"
//               className="h-24 w-auto"
//             />
//             <img
//               src="/icons/react.svg"
//               alt="React"
//               className="h-24 w-auto"
//             />
//             <img
//               src="/icons/tailwind.svg"
//               alt="Tailwind CSS"
//               className="h-24 w-auto"
//             />
//             <img
//               src="/icons/node.svg"
//               alt="Node.js"
//               className="h-24 w-auto"
//             />
//             <img
//               src="/icons/nextjs.svg"
//               alt="Next.js"
//               className="h-24 w-auto"
//             />
//           </div>

//           {/* Second row of icons */}
//           <div className="flex gap-4 mt-3">
//             <img
//               src="/icons/python.svg"
//               alt="Python"
//               className="h-24 w-auto"
//             />
//             <img
//               src="/icons/java.svg"
//               alt="Java"
//               className="h-24 w-auto"
//             />
//             <img
//               src="/icons/javascript.svg"
//               alt="JavaScript"
//               className="h-24 w-auto"
//             />
//             <img
//               src="/icons/sql.svg"
//               alt="SQL"
//               className="h-24 w-auto"
//             />
//             <img
//               src="/icons/mongodb.svg"
//               alt="MongoDB"
//               className="h-24 w-auto"
//             />
//             <img
//               src="/icons/aws.svg"
//               alt="AWS"
//               className="h-24 w-auto"
//             />
//           </div>
//         </div>

//         {/* Arrow & text (only visible on lg screens) */}
//         <div className="hidden lg:flex items-center gap-4">
//           <img
//             src="/icons/arrow.svg"
//             alt="Arrow"
//             className="w-36 h-36"
//           />
//           <p className="text-2xl w-64">
//             I have worked with these before however I'm always open to learn more!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Techno;




// import React from 'react';

// const Techno = () => {
//     return (
        
//         <div className='mb-8 ml-4 lg:ml-8'>
        
//             <h1 className='text-5xl font-light lg:ml-12 mt-12'>Technologies</h1>
            

//             <div className="flex lg:justify-center lg:gap-x-96 lg:mt-2 lg:p-8 text-gray-800 w-screen">
//             {/* Heading */}
            
            
//             {/* Icons row */}
//                 <div className="flex-row items-center lg:ml-40">
//                 {/* Replace src paths with your actual icon files */}
//                 <div className="flex gap-4 lg:size-24">
//                         <img
//                         src="icons/html15.svg"
//                         alt="HTML5"
//                         className="h-24 w-auto"
//                         />
//                         <img
//                         src="/icons/css3.svg"
//                         alt="CSS3"
//                         className="h-24 w-auto"
//                         />
//                         <img
//                         src="/icons/react.svg"
//                         alt="React"
//                         className="h-24 w-auto"
//                         />
//                         <img
//                         src="/icons/tailwind.svg"
//                         alt="Tailwind CSS"
//                         className="h-24 w-auto"
//                         />
//                         <img
//                         src="/icons/node.svg"
//                         alt="Node.js"
//                         className="h-24 w-auto"
//                         />
//                         <img
//                         src="/icons/nextjs.svg"
//                         alt="Next.js"
//                         className="h-24 w-auto"
//                         />
                        
//                 </div>
                
//                 <div className="flex gap-5 mt-3 lg:size-24">
//                     <img
//                         src="/icons/python.svg"
//                         alt="Python"
//                         className="h-24 w-auto"
//                     />
//                     <img
//                         src="/icons/java.svg"
//                         alt="Java"
//                         className="h-24 w-auto"
//                     />
//                     <img
//                         src="/icons/javascript.svg"
//                         alt="JavaScript"
//                         className="h-24 w-auto"
//                     />
//                     <img
//                         src="/icons/sql.svg"
//                         alt="SQL"
//                         className="h-24 w-auto"
//                     />
//                     <img
//                         src="/icons/mongodb.svg"
//                         alt="MongoDB"
//                         className="h-24 w-auto"
//                     />
//                     <img
//                         src="/icons/aws.svg"
//                         alt="AWS"
//                         className="h-24 w-auto"
//                     />

//                 </div>
                
//                 </div>
    
//             {/* Callout with arrow (positioned to the right) */}
//             <div className="hidden md:hidden lg:flex">
//                 <img className="w-48 h-48"src="/icons/arrow.svg"></img>
//                 <p className='text-2xl lg:mt-16 lg:-ml-8 lg:w-64 text-center'>I have worked with these before however I'm always open to learn more!</p>
            
//             </div>
//         </div>
//       </div>
//     );
// };

// export default Techno;