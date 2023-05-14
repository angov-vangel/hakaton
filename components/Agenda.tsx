import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
export const Agenda = () => {
  const [selectedHour, setSelectedHour] = useState('');

  const hours = [];
  for (let i = 7; i <= 20; i++) {
    hours.push(i + ':00');
  }

//   return (
//     <div>
//       <label htmlFor="hour-select">from</label>
//       <select id="hour-select" value={selectedHour} onChange={(e) => setSelectedHour(e.target.value)}>
//         <option value="">Select an Hour</option>
//         {hours.map((hour) => (
//           <option key={hour} value={hour}>
//             {hour}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }
  return (
    <>
      <form>
        {" "}
        <div className="mt-3 shadow-md sm:rounded-lg">
          <div>
            <h2 className="mb-5 text-2xl mt-5">Day 1</h2>
            <div className="bg-white border-b flex items-center">
              <div className="px-6 w-1/2 py-4 font-medium text-gray-900 whitespace-nowrap">
                Registration
              </div>
              <div className="px-6 py-4">
                from
               
              </div>
              <div className="px-6 py-4">
                to{" "}
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
