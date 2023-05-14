import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
export const Agenda = () => {
  const [selectedHour, setSelectedHour] = useState("");
  const [selectedHour2, setSelectedHour2] = useState("");
  const [selectedHour3, setSelectedHour3] = useState("");
  const [selectedHour4, setSelectedHour4] = useState("");
  const [selectedHour5, setSelectedHour5] = useState("");
  const [selectedHour6, setSelectedHour6] = useState("");
  const hours = [];
  for (let i = 7; i <= 20; i++) {
    hours.push(i + ":00");
  }

  // }
  return (
    <>
      <div>
        {" "}
        <div className="mt-3 shadow-md sm:rounded-lg">
          <div>
            <h2 className="mb-5 text-2xl mt-5">Day 1</h2>
            <div className="bg-white border-b flex items-center">
              <div className="px-6 w-1/2 py-4 font-medium text-gray-900 whitespace-nowrap">
                Event duration
              </div>
              <select
                className="border-2 border-gray-900 rounded mr-5"
                id="hour-select"
                value={selectedHour}
                onChange={(e) => setSelectedHour(e.target.value)}
              >
                <option value="">from</option>
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
              <select
                className="border-2 border-gray-900 rounded"
                id="hour-select"
                value={selectedHour2}
                onChange={(e) => setSelectedHour2(e.target.value)}
              >
                <option value="">to</option>
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
            </div>
            <div className="bg-white border-b flex items-center">
              <div className="px-6 w-1/2 py-4 font-medium text-gray-900 whitespace-nowrap">
                Event opening
              </div>
              <select
                className="border-2 border-gray-900 rounded mr-5"
                id="hour-select"
                value={selectedHour5}
                onChange={(e) => setSelectedHour5(e.target.value)}
              >
                <option value="">from</option>
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
              <select
                className="border-2 border-gray-900 rounded"
                id="hour-select"
                value={selectedHour2}
                onChange={(e) => setSelectedHour2(e.target.value)}
              >
                <option value="">to</option>
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
            </div>
            <div className="bg-white border-b flex items-center">
              <div className="px-6 w-1/2 py-4 font-medium text-gray-900 whitespace-nowrap">
                Find you spot
              </div>
              <select
                className="border-2 border-gray-900 rounded mr-5"
                id="hour-select"
                value={selectedHour3}
                onChange={(e) => setSelectedHour3(e.target.value)}
              >
                <option value="">from</option>
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
              <select
                className="border-2 border-gray-900 rounded"
                id="hour-select"
                value={selectedHour4}
                onChange={(e) => setSelectedHour4(e.target.value)}
              >
                <option value="">to</option>
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
            </div>
            <div className="bg-white border-b flex items-center">
              <div className="px-6 w-1/2 py-4 font-medium text-gray-900 whitespace-nowrap">
                Firs mentorship sessions
              </div>
              <select
                className="border-2 border-gray-900 rounded mr-5"
                id="hour-select"
                value={selectedHour3}
                onChange={(e) => setSelectedHour3(e.target.value)}
              >
                <option value="">from</option>
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
              <select
                className="border-2 border-gray-900 rounded"
                id="hour-select"
                value={selectedHour4}
                onChange={(e) => setSelectedHour4(e.target.value)}
              >
                <option value="">to</option>
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
            </div>
            <div className="bg-white border-b flex items-center">
              <div className="px-6 w-1/2 py-4 font-medium text-gray-900 whitespace-nowrap">
                Second mentorship sessions
              </div>
              <select
                className="border-2 border-gray-900 rounded mr-5"
                id="hour-select"
                value={selectedHour3}
                onChange={(e) => setSelectedHour3(e.target.value)}
              >
                <option value="">from</option>
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
              <select
                className="border-2 border-gray-900 rounded"
                id="hour-select"
                value={selectedHour4}
                onChange={(e) => setSelectedHour4(e.target.value)}
              >
                <option value="">to</option>
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <h2 className="mb-5 text-2xl mt-5">Day 2</h2>
            <div className="bg-white border-b flex items-center">
              <div className="px-6 w-1/2 py-4 font-medium text-gray-900 whitespace-nowrap">
                First round mentorship sessions
              </div>
              <select
                className="border-2 border-gray-900 rounded mr-5"
                id="hour-select"
                value={selectedHour3}
                onChange={(e) => setSelectedHour3(e.target.value)}
              >
                <option value="">from</option>
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
              <select
                className="border-2 border-gray-900 rounded"
                id="hour-select"
                value={selectedHour4}
                onChange={(e) => setSelectedHour4(e.target.value)}
              >
                <option value="">to</option>
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
            </div>
            <div className="bg-white border-b flex items-center">
              <div className="px-6 w-1/2 py-4 font-medium text-gray-900 whitespace-nowrap">
                Second round mentorship sessions
              </div>
              <select
                className="border-2 border-gray-900 rounded mr-5"
                id="hour-select"
                value={selectedHour5}
                onChange={(e) => setSelectedHour5(e.target.value)}
              >
                <option value="">from</option>
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
              <select
                className="border-2 border-gray-900 rounded"
                id="hour-select"
                value={selectedHour5}
                onChange={(e) => setSelectedHour5(e.target.value)}
              >
                <option value="">to</option>
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
            </div>
            <div className="bg-white border-b flex items-center">
              <div className="px-6 w-1/2 py-4 font-medium text-gray-900 whitespace-nowrap">
                Presentations
              </div>
              <select
                className="border-2 border-gray-900 rounded mr-5"
                id="hour-select"
                value={selectedHour3}
                onChange={(e) => setSelectedHour3(e.target.value)}
              >
                <option value="">from</option>
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
              <select
                className="border-2 border-gray-900 rounded"
                id="hour-select"
                value={selectedHour4}
                onChange={(e) => setSelectedHour4(e.target.value)}
              >
                <option value="">to</option>
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
