import React from "react";


const GiveHero = () => {
    // const canvasRef = useRef();



    return (
        <section className="p-4 md:p-10 lg:px-16 pb-16 lg:pb-20 container mx-auto">
            <div className="flex flex-col justify-between lg:items-center  space-y-4 lg:space-y-10">
                <div className="flex flex-col items-center space-y-6 lg:space-y-10">
                    <p className=" text-3xl md:text-5xl lg:text-[80px]  font-bold leading-12 text-center  w-[85%]">
                        Let’s make impact together, give.</p>
                    <p className="md:text-xl lg:text-2xl font-medium leading-7 lg:leading-9 text-center  lg:w-[60%] w-[85%]">
                        Join us on the journey to impact, as we shape lives and make learning and living easier and more enjoyable.
                        Reach out to the Alumni Secretariat on <a href="tel:08161904403" className="text-[#007df0] cursor-pointer">08161904403</a>

                    </p>

                </div>
            </div>
        </section>
    );
};

export default GiveHero;
