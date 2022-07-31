import React from "react";


const AboutHero = () => {
    // const canvasRef = useRef();



    return (
        <section className="p-4 md:p-10 lg:px-16 pb-16 lg:pb-20 container mx-auto">
            <div className="flex flex-col justify-between lg:items-center  space-y-4 lg:space-y-10">
                <div className="flex flex-col items-center space-y-6 lg:space-y-10">
                    <p className=" text-5xl md:text-5xl lg:text-[80px]  font-bold leading-12 text-center text-white w-[85%]">
                        Consolidating a tradition
                        of excellence.          </p>
                    <p className="text-xl lg:text-xl font-medium leading-7 lg:leading-9 text-center text-white lg:w-[60%] w-[85%]">
                        Learn about the alumni, our history, the department of economics at UI and how we network with friends to foster meaningful and  impact-driven engagements
                    </p>
                    
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
