import React from "react";
import { Page } from "@/views/Layouts";
import { Modal } from "@/components/common";

const AddLogButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => (
  <button
    className="btn-secondary w-[200px] justify-center gap-[10px]"
    {...props}
  >
    <div>Add Log</div>
    <IconGgAdd />
  </button>
);

const lala = () => {
  console.log("lallla");
};

export const Logbook: React.FC<{}> = (props) => {
  return (
    <Page>
      <Modal isOpen={true} />
      <div className="flex flex-row justify-end">
        <AddLogButton onClick={lala} />
      </div>
    </Page>
  );
};
