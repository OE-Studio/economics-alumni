import React from "react";

import { MdNorthEast } from "react-icons/md";

function History() {
  return (
    <div className="bg-[#eff8ff] lg:bg-transparent w-full">
      <section className="container mx-auto p-4 md:p-10 lg:px-20 lg:pt-0 w-screen">
        <div className=" flex flex-col md:flex-row bg-[#eff8ff] w-full justify-between  lg:px-20 lg:py-20 py-6 px-2 space-y-8 md:space-y-0">
          <p className="text-2xl lg:text-4xl font-semibold leading-10 md:w-[30%]">
            History of the
            Department of
            Economics UI.
          </p>
          <div className=" md:w-[70%] lg:w-[60%] space-y-6">
            <p className="text-base leading-relaxed text-gray-500">
              {" "}
              It was a small department offering limited numbers of courses to a
              small number of students. There were twenty-five students in
              Economics in 1958. While struggling to cope with the challenges of
              under-funding, explosion in student population and problem of
              brain-drain, the department continues to strive to maintain a
              threshold of excellence in its programmes, involving a wide array
              of courses that are available The tradition of excellence which
              the department has established has continued to attract students
              into the Bachelor of Science, Master of Science and Doctoral
              degree programmes in Economics. The department admitted for the
              first time in 1986 a set of students for the newly introduced
              four-year B.Sc. programme in Economics. By 1987/88, the number of
              undergraduate students at all levels (major and subsidiary) in the
              Department had risen to a total of 824 students. There are about
              eighty students in the master’s degree programme in Economics and
              thirty-seven in the M.Phil/Ph.D. programmes.
            </p>
            <a href="https://economics.ui.edu.ng/about-us" target="_blank" rel="noreferrer" className="font-bold text-[#2E2E2E] uppercase inline-flex items-center self-start border-b-2 border-[#2E2E2E]">
              Read more here
              <span className="ml-2">
                <MdNorthEast className="font-bold" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default History;
