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
      >
        <form onSubmit={handleSubmit} className="w-full flex gap-[10px] flex-col" C>
          <FormInput
            {...register("weight", { valueAsNumber: true })}
            type="number"
            name="weight"
            placeholder="Weight"
            isInvalid={formErrors.weight}
            icon={<IconGgMail className="h-[20px] w-[20px]" />}
            errorMessage={formErrors.weight?.message}
          />
          <FormInput
            {...register("calories", { valueAsNumber: true })}
            type="number"
            name="calories"
            placeholder="calories"
            isInvalid={formErrors?.calories}
            icon={<IconGgLock className="h-[20px] w-[20px]" />}
            errorMessage={formErrors.calories?.message}
            maxLength={24}
          />
          <FormInput
            {...register("date")}
            type="date"
            name="date"
            placeholder="date"
            isInvalid={formErrors?.date}
            icon={<IconGgLock className="h-[20px] w-[20px]" />}
            errorMessage={formErrors.date?.message}
            maxLength={24}
          />
          <FormButton isLoading={isLoading} text="Add Log" />
        </form>
      </Modal>
      <div className="flex flex-row justify-end">
        <AddLogButton onClick={() => setIsModalOpen(true)} />
      </div>
    </Page>
  );
};
