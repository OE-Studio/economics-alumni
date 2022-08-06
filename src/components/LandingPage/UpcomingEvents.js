import React from "react";
import "./UpcomingEvents.css";



// function EventCard(props) {
//   return (
//     <div
//       className="flex space-x-4 p-4 md:p-8 bg-white hover:shadow-2xl w-full md:w-4.5/10 border border-gray-200 hover:border-transparent"
//       data-aos="fade-up"
//     >
//       <div className="flex flex-col justify-between">
//         <div>
//           <p className="text-2xl lg:text-5xl font-medium text-gray-500">
//             {props.day}
//           </p>
//           <p className="text-xs lg:text-xl font-medium text-gray-500 -mt-2">
//             {props.month}
//           </p>
//         </div>
//         <div>
//           {props.video && (
//             <div className="videoMeeting">
//               <RiVidiconLine></RiVidiconLine>
//             </div>
//           )}
//           {props.private && (
//             <div className="privateMeeting">
//               <RiLockLine></RiLockLine>
//             </div>
//           )}
//           {props.audio && (
//             <div className="audioMeeting">
//               <RiMicLine></RiMicLine>
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="flex flex-col space-y-6">
//         <div className="space-y-3">
//           <p className="text-sm lg:text-2xl font-medium text-gray-500">
//             {props.eventTitle}
//           </p>
//           <div className="transform -rotate-180 opacity-10 w-full h-0.5 bg-black" />

//           <p className="text-lg font-semibold tracking-wide leading-normal capitalize">
//             {props.eventGuest}
//           </p>
//         </div>
//         <div className="flex flex-col space-y-1">
//           <p className="text-sm font-bold tracking-wide leading-tight uppercase">
//             Venue
//           </p>
//           <p className="text-base font-medium tracking-wide leading-normal text-gray-600">
//             {props.eventVenue}
//           </p>
//         </div>

//         <div className="flex flex-col space-y-2">
//           <p className="text-sm font-bold tracking-wide leading-tight uppercase">
//             Time
//           </p>
//           <p className="text-base font-medium tracking-wide leading-normal text-gray-600">
//             {props.eventTime}
//           </p>
//         </div>

//         <FlatButton name="View More" className="flatButton"></FlatButton>
//       </div>
//     </div>
//   );
// }

function UpcomingEvents() {
  return (
    <section className="container mx-auto p-4 md:p-10 lg:p-20  space-y-12 lg:space-y-12 lg:pt-36 pt-20">
      <p className="text-4xl lg:text-[64px] leading-[105%] font-bold ">
        <span className="text-[#D0D0D0]">Our upcoming </span>
        <br className="hidden lg:block" />
        events
      </p>
      <div className="flex gap-[1%] justify-between flex-col lg:flex-row space-y-6 lg:space-y-0">
        <div className="bg-[#ebf5fd] lg:w-[31%]" style={{ height: 500 }}></div>
        <div className="bg-[#ebf5fd] lg:w-[31%]" style={{ height: 500 }}></div>
        <div className="bg-[#ebf5fd] lg:w-[31%]" style={{ height: 500 }}></div>
      </div>
    </section>
  );
}

export default UpcomingEvents;
