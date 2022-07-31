import React from "react";
import {RiArrowDownLine} from "react-icons/ri"

const GalleryHero = () => {
    // const canvasRef = useRef();



    return (
        <section className="p-4 md:p-10 lg:px-16 pb-16 lg:pb-20 container mx-auto">
            <div className="flex flex-col justify-between lg:items-center  space-y-4 lg:space-y-10">
                <div className="flex flex-col items-center space-y-6 lg:space-y-10">
                    <p className=" text-3xl md:text-5xl lg:text-[80px]  font-bold leading-12 text-center text-white w-[85%]">
                        See our gallery</p>
                    <p className="md:text-xl lg:text-xl font-medium leading-7 lg:leading-9 text-center text-white lg:w-[60%] w-[85%]">
                        Past events, organised workshops, and strategic meetings. See all our events in pictures.
                    </p>
                    <div className="inline-flex space-x-4 items-center justify-start py-4 pl-5 pr-3.5 border rounded-full border-blue-800 border-opacity-95 font-campton">
                        <p className="text-base font-semibold text-blue-300 text-opacity-95">Explore our gallery below</p>
                        <RiArrowDownLine className="p-1.5 bg-[#FB7800] rounded-full box-content text-white"/>
                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GalleryHero;
