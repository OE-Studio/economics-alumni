import React from "react";
// import hero from "../../assets/image/heroImg.svg";
// import globe from "../../assets/image/globe.svg";
// import createGlobe from "cobe";
import { MdSouth } from "react-icons/md"
import {Link} from "react-router-dom"

const Hero = () => {
  // const canvasRef = useRef();


  

  // useEffect(() => {    
  //   let y= 5450
  //   let phi = 0;
  //   const globe = createGlobe(canvasRef.current, {
  //     devicePixelRatio: 2,
  //     width: window.innerWidth,
  //     height: 1000 * 3.5,
  //     phi: 0,
  //     theta: -0.17,
  //     dark: 1,
  //     diffuse: 1.2,
  //     mapSamples: 16000,
  //     mapBrightness: 5,
  //     baseColor: [0.3, 0.3, 0.3],
  //     markerColor: [0.3, 0.3, 0.3],
  //     glowColor: [0, 0, 0],
  //     offset: [window.innerWidth, y],
  //     markers: [
  //       // longitude latitude
  //       // { location: [37.7595, -122.4367], size: 0.03 },
  //       // { location: [40.7128, -74.006], size: 0.1 },
  //     ],
  //     onRender: (state) => {
  //       // Called on every animation frame.
  //       // `state` will be an empty object, return updated params.
  //       state.phi = phi;
  //       phi += 0.01;
  //     },
  //   });
  //   return () => {
  //     globe.destroy();
  //   };
  // }, []);

  return (
    <section className="p-4 md:p-10 lg:px-16 pb-0 md:pb-0 container mx-auto">
      <div className="flex flex-col justify-between lg:items-center  space-y-4 lg:space-y-10">
        <div className="flex flex-col items-center space-y-6 lg:space-y-10">
          <p className=" text-3xl md:text-5xl lg:text-[80px] font-bold leading-12 text-center text-white">
            University of Ibadan <br className="hidden lg:block" />
            Economics Alumni {}
          </p>
          <p className="md:text-xl font-medium text-center text-white lg:w-full w-[85%]">
            An enduring legacy of leadership & excellence.{" "}
          </p>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10  items-center font-campton">
            <Link to="/register" className="inline-flex items-center justify-center px-7 py-3 bg-yellow-300 cursor-pointer">
              <p className=" sm:text-sm text-base font-semibold text-blue-900">
                Alumni Registration
              </p>
            </Link>
            <div className="flex space-x-4 items-center cursor-pointer">
              <p className="text-base font-semibold text-white">Get started</p>
              <MdSouth className="bg-[#FB7800] rounded-full text-white text-2xl p-2 box-content" />
            </div>
          </div>
        </div>

        {/* <div className="w-full  flex justify-center  h-[30vh]">
          <canvas ref={canvasRef} className="mix-blend-screen w-screen" id="canvasSpace" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
