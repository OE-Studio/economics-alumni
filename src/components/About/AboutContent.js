import React, { useRef } from "react";
import { useInView } from "framer-motion"
const AboutContent = () => {

  const alumni = useRef(null);
  const isInViewAlumni = useInView(alumni)

  let empty = "-ml-1 w-2 bg-transparent"
  let alumniIndicator = empty

  const hODAddress = useRef(null);
  const isInViewhODAddress = useInView(hODAddress)
  let hODAddressIndicator = empty
  const chairmanAddress = useRef(null);
  const isInViewchairmanAddress = useInView(chairmanAddress)
  let chairmanAddressIndicator = empty

  if (isInViewAlumni) {
    alumniIndicator = "-ml-1 w-2 bg-black"
    hODAddressIndicator = chairmanAddressIndicator = empty
  }

  if (isInViewhODAddress) {
    hODAddressIndicator = "-ml-1 w-2 bg-black"
    alumniIndicator = chairmanAddressIndicator = empty
  }

  if (isInViewchairmanAddress) {
    chairmanAddressIndicator = "-ml-1 w-2 bg-black"
    alumniIndicator = hODAddressIndicator = empty
  }




  return (
    <section className="container mx-auto p-4 md:p-10 lg:px-20 lg:pt-0 w-screen flex justify-between">
      <div className="w-[25%] hidden lg:flex self-start sticky top-20 animate">
        <div className="w-1 bg-[#CAEDFF]"></div>
        <div className="inline-flex flex-col space-y-6 items-start justify-start">
          <a
            href="#aboutAlumni"
            className="text-base font-medium flex space-x-6"
          >
            <div className={alumniIndicator} />
            <p className="py-1"> About the Alumni</p>
          </a>
          <a
            href="#HODAddress"
            className="text-base font-medium  flex space-x-6"
          >
            <div className={hODAddressIndicator} />
            <p className="py-1"> A Word from the Head of Department</p>
          </a>
          <a
            href="#chairmanAddress"
            className="text-base font-medium  flex space-x-6"
          >
            <div className={chairmanAddressIndicator} />
            <p className="py-1">
              {" "}
              A Word from the Chairman of the Interim Council
            </p>
          </a>
          <a
            href="#coucilMember"
            className="text-base font-medium  flex space-x-6"
          >
            <div className="-ml-1 w-2 bg-transparent" />
            <p className="py-1"> Members of the Interim Alumni Council</p>
          </a>
        </div>
      </div>
      <div className="bg-[#F8FCFF] lg:w-[70%] p-10 space-y-20 scroll-smooth">
        <div className="space-y-6" id="aboutAlumni" ref={alumni}>
          <div className="h-10 hidden lg:block"></div>
          <p className="text-5xl font-semibold leading-10">About the Alumni</p>
          <div className="h-1 hidden lg:block"></div>
          <p className="text-base leading-relaxed text-gray-500">
            I and members of the Interim Council of UI Eco Alumni are pleased to
            accept the responsibility to do the groundwork needed to get much
            esteemed alumni from all class sets better connected and well
            informed of the situation with the facilities, students, and staff
            of our highly treasured Economics Department as we approach our
            maiden Homecoming/Reunion where we will all elect the Council.{" "}
            <br />
            <br />
            The specific aims and objectives of the UI Eco Alumni are:
          </p>
          <ul className="text-base leading-7 text-gray-500 list-disc p-10 pl-12 bg-[#EEF8FD] border border-[#8AD7FF]  marker:text-black space-y-4">
            <li>
              To build a strong network of members and support the department,
              its current students, and faculty.
            </li>
            <li>
              To encourage one another and the institutions we lead to give back
              to the department.
            </li>

            <li>
              To keep the memories of the department and its heroes alive and
              chart the path to a greater future.
            </li>

            <li>
              To give due recognition to distinguished alumni, students, and
              faculty.
            </li>

            <li>
              To provide thought leadership to the society in the field of
              economics.
            </li>
          </ul>
        </div>

        <hr className="border-[#CAEDFF]  border w-full h-0.5" />

        <div className="space-y-6" id="HODAddress" ref={hODAddress}>
          <div className="h-10 hidden lg:block"></div>
          <p className="text-5xl font-semibold leading-snug">
            A Word from the Head of Department
          </p>
          <div className="h-1 hidden lg:block"></div>
          <p className="text-base leading-relaxed text-gray-500">
            The department is grateful for the services rendered by the UI Eco
            Alumni Council since its inauguration, as well as the generous
            donations received from individual alumnus and alumnae and
            class-sets, prior and posterior to the call of the department for
            support.
            <br />
            Our Alumni straddle various echelons of the Nigerian economy. In the
            face of near zero allocation for capital expenditure, the alumni
            remain perhaps the only viable source of support to sustain the
            position of the department as the foremost Department of Economics
            in Africa that is strong, relevant, and respected nationally and
            internationally.
            <br />
            <br />
            We look forward to the First Homecoming event planned for August 22
            to 27, 2022 to receive our distinguished alumni back to the
            department. It will be an opportunity for old classmates to
            reconnect and to meet with faculty members and current students.
            Once again, I thank you for your support as I call on you and your
            class-sets to keep supporting the department.
          </p>
        </div>

        <hr className="border-[#CAEDFF]  border w-full h-0.5" />

        <div className="space-y-6" id="chairmanAddress" ref={chairmanAddress}>
          <div className="h-10 hidden lg:block"></div>
          <p className="text-5xl font-semibold leading-snug">
            A Word from the Chairman of the Interim Council
          </p>
          <div className="h-1 hidden lg:block"></div>
          <p className="text-base leading-relaxed text-gray-500">
            I and members of the Interim Council of UI Eco Alumni are pleased to
            accept the responsibility to do the groundwork needed to get much
            esteemed alumni from all class sets better connected and well
            informed of the situation with the facilities, students, and staff
            of our highly treasured Economics Department as we approach our
            maiden Homecoming/Reunion where we will all elect the Council.
            <br />
            <br />
            We now have a growing database of members and many of us have been
            signing up on our social media handles whilst also encouraging other
            members, especially those in our class sets, to do the same. We are
            encouraged by our responses so far and urge that we increase the
            momentum so we can have a good attendance at the forthcoming
            homecoming/reunion.
            <br />
            <br />
            This maiden edition of the UI Eco Alumni Newsletter will be followed
            by other editions to keep us informed of happening in the
            Department, its facilities, students, and staff, and what the Alumni
            are doing to support by making donations in cash and in kinds as
            individuals and as class sets. A major addition to look forward to
            in subsequent editions is Alumni News that also keep people in the
            Department informed about the difference that we are making out
            there. Towards this end, we encourage us all to post news about our
            professional strides on our social media platforms where we can
            harvest them for inclusion in newsletters.
            <br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
