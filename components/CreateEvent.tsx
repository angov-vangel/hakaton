"use client";
import { useState } from "react";
import Select from "react-select";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { Heading } from "./Heading";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Charts from "./Charts";
import { Agenda } from "./Agenda";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

enum STEPS {
  DESCRIPTION = 0,
  AGENDA = 1,
  TEAMS = 2,
  STATISTICS = 3,
  RESULTS = 4,
}

interface FormValues {
  location: string;
  event_type_id: string;
  academy_id: number | number[] | undefined;
  name: string;
  start_date: Date;
  event_info: string;
  client_info: string;
  max_participants: number;
  end_date: Date;
  application_deadline: Date;
}

const CreateEvent = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const router = useRouter();
  const [error, setServerError] = useState<AxiosError | any>("");
  const stepsArr = ["Description", "Agenda", "Teams", "Statistics", "Results"];
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [agenda, setAgenda] = useState("Day1");
  const [activationBtn, setActivationBtn] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (value: any) => {
    setSelectedOptions(value);
  };
  const options = [
    { value: 1, label: "UX/UI Дизајн" },
    { value: 2, label: "Дигитален Маркетинг" },
    { value: 3, label: "Графички Дизајн" },
    { value: 4, label: "Project & Product Management" },
    { value: 5, label: "Data Science" },
    { value: 6, label: "Човечки Ресурси" },
    { value: 7, label: "Full-Stack програмирање" },
    { value: 8, label: "Front-end програмирање" },
    { value: 9, label: "Software testing" },
    { value: 10, label: "Leadirship & Management" },
  ];
  [
    {
      id: 1,
      event_type_id: 1,
      academy_id: 7,
      name: "Hackaton 1",
      location: "",
      start_date: "2023-05-14",
      info: "This is info for Hackaton 1",
      client_info: "",
      max_participants: 200,
      application_deadline: "2023-05-15",
      created_at: "2023-05-13T15:06:05.000000Z",
      updated_at: "2023-05-13T15:06:05.000000Z",
    },
    {
      id: 2,
      event_type_id: 1,
      academy_id: 5,
      name: "Hackaton 6 edited",
      location: "",
      start_date: "2023-05-14",
      info: "info for hackaton 5",
      client_info: "",
      max_participants: 200,
      application_deadline: "2023-05-14",
      created_at: "2023-05-13T15:07:34.000000Z",
      updated_at: "2023-05-13T16:14:00.000000Z",
    },
  ];
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      location: "",
      event_type_id: "",
      academy_id: undefined,
      name: "",
      start_date: new Date(),
      event_info: "",
      client_info: "",
      max_participants: 200,
      end_date: new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 2),
      application_deadline: new Date(
        new Date().getTime() + 24 * 60 * 60 * 1000 * 2
      ),
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data.start_date);
    console.log(data.academy_id);
    try {
      setSubmitting(true);
      setServerError("");
      const response = await axios.post(
        "https://mimica-kuzmanovska.sharedwithexpose.com/api/events",
        {
          ...data,
          start_date: data.start_date.toISOString().substring(0, 10),
          end_date: data.end_date.toISOString().substring(0, 10),
          application_deadline: data.application_deadline
            .toISOString()
            .substring(0, 10),
        }
      );
      console.log(response.data);
      setActivationBtn(true);
    } catch (error: AxiosError | any) {
      setServerError(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <div className="w-full mt-5">
        <div className="flex gap-4 mb-5 w-full">
          <div className="grow">
            <input
              placeholder="Location"
              type="text"
              id="location"
              {...register("location", { required: true, maxLength: 25 })}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            />
            {errors.location && (
              <span className="text-red-500">Location is required</span>
            )}
          </div>
          <div className="grow">
            <select
              placeholder="Type of event"
              id="event_type_id"
              {...register("event_type_id", { required: true, maxLength: 25 })}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            >
              <option value={1}>Live</option>
              <option value={2}>Online</option>
            </select>
            {errors.event_type_id && (
              <span className="text-red-500">Event type is required</span>
            )}
          </div>
        </div>
        <div className="mb-5">
          <div className="flex items-center gap-5">
            <div className="items-center flex bg-white border border-gray-300 text-sm rounded-lg   font-medium text-gray-900 whitespace-nowrap">
              <p className="text-gray-400 font-normal pl-2">Submittion</p>
              <div className="px-3 py-1 relative">
                from
                <Controller
                  name="start_date"
                  control={control}
                  rules={{ required: true, maxLength: 25 }}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      className="border border-gray-300 bg-white p-2 rounded cursor-pointer w-[80%]"
                      selected={new Date(value)}
                      onChange={onChange}
                    />
                  )}
                />{" "}
              </div>
              <div className="px-6 py-1 relative">
                to
                <Controller
                  name="end_date"
                  control={control}
                  rules={{ required: true, maxLength: 25 }}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      className="border border-gray-300 bg-white p-2 rounded cursor-pointer w-[80%]"
                      selected={new Date(value)}
                      onChange={onChange}
                    />
                  )}
                />{" "}
              </div>
            </div>
            <div className="items-center w-[49.5%] flex bg-white border border-gray-300 text-sm rounded-lg  font-medium text-gray-900 whitespace-nowrap">
              <p className="text-gray-400 font-normal pl-2">Deadline</p>
              <div className="px-3 py-1 relative">
                <Controller
                  name="application_deadline"
                  control={control}
                  rules={{ required: true, maxLength: 25 }}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      className="border border-gray-300 bg-white p-2 rounded cursor-pointer"
                      selected={new Date(value)}
                      onChange={onChange}
                    />
                  )}
                />{" "}
              </div>
            </div>
          </div>
        </div>
        <Controller
          name="academy_id"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              isMulti
              defaultInputValue={undefined}
              options={options}
              onChange={(selected) => {
                onChange(
                  selected ? selected.map((option) => option.value) : []
                );
                handleChange(selected);
              }}
              value={options.filter(
                (option) => Array.isArray(value) && value.includes(option.value)
              )}
            />
          )}
        />

        <input
          placeholder="Event info"
          type="text"
          id="event_info"
          {...register("event_info", { required: true, maxLength: 25 })}
          className="bg-white border border-gray-300 text-gray-900 text-sm mt-5 rounded-lg h-[250px]  block w-full p-2.5"
        />
        {errors.event_info && (
          <span className="text-red-500">Field is required is required</span>
        )}
        <input
          placeholder="Client info"
          type="text"
          id="client_info"
          {...register("client_info", { required: true, maxLength: 25 })}
          className="bg-white border border-gray-300 text-gray-900 text-sm mt-5 rounded-lg h-[250px]  block w-full p-2.5"
        />
        {errors.client_info && (
          <span className="text-red-500">Field is required is required</span>
        )}
      </div>
    </div>
  );
  if (step === STEPS.AGENDA) {
    bodyContent = <Agenda />;
  }
  if (step === STEPS.STATISTICS) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="Statictics" />
        <Charts />
      </div>
    );
  }
  if (step === STEPS.RESULTS) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="Results" />
      </div>
    );
  }
  return (
    <div className="w-full">
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        {step === 0 && (
          <div className="w-1/4 mb-5 relative">
            <input
              placeholder="Name of the event"
              type="text"
              id="name"
              {...register("name", { required: true, maxLength: 25 })}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            />
            {errors.name && (
              <span className="text-red-500">
                Name of the event is required
              </span>
            )}
          </div>
        )}
        <nav className=" flex justify-between">
          {stepsArr.map((st, i) => (
            <button
              type="button"
              onClick={() => setStep(i)}
              key={st}
              className={
                i === 0
                  ? "mr-20 text-xl"
                  : step === i && i === 0
                  ? "underline mr-20 text-xl"
                  : step === i
                  ? "underline mr-4 text-xl"
                  : "mr-4 text-xl"
              }
            >
              {st}
            </button>
          ))}
          <button
            type="submit"
            className="ml-5 bg-greenish hover:bg-green-500 font-semibold hover:text-white py-2 px-4 border border-black-500 hover:border-transparent rounded"
          >
            Create
          </button>
          <button
            className="ml-5 bg-gray-100 hover:bg-gray-200  font-semibold py-2 px-4 border border-gray-900 hover:border-transparent rounded"
            type="button"
          >
            Share
          </button>
        </nav>
        <div className="w-full">{bodyContent}</div>
      </form>
      <button
        disabled={activationBtn}
        type="button"
        className="ml-auto mt-8 block bg-orange-600 hover:bg-blue-700 font-bold py-2 px-8 rounded"
      >
        export to Excel sheet
      </button>
    </div>
  );
};

export default CreateEvent;
