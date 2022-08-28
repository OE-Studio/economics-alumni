import React from "react";
import {
  RiSearchLine,
  RiAddFill,
  RiArrowRightSLine,
  RiArrowLeftSLine,
} from "react-icons/ri";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import EmptyField from "../../views/Admin/dashboard/EmptyField";

function GalleryOverlay({ setOverlay, imageId }) {
  let [currentItem, setCurrentItem] = React.useState(0);

  const data = useSelector((state) => state.image.item);

  let publishedData = data.filter((item) => item.status === "publish");

  React.useEffect(() => {
    setCurrentItem(publishedData.findIndex((item) => item.uuid === imageId));
    console.log(currentItem);
    console.log(publishedData.length);
    // eslint-disable-next-line
  }, []);



  let forward = () => {
    console.log(currentItem);
    // setCurrentItem(currentItem - 1);
    if (currentItem === 0) {
      setCurrentItem(0);
      return;
    } else {
      setCurrentItem(currentItem--);
    }
  };

  let backward = () => {
    console.log(currentItem);
    // setCurrentItem(currentItem - 1);
    if (currentItem === publishedData.length-1) {
      console.log("first image");
      setCurrentItem(publishedData.length-1);
      return;
    } else {
      setCurrentItem(currentItem++);
    }
  };

  return (
    <motion.div
      initial={{ y: "-100vh", opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      exit={{ y: "-100vh", opacity: 0 }}
      className="fixed w-screen h-screen top-0 left-0 -translate-x-1/2 flex items-center justify-center bg-[#000000B2]"
      onClick={(e) => {
        if (e.target.id === "backgroundOverlay") {
          setOverlay(false);
        }
      }}
      id="backgroundOverlay"
    >
      <div className="flex lg:space-x-10 items-center">
        {currentItem !== publishedData.length-1 && (
          <div
            className="h-[48px] w-[48px] bg-white flex items-center justify-center cursor-pointer"
            onClick={() => {
              backward();
            }}
          >
            <RiArrowLeftSLine className="text-2xl" />
          </div>
        )}
        <div className="flex items-center justify-center overflow-hidden w-[400px] bg-white ">
          <img src={publishedData[currentItem].documentURL} alt="" />
          {/* <RiAddFill className="bg-[#F8F8F8] box-content text-3xl p-4" /> */}
        </div>
        {currentItem !== 0 && <div
          className="h-[48px] w-[48px] bg-white flex items-center justify-center cursor-pointer"
          onClick={() => {
            forward();
          }}
        >
          <RiArrowRightSLine className="text-2xl" />
        </div>}
      </div>
    </motion.div>
  );
}

function GalleryCard({
  cardid,
  title,
  date,
  description,
  setOverlay,
  setImageId,
  imageUrl,
}) {
  return (
    <motion.div
      layoutId={cardid}
      className="w-full border md:w-[48%] xl:w-[23.3%] font-inter"
      onClick={() => {
        setOverlay(true);
        setImageId(cardid);
      }}
    >
      <div
        className="flex items-center justify-center bg-cover bg-no-repeat overflow-hidden h-[240px]"
        style={{ backgroundImage: `url(${imageUrl.toString()})` }}
      >
        {!imageUrl && (
          <RiAddFill className="bg-[#F8F8F8] box-content text-3xl p-4" />
        )}
      </div>
      <div className="flex flex-col space-y-20 p-3.5 bg-[#F8F8F8]">
        <div className="space-y-3">
          <p className="text-xs font-semibold text-gray-300">{date}</p>
          <p className="text-xs font-medium">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

const GalleryList = () => {
  const [imageId, setImageId] = React.useState(1);
  const [overlay, setOverlay] = React.useState(false);

  const [searchTerm, setSearchTerm] = React.useState("");
  const data = useSelector((state) => state.image);
  let dataList;

  React.useEffect(() => {
    overlay
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [overlay]);

  const renderList = (List) => {
    dataList = List.map((item, index, list) => {
      let date = format(Date.parse(item.created_at), "dd/MM/yyyy");
      return (
        <GalleryCard
          setOverlay={setOverlay}
          setImageId={setImageId}
          cardid={item.uuid}
          date={date}
          description={item.description}
          imageUrl={item.documentURL}
        />
      );
    });
  };

  // Empty States
  if (data.status === "idle") {
    dataList = <EmptyField />;
  } else if (data.status === "pending") {
    dataList = <EmptyField />;
  }

  // Populate
  if (data.status === "fulfilled") {
    let allPublishedData = data.item.filter(
      // eslint-disable-next-line
      (item) => item.status === "publish"
    );

    let allResearch = allPublishedData.reverse().filter(
      // eslint-disable-next-line
      (item) => {
        if (searchTerm === "") {
          return item;
        } else if (
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return item;
        }
      }
    );

    if (allResearch.length === 0) {
      dataList = <EmptyField />;
    }

    if (allResearch.length > 0) {
      renderList(allResearch);
    }
  }

  return (
    <section
      className="p-4 md:p-10 lg:px-20 pb-16 lg:pb-20 container mx-auto relative z-20"
      id="gallery-container"
    >
      <div className="flex justify-between items-center flex-col-reverse md:flex-row gap-y-6">
        <p className="text-base font-semibold self-start lg:self-auto">
          Recent Images
        </p>
        <div className="border border-[#EDEDED] p-2 px-4 focus-within:border-[#7152ff] flex items-center space-x-4  w-full md:w-auto">
          <input
            type="search"
            placeholder="Search Image title date or description..."
            className="w-full md:w-[350px] focus:outline-none placeholder:text-[#ABABAB] placeholder:font-medium font-medium"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <div className="w-0.5 h-full bg-[#f0f0f0]" />
          <RiSearchLine className="bg-[#F1F6FA] text-[#1C1B1F] p-2 box-content" />
        </div>
      </div>
      <div className="flex flex-wrap gap-[25px] 2xl:gap-[30px] mt-10 md:mt-16">
        {dataList}
      </div>

      {overlay && <GalleryOverlay setOverlay={setOverlay} imageId={imageId} />}
    </section>
  );
};

export default GalleryList;
