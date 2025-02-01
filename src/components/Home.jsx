import React from 'react';

const Home = () => {
    return (
        <div className="flex items-center justify-between mt-8 bg-slate-500">
            <div className="flex-row">
                <div className="flex">
                    <img src="../src/assets/msgBubble.svg" className="items-center ml-60"></img>
                    <div className="flex w-20 ml-20">
                        <img src="../src/assets/smileEmoji.svg"></img>
                        <img src="../src/assets/waveEmoji.svg"></img>
                    </div>
                </div>
                
                <div className='mt-20 ml-20'>
                    <p>I am specializing in AI. I have a passion for learning new technologies and making projects.</p>
                    <p> I have been part of several student clubs where I have gained valuable experience.</p>
                </div>
            </div>

         

            <div className='flex mr-60'>
                <p className='mt-20 mr-20'>adad</p>
                <img src="../src/assets/ahmed.svg" alt="Ahmed's Picture" className="mr-auto"></img>
                <div>

                </div>
            </div>
        

        </div>
    );
};

export default Home;