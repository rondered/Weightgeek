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
import {useEditLog} from "./useEditLog";
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
    isLoading: isLoadingAddLog,
    handleSubmit: handleSubmitAddLog,
    reset: resetAddLog,
    Controller: ControllerAddLog,
    control: controlAddLog,
    isModalOpen: isModalOpenAddLog,
    setIsModalOpen: setIsModalOpenAddLog,
  } = useAddLog();

  const {
    isLoading: isLoadingEditLog,
    handleSubmit: handleSubmitEditLog,
    reset: resetEditLog,
    Controller: ControllerEditLog,
    control: controlEditLog,
    isModalOpen: isModalOpenEditLog,
    setIsModalOpen: setIsModalOpenEditLog,
    setLogToEdit,
    logToEdit
  } = useEditLog();

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
        isOpen={isModalOpenAddLog}
        onClose={() => {
          setIsModalOpenAddLog(false);
          resetAddLog();
        }}
        title="Add New Log"
      >
        <form
          onSubmit={handleSubmitAddLog}
          className="w-full flex gap-[10px] flex-col"
          autoComplete="off"
        >
          <ControllerAddLog
            control={controlAddLog}
            name="weight"
            render={({field: {ref, ...inputProps}, fieldState, formState}) => (
              <FormInput
                placeholder="Weight"
                type="number"
                step=".01"
                isInvalid={fieldState.invalid}
                icon={<IconIonScaleOutline className="h-[20px] w-[20px]" />}
                errorMessage={fieldState.error?.message}
                {...inputProps}
              />
            )}
          />
          <ControllerAddLog
            control={controlAddLog}
            name="calories"
            render={({field: {ref, ...inputProps}, fieldState, formState}) => (
              <FormInput
                placeholder="Calories"
                type="number"
                isInvalid={fieldState.invalid}
                icon={<IconIconParkOutlineFire className="h-[20px] w-[20px]" />}
                errorMessage={fieldState.error?.message}
                {...inputProps}
              />
            )}
          />
          <ControllerAddLog
            control={controlAddLog}
            name="date"
            render={({field, fieldState, formState}) => (
              <FormDatepicker
                onChange={field.onChange}
                inline
                value={field.value}
                isInvalid={fieldState.invalid}
              />
            )}
          />
          <FormButton isLoading={isLoadingAddLog} text="Save" />
        </form>
      </Modal>
      <Modal
        isOpen={isModalOpenEditLog}
        onClose={() => {
          setIsModalOpenEditLog(false);
          resetEditLog();
        }}
        title="Edit Log"
      >
        <form
          onSubmit={handleSubmitEditLog}
          className="w-full flex gap-[10px] flex-col"
          autoComplete="off"
        >
          <ControllerEditLog
            control={controlEditLog}
            name="weight"
            render={({field: {ref, ...inputProps}, fieldState, formState}) => (
              <FormInput
                placeholder="Weight"
                type="number"
                step=".01"
                isInvalid={fieldState.invalid}
                icon={<IconIonScaleOutline className="h-[20px] w-[20px]" />}
                errorMessage={fieldState.error?.message}
                {...inputProps}
              />
            )}
          />
          <ControllerEditLog
            control={controlEditLog}
            name="calories"
            render={({field: {ref, ...inputProps}, fieldState, formState}) => (
              <FormInput
                placeholder="Calories"
                type="number"
                isInvalid={fieldState.invalid}
                icon={<IconIconParkOutlineFire className="h-[20px] w-[20px]" />}
                errorMessage={fieldState.error?.message}
                {...inputProps}
              />
            )}
          />
          <ControllerEditLog
            control={controlEditLog}
            name="date"
            render={({field, fieldState, formState}) => (
              <FormDatepicker
                onChange={field.onChange}
                inline
                value={field.value}
                isInvalid={fieldState.invalid}
              />
            )}
          />
          <FormButton isLoading={isLoadingEditLog} text="Save" />
        </form>
      </Modal>

      <div className="flex flex-row justify-end">
        <AddLogButton onClick={() => setIsModalOpenAddLog(true)} />
      </div>
      {data && (
        <Table
          onRowClick={(e) => {
            setLogToEdit({
              id: e.original.id,
              weight: e.original.weight,
              calories: e.original.calories,
              date: e.original.date,
            });
            setIsModalOpenEditLog(true);
          }}
          columns={columns}
          data={data}
        />
      )}
    </Page>
  );
};
