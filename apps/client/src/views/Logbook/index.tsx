import React from "react";
import {Page} from "@/layouts";
import {
  Modal,
  FormInput,
  FormButton,
  FormDatepicker,
  Table,
} from "@/components/common";
import {useAddLog} from "./useAddLog";
import {useGetLogs} from "./useGetLogs";
import {formatDate} from "@/utils";

const AddLogButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => (
  <button
    className="btn-secondary w-full md:w-[200px] justify-center gap-[10px]"
    {...props}
  >
    <div>Add Log</div>
    <IconGgAdd />
  </button>
);

export const Logbook: React.FC<{}> = (props) => {
  const {
    isLoading,
    handleSubmit,
    formErrors,
    formValues,
    handleFormChange,
    isModalOpen,
    openModal,
    closeModal
  } = useAddLog();

  const {isLoading: isGetLogsLoading, data} = useGetLogs();

  const columns = React.useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date",
        Cell: (props) => (
          <div className="flex items-center justify-center p-2">
            {formatDate(props.value)}
          </div>
        ),
      },
      {
        Header: "Weight",
        accessor: "weight",
        Cell: (props) => (
          <div className="flex items-center justify-center p-2">
            {props.value}
          </div>
        ),
      },
      {
        Header: "Calories",
        accessor: "calories",
        Cell: (props) => (
          <div className="flex items-center justify-center p-2">
            {props.value}
          </div>
        ),
      },
    ],
    []
  );

  return (
    <Page>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Add New Log"
      >
        <form
          onSubmit={handleSubmit}
          className="w-full flex gap-[10px] flex-col"
          autoComplete="off"
        >
          <FormInput
            placeholder="Weight"
            type="number"
            name="weight"
            step=".01"
            isInvalid={!!formErrors.weight}
            onChange={handleFormChange}
            value={formErrors.weight}
            icon={<IconIonScaleOutline className="h-[20px] w-[20px]" />}
            errorMessage={formErrors.weight}
          />
          <FormInput
            placeholder="Calories"
            type="number"
            name="calories"
            isInvalid={!!formErrors.calories}
            onChange={handleFormChange}
            value={formValues.calories}
            icon={<IconIconParkOutlineFire className="h-[20px] w-[20px]" />}
            errorMessage={formErrors.calories}
          />
          <FormDatepicker
            inline
            name="date"
            onChange={handleFormChange}
            value={formValues.date}
            isInvalid={!!formErrors.date}
            errorMessage={formErrors.date}
          />
          <FormButton type="submit" isLoading={isLoading} text="Save" />
        </form>
      </Modal>
      <div className="flex flex-row justify-end">
        <AddLogButton onClick={openModal} />
      </div>
      {data && (
        <Table
          onRowClick={(e) => console.log(e)}
          columns={columns}
          data={data}
        />
      )}
    </Page>
  );
};
