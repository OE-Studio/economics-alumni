import React from "react";
import { MdExpand } from "react-icons/md";
import ImpactCard from "../Impact/ImpactCard";
import {Link} from "react-router-dom"

function Impact() {
  return (
    <section className="container mx-auto p-4 pt-16 md:p-10 lg:p-20  space-y-0 lg:space-y-12 lg:pt-36">
      <p className="text-4xl font-bold">
        <span className="text-[#D0D0D0]">Track out recent </span>
        <br className="hidden lg:block" />
        impacts
      </p>
      <ImpactCard />
      <ImpactCard />
      <ImpactCard />
      <ImpactCard />

      <div className="flex justify-center">
        <Link to="/impact" className="inline-flex items-center space-x-4 justify-center px-7 py-3 border border-black mx-auto self-center">
          <MdExpand />
          <p className=" text-base font-bold cursor-pointer">
            Track all impact
          </p>
        </Link>
      </div>
    </section>
  );
}

export default Impact;
