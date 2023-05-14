"use client";
import { useMemo, useState } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { Heading } from "./Heading";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Charts from "./Charts";

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
  academy_id: string;
  name: string;
  date: Date;
  event_info: string;
  client_info: string;
  max_participants: number;
  aplication_deadline: Date;
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
      academy_id: "",
      name: "",
      date: new Date(),
      event_info: "",
      client_info: "",
      max_participants: 0,
      aplication_deadline: new Date(
        new Date().getTime() + 24 * 60 * 60 * 1000 * 2
      ),
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data.date);
    try {
      setSubmitting(true);
      setServerError("");
      const response = await axios.post("/api/registration", data);
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
            <input
              placeholder="Type of event"
              type="text"
              id="event_type_id"
              {...register("event_type_id", { required: true, maxLength: 25 })}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            />
            {errors.event_type_id && (
              <span className="text-red-500">Event type is required</span>
            )}
          </div>
        </div>
        <div className="mb-5">
          <div className="flex items-center gap-5">
            <div className="items-center w-[49.5%] flex bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full   font-medium text-gray-900 whitespace-nowrap">
              <p className="text-gray-400 font-normal pl-2">Submittion</p>
              <div className="px-3 py-1 relative">
                from
                <Controller
                  name="date"
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
              <div className="px-6 py-1 relative">
                to
                <Controller
                  name="aplication_deadline"
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
            {/* <div className="items-center w-[49.5%] flex bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full   font-medium text-gray-900 whitespace-nowrap">
              <p className="text-gray-400 font-normal pl-2">Event duration</p>
              <div className="px-3 py-1 relative">
                from
                <Controller
                  name="date"
                  control={control}
                  rules={{ required: true ,maxLength:25 }}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      className="border border-gray-300 bg-white p-2 rounded cursor-pointer"
                      selected={new Date(value)}
                      onChange={onChange}
                    />
                  )}
                />{" "}
              </div>
              <div className="px-6 py-1 relative">
                to
                <Controller
                  name="aplication_deadline"
                  control={control}
                  rules={{ required: true ,maxLength:25 }}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      className="border border-gray-300 bg-white p-2 rounded cursor-pointer"
                      selected={new Date(value)}
                      onChange={onChange}
                    />
                  )}
                />{" "}
              </div>
            </div> */}
          </div>
        </div>
        <input
          placeholder="Academies part of the event"
          type="text"
          id="academy_id"
          {...register("academy_id", { required: true, maxLength: 25 })}
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
        />
        {errors.academy_id && (
          <span className="text-red-500">Field is required is required</span>
        )}
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
    bodyContent = (
      <div className="mt-3 shadow-md sm:rounded-lg">
        <div>
          <h2 className="mb-5 text-2xl mt-5">Day 1</h2>
          <div className="bg-white border-b flex items-center">
            <div className="px-6 w-1/2 py-4 font-medium text-gray-900 whitespace-nowrap">
              Registration
            </div>
            <div className="px-6 py-4">
              from
              <Controller
                name="date"
                control={control}
                rules={{ required: true, maxLength: 25 }}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    className="border border-gray-500 p-2 rounded cursor-pointer"
                    selected={new Date(value)}
                    onChange={onChange}
                  />
                )}
              />
            </div>
            <div className="px-6 py-4">
              to{" "}
              <Controller
                name="aplication_deadline"
                rules={{ required: true, maxLength: 25 }}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    className="border border-gray-500 p-2 rounded cursor-pointer"
                    selected={new Date(value)}
                    onChange={onChange}
                  />
                )}
              />
            </div>
          </div>
          <div className="bg-white border-b flex items-center">
            <div className="px-6 py-4 w-1/2 font-medium text-gray-900 whitespace-nowrap">
              Event opening
            </div>
            <div className="px-6 py-4">
              from
              <Controller
                name="date"
                control={control}
                rules={{ required: true, maxLength: 25 }}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    className="border border-gray-500 p-2 rounded cursor-pointer"
                    selected={new Date(value)}
                    onChange={onChange}
                  />
                )}
              />
            </div>
            <div className="px-6 py-4">
              to{" "}
              <Controller
                name="aplication_deadline"
                rules={{ required: true, maxLength: 25 }}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    className="border border-gray-500 p-2 rounded cursor-pointer"
                    selected={new Date(value)}
                    onChange={onChange}
                  />
                )}
              />
            </div>
          </div>
          <div className="bg-white border-b flex items-center">
            <div className="px-6 py-4 w-1/2 font-medium text-gray-900 whitespace-nowrap">
              Find your spot
            </div>
            <div className="px-6 py-4">
              from
              <Controller
                name="date"
                control={control}
                rules={{ required: true, maxLength: 25 }}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    className="border border-gray-500 p-2 rounded cursor-pointer"
                    selected={new Date(value)}
                    onChange={onChange}
                  />
                )}
              />
            </div>
            <div className="px-6 py-4">
              to{" "}
              <Controller
                name="aplication_deadline"
                rules={{ required: true, maxLength: 25 }}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    className="border border-gray-500 p-2 rounded cursor-pointer"
                    selected={new Date(value)}
                    onChange={onChange}
                  />
                )}
              />
            </div>
          </div>
          <div className="bg-white border-b flex items-center">
            <div className="px-6 py-4 w-1/2 font-medium text-gray-900 whitespace-nowrap">
              First round of membership sessions
            </div>
            <div className="px-6 py-4">
              from
              <Controller
                name="date"
                control={control}
                rules={{ required: true, maxLength: 25 }}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    className="border border-gray-500 p-2 rounded cursor-pointer"
                    selected={new Date(value)}
                    onChange={onChange}
                  />
                )}
              />
            </div>
            <div className="px-6 py-4">
              to{" "}
              <Controller
                name="aplication_deadline"
                rules={{ required: true, maxLength: 25 }}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    className="border border-gray-500 p-2 rounded cursor-pointer"
                    selected={new Date(value)}
                    onChange={onChange}
                  />
                )}
              />
            </div>
          </div>
          <div className="bg-white border-b flex items-center">
            <div className="px-6 py-4 w-1/2 font-medium text-gray-900 whitespace-nowrap">
              Second round of membership sessions
            </div>
            <div className="px-6 py-4">
              from
              <Controller
                name="date"
                control={control}
                rules={{ required: true, maxLength: 25 }}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    className="border border-gray-500 p-2 rounded cursor-pointer"
                    selected={new Date(value)}
                    onChange={onChange}
                  />
                )}
              />
            </div>
            <div className="px-6 py-4">
              to{" "}
              <Controller
                name="aplication_deadline"
                rules={{ required: true, maxLength: 25 }}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    className="border border-gray-500 p-2 rounded cursor-pointer"
                    selected={new Date(value)}
                    onChange={onChange}
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-5 text-2xl mt-5">Day 2</h2>
          <div className="bg-white border-b flex items-center">
            <div className="px-6 py-4 w-1/2 font-medium text-gray-900 whitespace-nowrap">
              Registration
            </div>
            <div className="px-6 py-4">
              from
              <Controller
                name="date"
                control={control}
                rules={{ required: true, maxLength: 25 }}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    className="border border-gray-500 p-2 rounded cursor-pointer"
                    selected={new Date(value)}
                    onChange={onChange}
                  />
                )}
              />
            </div>
            <div className="px-6 py-4">
              to{" "}
              <Controller
                name="aplication_deadline"
                rules={{ required: true, maxLength: 25 }}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    className="border border-gray-500 p-2 rounded cursor-pointer"
                    selected={new Date(value)}
                    onChange={onChange}
                  />
                )}
              />
            </div>
          </div>
          <div className="bg-white border-b flex items-center">
            <div className="px-6 py-4 w-1/2 font-medium text-gray-900 whitespace-nowrap">
              First round of membership sessions
            </div>
            <div className="px-6 py-4">
              from
              <Controller
                name="date"
                control={control}
                rules={{ required: true, maxLength: 25 }}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    className="border border-gray-500 p-2 rounded cursor-pointer"
                    selected={new Date(value)}
                    onChange={onChange}
                  />
                )}
              />
            </div>
            <div className="px-6 py-4">
              to{" "}
              <Controller
                name="aplication_deadline"
                rules={{ required: true, maxLength: 25 }}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    className="border border-gray-500 p-2 rounded cursor-pointer"
                    selected={new Date(value)}
                    onChange={onChange}
                  />
                )}
              />
            </div>
          </div>
          <div className="bg-white border-b flex items-center">
            <div className="px-6 py-4 w-1/2 font-medium text-gray-900 whitespace-nowrap">
              Second round of membership sessions
            </div>
            <div className="px-6 py-4">
              from
              <Controller
                name="date"
                control={control}
                rules={{ required: true, maxLength: 25 }}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    className="border border-gray-500 p-2 rounded cursor-pointer"
                    selected={new Date(value)}
                    onChange={onChange}
                  />
                )}
              />
            </div>
            <div className="px-6 py-4">
              to{" "}
              <Controller
                name="aplication_deadline"
                rules={{ required: true, maxLength: 25 }}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    className="border border-gray-500 p-2 rounded cursor-pointer"
                    selected={new Date(value)}
                    onChange={onChange}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>
      // <div className="flex flex-col gap-8">
      //   <DatePicker
      //     selected={startDate}
      //     onChange={(date) => setStartDate(date)}
      //   />
      //   <div className="mt-5">
      //     <div className="mb-5">
      //       <button
      //         type="button"
      //         className={agenda === "Day1" ? "underline mr-5" : "mr-5"}
      //         onClick={() => setAgenda("Day1")}
      //       >
      //         Day 1
      //       </button>
      //       <button
      //         className={agenda === "Day2" ? "underline" : undefined}
      //         onClick={() => setAgenda("Day2")}
      //         type="button"
      //       >
      //         Day 2
      //       </button>
      //     </div>
      //     {agenda === "Day1" ? (
      //       <input
      //         placeholder="Agenda Day 1"
      //         type="text"
      //         id="agenda_day_one"
      //         {...register("agenda_day_one", { required: true ,maxLength:25 })}
      //         className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 h-[350px] mb-5"
      //       />
      //     ) : (
      //       <input
      //         placeholder="Agenda Day 2"
      //         type="text"
      //         id="agenda_day_two"
      //         {...register("agenda_day_two", { required: true ,maxLength:25 })}
      //         className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 h-[350px] mb-5"
      //       />
      //     )}
      //   </div>
      // </div>
    );
  }
  if (step === STEPS.TEAMS) {
    bodyContent = (
      // <div className="shadow-md sm:rounded-lg">
      //   <div className="bg-white border-b flex items-center">
      //     <p className="px-6 py-4 w-1/2 font-medium text-gray-900 whitespace-nowrap">
      //       Submittion
      //     </p>
      //     <p className="px-6 py-4">
      //       from{" "}
      //       <Controller
      //         name="date"
      //         control={control}
      //         rules={{ required: true ,maxLength:25 }}
      //         render={({ field: { onChange, value } }) => (
      //           <DatePicker
      //             className="border border-gray-500 p-2 rounded cursor-pointer"
      //             selected={new Date(value)}
      //             onChange={onChange}
      //           />
      //         )}
      //       />
      //     </p>
      //     <p className="px-6 py-4">
      //       to{" "}
      //       <Controller
      //         name="aplication_deadline"
      //         rules={{ required: true ,maxLength:25 }}
      //         control={control}
      //         render={({ field: { onChange, value } }) => (
      //           <DatePicker
      //             className="border border-gray-500 p-2 rounded cursor-pointer"
      //             selected={new Date(value)}
      //             onChange={onChange}
      //           />
      //         )}
      //       />
      //     </p>
      //   </div>
      // </div>
      <p></p>
    );
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
