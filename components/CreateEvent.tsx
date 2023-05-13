"use client";
import { useMemo, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Heading } from "./Heading";
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
  date: string;
  event_info: string;
  client_info: string;
  agenda_day_one: string;
  agenda_day_two: string;
  max_participants: number;
  aplication_deadline: string;
}

const CreateEvent = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const stepsArr = ["Description", "Agenda", "Teams", "Statistics", "Results"];
  const [step, setStep] = useState(0);
  const [agenda, setAgenda] = useState("Day1");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      location: "",
      event_type_id: "",
      academy_id: "",
      name: "",
      date: "",
      event_info: "",
      client_info: "",
      max_participants: 0,
      agenda_day_one: "",
      agenda_day_two: "",
      aplication_deadline: "",
    },
  });

  // const category = watch("category");

  const onSubmit: SubmitHandler<FormValues> = async (data) => {};
  //   if (step !== STEPS.PRICE) {
  //     return onNext();
  //   }
  //   setIsLoading(true);

  //   axios
  //     .post("/api/products", data)
  //     .then(() => {
  //       router.refresh();
  //       reset();
  //       setStep(STEPS.CATEGORY);
  //     })
  //     .catch(() => {})
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <div className="w-3/4 mt-5">
        <div className="flex gap-4 mb-5">
          <div>
            <input
              placeholder="Location"
              type="text"
              id="location"
              {...register("location", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            />
            {errors.location && (
              <span className="text-red-500">Location is required</span>
            )}
          </div>
          <div>
            <input
              placeholder="Type of event"
              type="text"
              id="event_type_id"
              {...register("event_type_id", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            />
            {errors.event_type_id && (
              <span className="text-red-500">Event type is required</span>
            )}
          </div>
        </div>
        <input
          placeholder="Academies part of the event"
          type="text"
          id="academy_id"
          {...register("academy_id", { required: true })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
        />
        {errors.academy_id && (
          <span className="text-red-500">Field is required is required</span>
        )}
        <input
          placeholder="Event info"
          type="text"
          id="event_info"
          {...register("event_info", { required: true })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm mt-5 rounded-lg h-[250px]  block w-full p-2.5"
        />
        {errors.event_info && (
          <span className="text-red-500">Field is required is required</span>
        )}
        <input
          placeholder="Client info"
          type="text"
          id="client_info"
          {...register("client_info", { required: true })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm mt-5 rounded-lg h-[250px]  block w-full p-2.5"
        />
        {errors.client_info && (
          <span className="text-red-500">Field is required is required</span>
        )}
      </div>
    </div>
  );
  if (step === STEPS.AGENDA) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <div className="mt-5">
          <div className="mb-5">
            <button
              type="button"
              className={agenda === "Day1" ? "underline mr-5" : "mr-5"}
              onClick={() => setAgenda("Day1")}
            >
              Day 1
            </button>
            <button
              className={agenda === "Day2" ? "underline" : undefined}
              onClick={() => setAgenda("Day2")}
              type="button"
            >
              Day 2
            </button>
          </div>
          {agenda === "Day1" ? (
            <input
              placeholder="Agenda Day 1"
              type="text"
              id="agenda_day_one"
              {...register("agenda_day_one", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 h-[350px] mb-5"
            />
          ) : (
            <input
              placeholder="Agenda Day 2"
              type="text"
              id="agenda_day_two"
              {...register("agenda_day_two", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 h-[350px] mb-5"
            />
          )}
        </div>
      </div>
    );
  }
  if (step === STEPS.TEAMS) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="Teams" />
      </div>
    );
  }
  if (step === STEPS.STATISTICS) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="Statictics" />
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 0 && (
          <div className="w-1/4 mb-5">
            <input
              placeholder="Name of the event"
              type="text"
              id="name"
              {...register("name", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            />
            {errors.name && (
              <span className="text-red-500">
                Name of the event is required
              </span>
            )}
          </div>
        )}
        <nav className=" w-3/4 flex justify-between">
          {stepsArr.map((st, i) => (
            <button
              type="button"
              onClick={() => setStep(i)}
              key={st}
              className={step === i ? "underline text-xl" : "text-xl"}
            >
              {st}
            </button>
          ))}
          <button
            type="submit"
            className="ml-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Create Event
          </button>
          <button
            className="ml-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            type="button"
          >
            Share
          </button>
        </nav>
        <div className="w-3/4">{bodyContent}</div>
      </form>
      <button
        type="button"
        className="ml-auto block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        export to Excel sheet
      </button>
    </div>
  );
};

export default CreateEvent;
