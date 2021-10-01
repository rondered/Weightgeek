import React from "react";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "./FormDatepicker.css";

interface IFormDatepicker extends ReactDatePickerProps {
  isInvalid?: boolean;
  errorMessage?: string;
}

export const FormDatepicker: React.FC<IFormDatepicker> = (props) => {
  const { isInvalid, errorMessage, ...datepickerProps } = props;

  return (
    <>
      <div className={`input-field ${isInvalid && `border-red-400 border-2`}`}>
        <DatePicker {...datepickerProps} />
      </div>
    </>
  );
};
