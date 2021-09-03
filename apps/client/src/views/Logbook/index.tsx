import React from "react";
import { Page, ActionBar } from "@/components/layout";
import * as dayjs from "dayjs";
import { LogbookTable } from "./LogbookTable";

const DATE_FORMAT = "dddd, MMMM D, YYYY";

const WeighInHeader: React.FC<{
  weight: number | undefined;
  calories: number | undefined;
  units: "kg" | "lbs";
}> = (props) => {
  return (
    <div className="w-full p-5 bg-primary flex flex-col gap-[10px] text-white h-screen-[350px]">
      <div className="weight flex flex-row gap-[10px] items-end">
        <div className="font-bold text-5xl">{props.weight}</div>
        <div className="font-bold text-lg">{props.units.toUpperCase()}</div>
      </div>
      <div className="weight flex flex-row gap-[10px] items-end">
        <div className="font-semibold">{props.calories}</div>
        <div className="font-semibold">CALORIES</div>
      </div>
    </div>
  );
};

export const Logbook = () => {
  const [logDate, setLogDate] = React.useState<Date>(new Date());

  const data = [
    { date: "11/03/2022", calories: 2000, weight: 80 },
    { date: "11/03/2022", calories: 2000, weight: 80 },
    { date: "11/03/2022", calories: 2000, weight: 80 },
  ];

  return (
    <Page>
      <ActionBar>{dayjs(logDate).format(DATE_FORMAT)}</ActionBar>
      <WeighInHeader units="kg" weight={72} calories={2000} />
      <div className="justify-center flex">
        <div className="latest-logs-container rounded shadow-xl w-[360px] bg-white bottom-[41px] relative">
          <LogbookTable data={data} />
        </div>
      </div>
    </Page>
  );
};
