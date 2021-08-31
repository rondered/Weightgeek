import React from "react";
import { Page } from "@/components/layout";
import { FormInput } from "@/components/common";
import Datepicker from "react-datepicker";
import {
  RiScales2Line as WeightIcon,
  RiFireLine as CaloriesIcon,
} from "react-icons/ri";

export const Logbook = () => {
  return (
    <Page>
      <div className="flex flex-row gap-[30px] overflow-x-scroll">
        <div className="card h-[150px] w-[150px] bg-blue-500 flex-none text-white">
          lala
        </div>
        <div className="card h-[150px] w-[150px] bg-gradient-4 flex-none text-white">
          lala
        </div>
        <div className="card h-[150px] w-[150px] bg-lime-500 flex-none text-white">
          lala
        </div>
      </div>
      <div className="card w-full mt-[40px]">lala</div>
    </Page>
  );
};
