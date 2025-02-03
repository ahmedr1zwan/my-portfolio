import React from 'react';

const Techno = () => {
    return (
        
        <div className='ml-8'>
        
            <h1 className='text-5xl font-light ml-12 mt-12'>Technologies</h1>
            

            <div className="flex justify-around mt-2 p-8 text-gray-800 w-screen">
            {/* Heading */}
            
            
            {/* Icons row */}
                <div className="flex-row items-center">
                {/* Replace src paths with your actual icon files */}
                <div className="flex gap-4 size-24">
                        <img
                        src="icons/html15.svg"
                        alt="HTML5"
                        className="h-24 w-auto"
                        />
                        <img
                        src="/icons/css3.svg"
                        alt="CSS3"
                        className="h-24 w-auto"
                        />
                        <img
                        src="/icons/react.svg"
                        alt="React"
                        className="h-24 w-auto"
                        />
                        <img
                        src="/icons/tailwind.svg"
                        alt="Tailwind CSS"
                        className="h-24 w-auto"
                        />
                        <img
                        src="/icons/node.svg"
                        alt="Node.js"
                        className="h-24 w-auto"
                        />
                        <img
                        src="/icons/nextjs.svg"
                        alt="Next.js"
                        className="h-24 w-auto"
                        />
                        
                </div>
                
                <div className="flex gap-5 mt-3 size-24">
                    <img
                        src="/icons/python.svg"
                        alt="Python"
                        className="h-24 w-auto"
                    />
                    <img
                        src="/icons/java.svg"
                        alt="Java"
                        className="h-24 w-auto"
                    />
                    <img
                        src="/icons/javascript.svg"
                        alt="JavaScript"
                        className="h-24 w-auto"
                    />
                    <img
                        src="/icons/sql.svg"
                        alt="SQL"
                        className="h-24 w-auto"
                    />
                    <img
                        src="/icons/mongodb.svg"
                        alt="MongoDB"
                        className="h-24 w-auto"
                    />
                    <img
                        src="/icons/aws.svg"
                        alt="AWS"
                        className="h-24 w-auto"
                    />

                </div>
                
                </div>
    
            {/* Callout with arrow (positioned to the right) */}
            <div className="flex relative -ml-20">
                <img src="/icons/arrow.svg"></img>
                <p className='text-xl mt-16 -ml-8 w-64 text-center'>I have worked with these before however I'm always open to learn more!</p>
            
            </div>
        </div>
      </div>
    );
};

export default Techno;