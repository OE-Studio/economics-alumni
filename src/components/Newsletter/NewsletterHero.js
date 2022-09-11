import React from "react";


const NewsLetterHero = () => {
    // const canvasRef = useRef();



    return (
        <section className="p-4 md:p-10 lg:px-16 pb-16 lg:pb-20 container mx-auto">
            <div className="flex flex-col justify-between lg:items-center  space-y-4 lg:space-y-10">
                <div className="flex flex-col items-center space-y-6 lg:space-y-10">
                    <p className=" text-5xl md:text-5xl lg:text-[80px]  font-bold leading-12 text-center w-[85%]">
                        Explore our library and
                        newsletter.          </p>
                    <p className="text-xl lg:text-xl font-medium leading-7 lg:leading-9 text-center  lg:w-[60%] w-[85%]">
                        Be abreast of the alumni news, news from the dpartment, and notabale events in the university of Ibadan.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default NewsLetterHero;
