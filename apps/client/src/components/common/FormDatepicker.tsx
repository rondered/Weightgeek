import React from "react";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";

interface IFormDatepicker extends ReactDatePickerProps {
  icon?: React.ReactNode;
  isInvalid?: boolean;
  errorMessage?: boolean;
}

export const FormDatepicker: React.FC<IFormDatepicker> = (props) => {
  const { icon, isInvalid, errorMessage, ...datepickerProps } = props;

  return <DatePicker {...datepickerProps} />;
};
