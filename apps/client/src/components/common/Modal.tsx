import React from "react";

interface IModel {
  children?: React.ReactNode;
  isOpen: boolean;
}

export const Modal: React.FC<IModel> = (props) => {
  return (
    <div
      className={`h-screen w-screen inset-0
    flex justify-center items-center 
    ${props.isOpen ? "absolute" : "hidden pointer-events-none"}`}
    >
      <div className="bg-black opacity-50 h-full w-full absolute" />
      <div className="flex justify-center z-modal">
        <div className="card p-10">lala</div>
      </div>
    </div>
  );
};
