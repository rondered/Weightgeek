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
import { formatDate } from '@/utils';

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
    reset,
    Controller,
    control,
    isModalOpen,
    setIsModalOpen,
  } = useAddLog();

  const {isLoading: isGetLogsLoading, data} = useGetLogs();

  const columns = React.useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date",
        Cell: (props) => <div className="flex items-center justify-center p-2">{formatDate(props.value)}</div>,
      },
      {
        Header: "Weight",
        accessor: "weight",
        Cell: (props) => <div className="flex items-center justify-center p-2">{props.value}</div>
      },
      {
        Header: "Calories",
        accessor: "calories",
        Cell: (props) => <div className="flex items-center justify-center p-2">{props.value}</div>
      },
    ],
    []
  );

  return (
    <Page>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          reset();
        }}
        title="Add New Log"
      >
        <form
          onSubmit={handleSubmit}
          className="w-full flex gap-[10px] flex-col"
          autoComplete="off"
        >
          <Controller
            control={control}
            name="weight"
            render={({field: { ref,...inputProps }, fieldState, formState}) => (
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
          <Controller
            control={control}
            name="calories"
            render={({field: {ref, ...inputProps}, fieldState, formState}) => (
              <FormInput
                placeholder="Calories"
                type="number"
                isInvalid={fieldState.invalid}
                icon={<IconIconParkOutlineFire className="h-[20px] w-[20px]" />}
                errorMessage={fieldState.error?.message}
                {...inputProps}/>
            )}
          />
          <Controller
            control={control}
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
          <FormButton isLoading={isLoading} text="Save" />
        </form>
      </Modal>
      <div className="flex flex-row justify-end">
        <AddLogButton onClick={() => setIsModalOpen(true)} />
      </div>
      {data && <Table onRowClick={(e) => console.log(e)} columns={columns} data={data} />}
    </Page>
  );
};
