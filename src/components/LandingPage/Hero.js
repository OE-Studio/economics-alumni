import React, { useEffect } from "react";
// import hero from "../../assets/image/heroImg.svg";
import globe from "../../assets/image/globe.svg";
// import createGlobe from "cobe";
import { MdSouth } from "react-icons/md"

const Hero = () => {
  // const canvasRef = useRef();

  useEffect(() => {
    // let phi = 0;
    // const globe = createGlobe(canvasRef.current, {
    //   devicePixelRatio: 2,
    //   width: 600 * 2,
    //   height: 600 * 2,
    //   phi: 0,
    //   theta: 0,
    //   dark: 1,
    //   diffuse: 1.2,
    //   mapSamples: 16000,
    //   mapBrightness: 12,
    //   baseColor: [0.3, 0.3, 0.3],
    //   markerColor: [0.1, 0.8, 1],
    //   glowColor: [1, 1, 1],
    //   markers: [
    //     // longitude latitude
    //     { location: [37.7595, -122.4367], size: 0.03 },
    //     { location: [40.7128, -74.006], size: 0.1 },
    //   ],
    //   onRender: (state) => {
    //     // Called on every animation frame.
    //     // `state` will be an empty object, return updated params.
    //     state.phi = phi;
    //     phi += 0.01;
    //   },
    // });
    // return () => {
    //   globe.destroy();
    // };
  }, []);

  return (
    <section className="p-4 md:p-10 lg:px-16 lg:pb-0 container mx-auto">
      <div className="flex flex-col justify-between lg:items-center  space-y-4 lg:space-y-10">
        <div className="flex flex-col items-center space-y-6 lg:space-y-10">
          <p className=" text-6xl md:text-5xl lg:text-8xl font-bold leading-12 text-center text-white">
            University of Ibadan <br className="hidden lg:block" />
            Economics Alumni
          </p>
          <p className="text-2xl font-medium leading-9 text-center text-white lg:w-full w-[85%]">
            An enduring legacy of leadership & excellence.{" "}
          </p>
          <div className="flex space-x-10 items-center font-campton">
            <div className="inline-flex items-center justify-center px-10 pt-5 pb-4 bg-yellow-300 rounded-lg">
              <p className="text-base font-semibold text-blue-900">
                Alumni Portal
              </p>
            </div>
            <div className="flex space-x-4 items-center">
              <p className="text-base font-semibold text-white">Get started</p>
              <MdSouth className="bg-[#FB7800] rounded-full text-white text-2xl p-2 box-content" />
            </div>
          </div>
        </div>

        <div className="w-full h-[30vh] lg:h-[40vh] 2xl:h-[30vh] overflow-hidden flex justify-center">
          <img src={globe} alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
