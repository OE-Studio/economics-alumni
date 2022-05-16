import React from "react";
import "./UpcomingEvents.css";

import {
  RiVidiconLine,
  RiMicLine,
  RiLockLine,
  RiArrowRightLine,
} from "react-icons/ri";

function FlatButton(props) {
  const style = {
    fontFamily: "Campton",
    border: "unset",
    backgroundColor: "transparent",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    padding: "0",
    color: `${props.color}`,
  };

  return (
    <div>
      <button style={style}>
        {" "}
        {props.name}{" "}
        <RiArrowRightLine style={{ marginLeft: "20px" }}></RiArrowRightLine>{" "}
      </button>
    </div>
  );
}

function EventCard(props) {
  return (
    <div
      className="flex space-x-4 p-4 md:p-8 bg-white hover:shadow-2xl w-full md:w-4.5/10 border border-gray-200 hover:border-transparent"
      data-aos="fade-up"
    >
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-2xl lg:text-5xl font-medium text-gray-500">
            {props.day}
          </p>
          <p className="text-xs lg:text-xl font-medium text-gray-500 -mt-2">
            {props.month}
          </p>
        </div>
        <div>
          {props.video && (
            <div className="videoMeeting">
              <RiVidiconLine></RiVidiconLine>
            </div>
          )}
          {props.private && (
            <div className="privateMeeting">
              <RiLockLine></RiLockLine>
            </div>
          )}
          {props.audio && (
            <div className="audioMeeting">
              <RiMicLine></RiMicLine>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        <div className="space-y-3">
          <p className="text-sm lg:text-2xl font-medium text-gray-500">
            {props.eventTitle}
          </p>
          <div className="transform -rotate-180 opacity-10 w-full h-0.5 bg-black" />

          <p className="text-lg font-semibold tracking-wide leading-normal capitalize">
            {props.eventGuest}
          </p>
        </div>
        <div className="flex flex-col space-y-1">
          <p className="text-sm font-bold tracking-wide leading-tight uppercase">
            Venue
          </p>
          <p className="text-base font-medium tracking-wide leading-normal text-gray-600">
            {props.eventVenue}
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <p className="text-sm font-bold tracking-wide leading-tight uppercase">
            Time
          </p>
          <p className="text-base font-medium tracking-wide leading-normal text-gray-600">
            {props.eventTime}
          </p>
        </div>

        <FlatButton name="View More" className="flatButton"></FlatButton>
      </div>
    </div>
  );
}

function UpcomingEvents() {
  return (
    <section className="container mx-auto p-4 md:p-10 lg:p-16 font-campton flex flex-col lg:flex-row justify-between space-y-12 lg:space-y-0 lg:space-x-20">
      <div className="flex flex-col space-y-8 w-full lg:w-1/3">
        <p className="text-5xl font-medium text-center lg:text-left">
          Upcoming events
        </p>
        <p className="text-lg font-book tracking-wide leading-relaxed text-gray-800 text-center lg:text-left">
          Stay informed on inaugural lectures, intervention programmes,
          workshops, seminars, get-togethers, and other events carefully put
          together to give you a balanced academic experience.
        </p>

        <div className="mx-auto md:mx-0"><FlatButton name="See all events"></FlatButton></div>
      </div>
      <div className="flex flex-col md:flex-wrap md:flex-row md:w-7/12 lg:w-8/12 gap-7 justify-end">
        <EventCard
          video
          day="02"
          month="sept"
          eventTitle="500th Inaugural Lecture"
          eventGuest="Prof. O. O. Aregbeyen"
          eventVenue="Trenchard Hall, University of Ibadan"
          eventTime="5:00pm"
        />

        <EventCard
          private
          day="07"
          month="Aug."
          eventTitle="Distinguished Leadership Lecture"
          eventGuest="Mr. Godwin Emefiele, Governor, Central Bank of Nigeria"
          eventVenue="Trenchard Hall, University of Ibadan"
          eventTime="5:00pm"
        ></EventCard>

        <EventCard
          audio
          day="02"
          month="Sep."
          eventTitle="MSc Students Visit CBN"
          eventGuest="AGES"
          eventVenue="Central Bank of Nigeria Heaquarters, Abuja"
          eventTime="10:00am"
        ></EventCard>

        <EventCard
          private
          day="07"
          month="Aug."
          eventTitle="Distinguished Leadership Lecture"
          eventGuest="Mr. Godwin Emefiele, Governor, Central Bank of Nigeria"
          eventVenue="Trenchard Hall, University of Ibadan"
          eventTime="5:00pm"
        ></EventCard>
      </div>
    </section>
  );
}

export default UpcomingEvents;
