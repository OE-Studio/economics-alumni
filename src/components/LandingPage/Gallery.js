import React from 'react'
import {useLocation} from 'react-router-dom'

const Gallery = () => {
    const { pathname } = useLocation();
    const location = pathname.split("/");
    console.log(location);
    


  return (
    <section className="bg-[#F0F0F0] font-campton">
        <div className="container mx-auto p-4 py-16 mt-10 md:p-10 lg:p-16">
            <div className="space-y-6">
            <p className="text-4xl lg:text-5xl font-semibold text-center lg:text-left">Alumni in Pictures </p>
            <div className="flex flex-col lg:w-8/12 justify-between lg:flex-row space-y-6 lg:space-y-0">
            <p className="text-base md:text-lg text-gray-800 lg:w-7/12 text-center lg:text-left" >Past events, organised workshops, and strategic meetings, trainings and classes</p>
            { location[1] !== 'gallery' && <button className="bg-[#0075B3] p-4 text-white">
                View full gallery
            </button>}
            </div>
            </div>
            <div className="h-24"></div>
            <div className="flex flex-wrap gap-8">
            <div className="w-full md:w-4.5/10 h-60 rounded-lg bg-white"></div>
            <div className="w-full md:w-4.5/10 h-60 rounded-lg bg-white"></div>
            <div className="w-full md:w-4.5/10 h-60 rounded-lg bg-white"></div>
            <div className="w-full md:w-4.5/10 h-60 rounded-lg bg-white"></div>
            <div className="w-full md:w-4.5/10 h-60 rounded-lg bg-white"></div>
            <div className="w-full md:w-4.5/10 h-60 rounded-lg bg-white"></div>
        </div>
        
        </div>

        

    </section>
  )
}

export default Gallery