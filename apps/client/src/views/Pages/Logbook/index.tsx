import React from "react";
import { Page } from "@/views/Layouts";
import { Modal, FormInput, FormButton } from "@/components/common";
import { useAddLog } from "./useAddLog";

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

export const Logbook: React.FC<{}> = (props) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const { register, formErrors, isLoading, handleSubmit } = useAddLog();

  return (
    <Page>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        title="Add New Log"
      >
        <form
          onSubmit={handleSubmit}
          className="w-full flex gap-[10px] flex-col"
          C
        >
          <FormInput
            {...register("weight")}
            type="number"
            name="weight"
            placeholder="Weight"
            isInvalid={formErrors.weight}
            icon={<IconIonScaleOutline className="h-[20px] w-[20px]" />}
            errorMessage={formErrors.weight?.message}
          />
          <FormInput
            {...register("calories")}
            type="number"
            name="calories"
            placeholder="Calories"
            isInvalid={formErrors?.calories}
            icon={<IconIconParkOutlineFire className="h-[20px] w-[20px]" />}
            errorMessage={formErrors.calories?.message}
            maxLength={24}
          />
          <FormInput
            {...register("date")}
            type="date"
            name="date"
            placeholder="date"
            isInvalid={formErrors?.date}
            icon={<IconGgCalendar className="h-[20px] w-[20px]" />}
            errorMessage={formErrors.date?.message}
            maxLength={24}
          />
          <FormButton isLoading={isLoading} text="Save" />
        </form>
      </Modal>
      <div className="flex flex-row justify-end">
        <AddLogButton onClick={() => setIsModalOpen(true)} />
      </div>
    </Page>
  );
};
