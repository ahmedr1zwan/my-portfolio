import React from 'react';
import { ReactTyped } from "react-typed";

const Home = () => {
    return (
        <div id="home" className="flex items-center justify-between">
            <div className="flex-row mt-20">
                <div className="flex">
                    <img src="/assets/msgBubble.svg" className="items-center ml-60"></img>
                    <div className="flex w-16 ml-20">
                        <img src="/assets/smileEmoji.svg"></img>
                        <img src="/assets/waveEmoji.svg"></img>
                    </div>
                </div>
                
                <div className='mt-20 ml-20 text-2xl w-2/3'>
                    <ReactTyped strings={["I am specializing in AI. I have a passion for learning new technologies and making projects. I have been part of several student clubs where I have gained valuable experience."]} typeSpeed={20} />
                    {/* <p> I have been part of several student clubs where I have gained valuable experience.</p> */}
                </div>
            </div>

         

            <div className='flex mr-40 mt-20'>
                <div className='mt-64'>
                    <div className='flex space-x-2'>
                        <img src="/assets/github.svg"></img>
                        <a href="https://github.com/ahmedr1zwan">GitHub Link</a>
                    </div>
                    <div className='flex space-x-2'>
                        <img src="/assets/linkedin.svg"></img>
                        <a href="https://www.linkedin.com/in/ahmed-rizwan1/">LinkedIn Link</a>
                    </div>
                    <div className='flex space-x-2'>
                        <img src="/assets/mail.svg"></img>
                        <p className="text-gray-600">ahmed.rizwan@queensu.ca</p>
                    </div>
                    
    
                </div>
                <img src="/assets/ahmed.svg" alt="Ahmed's Picture" className="mr-20"></img>
                <div>

                </div>
            </div>
        

        </div>
    );
};

export default Home;