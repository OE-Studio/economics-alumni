import React from "react";
import { RiSearchLine, RiAddFill } from "react-icons/ri";
import { motion } from "framer-motion";


function GalleryOverlay({ setOverlay, imageId }) {
  return (
    <motion.div 

    initial={{y:"-100vh", opacity:0}}
    animate={{y:0, opacity:1, transition:{duration: 0.3, ease:"easeInOut"}}}
    exit ={{y:"-100vh", opacity:0}}

      className="fixed w-screen h-screen top-0 left-0 -translate-x-1/2 flex items-center justify-center bg-[#000000B2] z-50"
      onClick={(e) => {
        if (e.target.id === "backgroundOverlay") {
          setOverlay(false);
        }
      }}
      id="backgroundOverlay"
    >
      <div>
        <div className="flex items-center justify-center overflow-hidden h-[240px] bg-white w-[400px]">
          <RiAddFill className="bg-[#F8F8F8] box-content text-3xl p-4" />
        </div>
      </div>
    </motion.div>
  );
}

function GalleryCard({ cardid, title, date, description, setOverlay, setImageId }) {
  return (
    <motion.div
     layoutId={cardid} className="w-full border md:w-[48%] xl:w-[23.3%] font-inter" onClick={()=>{setOverlay(true)
      setImageId(cardid)
    }}>
      <div className="flex items-center justify-center overflow-hidden h-[240px]">
        <RiAddFill className="bg-[#F8F8F8] box-content text-3xl p-4" />
      </div>
      <div className="flex flex-col space-y-20 p-3.5 bg-[#F8F8F8]">
        <div className="space-y-3">
          <p className="text-xs font-semibold text-gray-300">15/08/2022</p>
          <p className="text-xs font-medium">
            Short descrption comes here (if any)...
          </p>
        </div>
      </div>
    </motion.div>
  );
}

const GalleryList = () => {
  const [imageId, setImageId] = React.useState(1);
  const [overlay, setOverlay] = React.useState(false);

  React.useEffect(() => {
    overlay
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [overlay]);

  return (
    <section className="p-4 md:p-10 lg:px-20 pb-16 lg:pb-20 container mx-auto relative z-0">
      <div className="flex justify-between items-center flex-col-reverse md:flex-row gap-y-6">
        <p className="text-base font-semibold self-start lg:self-auto">Recent Images</p>
        <div className="border border-[#EDEDED] p-2 px-4 focus-within:border-[#7152ff] flex items-center space-x-4  w-full md:w-auto">
          <input
            type="search"
            placeholder="Search Image title date or description..."
            className="w-full md:w-[350px] focus:outline-none placeholder:text-[#ABABAB] placeholder:font-medium font-medium"
          />
          <div className="w-0.5 h-full bg-[#f0f0f0]" />
          <RiSearchLine className="bg-[#F1F6FA] text-[#1C1B1F] p-2 box-content" />
        </div>
      </div>
      <div className="flex flex-wrap gap-[25px] 2xl:gap-[30px] mt-10 md:mt-16">
        <GalleryCard setOverlay={setOverlay} setImageId={setImageId} cardid="1" />
        <GalleryCard setOverlay={setOverlay} setImageId={setImageId} cardid="2"/>
        <GalleryCard setOverlay={setOverlay} setImageId={setImageId} cardid="3"/>
        <GalleryCard setOverlay={setOverlay} setImageId={setImageId} cardid="4"/>
        <GalleryCard setOverlay={setOverlay} setImageId={setImageId} cardid="5"/>
        <GalleryCard setOverlay={setOverlay} setImageId={setImageId} cardid="6"/>
        <GalleryCard setOverlay={setOverlay} setImageId={setImageId} cardid="7"/>
        <GalleryCard setOverlay={setOverlay} setImageId={setImageId} cardid="8"/>
        <GalleryCard setOverlay={setOverlay} setImageId={setImageId} cardid="9"/>
        <GalleryCard setOverlay={setOverlay} setImageId={setImageId} cardid="10"/>
        <GalleryCard setOverlay={setOverlay} setImageId={setImageId} cardid="11"/>
        <GalleryCard setOverlay={setOverlay} setImageId={setImageId} cardid="12"/>
        <GalleryCard setOverlay={setOverlay} setImageId={setImageId} cardid="13"/>
      </div>

      {overlay && <GalleryOverlay setOverlay={setOverlay} imageId={imageId}/>}
    </section>
  );
};

export default GalleryList;
