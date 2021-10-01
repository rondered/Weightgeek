import React from "react";

interface IModel {
  children?: React.ReactNode;
  onClose: React.MouseEventHandler;
  title?: string;
  isOpen: boolean;
}

export const Modal: React.FC<IModel> = (props) => {
  const {children, onClose, isOpen, title} = props;

  return (
    <div
      className={`h-screen w-screen inset-0
    flex justify-center items-center 
    ${isOpen ? "absolute" : "hidden pointer-events-none"}`}
    >
      <div className="bg-black opacity-50 h-screen w-screen absolute" />
      <div className="flex justify-center items-center z-modal h-full w-full">
        <div className="card w-full h-full md:(h-auto w-modal)">
          <div className="flex justify-end px-5 py-5 items-center justify-between">
            <div className="modal-header">{title}</div>
            <IconGgClose className="cursor-pointer" onClick={onClose} />
          </div>
          <div className="divider w-full"></div>
          <div className="flex px-5 py-5">{children}</div>
        </div>
      </div>
    </div>
  );
};
