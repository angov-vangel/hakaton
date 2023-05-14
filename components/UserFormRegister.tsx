import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";

interface FormValues {
  name: string;
  email: string;
  lastName: string;
  phone: string;
  academy: string[];
  group: string;
  numberOfMonths: string;
  participation: string;
  foodPreferences: string[];
  foodAllergies: string[];
  options?: string[];
}

type Academy = {
  id: number;
  name: string;
};

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [academies, setAcademies] = useState<Academy[]>([]);
  const [selectedAcademy, setSelectedAcademy] = useState<Academy | null>(null);
  const [options, setOptions] = useState<Academy[]>([]);

  const onSubmit = async (data: FormValues) => {
    if (Object.keys(errors).length > 0) {
      return;
    }

    try {
      setSubmitting(true);
      setServerError("");
      const response = await axios.post(
        "https://mimica-kuzmanovska.sharedwithexpose.com/api/register",
        {
          ...data,
        }
      );
      console.log(response.data);
      reset();
    } catch (error: AxiosError | any) {
      setServerError(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  // Znachi requestot ne funkcionira ili? pa neznam smeniv polinja nemam pojma
  useEffect(() => {
    const fetchAcademies = async () => {
      try {
        const response = await axios.get<Academy[]>(
          "https://mimica-kuzmanovska.sharedwithexpose.com/api/academies"
        );
        setAcademies(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAcademies();
  }, []);

  const handleAcademyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const academyId = Number(event.target.value);
    const academy = academies.find((a) => a.id === academyId) || null;
    setSelectedAcademy(academy);
    setOptions([]);
  };

  return (
    <div className="py-8 bg-img">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4  md:w-6/12 w-11/12 mx-auto element md:p-20 p-5 rounded-lg shadow-lg"
      >
        <label className="text-white font-semibold" htmlFor="name">
          First Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-full p-2.5 "
        />
        {errors.name && <span className="text-red-500">Name is required</span>}

        <label htmlFor="lastName" className="text-white font-semibold">
          Last Name
        </label>
        <input
          type="lastName"
          id="lastName"
          {...register("lastName", { required: true })}
          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-full p-2.5 "
        />
        {errors.email && (
          <span className="text-red-500">Email is required</span>
        )}

        <label htmlFor="email" className="text-white font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-full p-2.5 "
        />
        {errors.email && (
          <span className="text-red-500">Email is required</span>
        )}
        <label htmlFor="phone" className="text-white font-semibold">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          {...register("phone", { required: true })}
          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-full p-2.5 "
        />
        {errors.phone && (
          <span className="text-red-500">Phone is required</span>
        )}
        <label htmlFor="academy" className="text-white font-semibold">
          Select Academy:
        </label>
        <select
          id="academy"
          {...register("academy", { required: true })}
          onChange={handleAcademyChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  "
        >
          <option value="">Select an academy</option>
          {academies.map((academy) => (
            <option key={academy.id} value={academy.id}>
              {academy.name}
            </option>
          ))}
        </select>
        {errors.academy && (
          <span className="text-red-500">Academy is required</span>
        )}

        <div className="flex flex-col space-y-2">
          <label htmlFor="group" className="text-white font-semibold">
            Group
          </label>
          <input
            type="text"
            id="group"
            {...register("group", { required: true })}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-full p-2.5 "
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="numberOfMonths " className="text-white font-semibold">
            Number of months that you are involved in the academy
          </label>
          <input
            type="text"
            id="numberOfMonths"
            {...register("numberOfMonths", { required: true })}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-full p-2.5 "
          />
        </div>
        <div className="flex flex-col space-y-4  ">
          <label htmlFor="participation" className="text-white font-semibold ">
            I will participate
          </label>
          <div className="flex w-8/12 mx-auto gap-4">
            <div className="relative inline-flex items-center">
              <input
                type="checkbox"
                id="participation"
                {...register("participation")}
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block  p-2.5 w-8 h-8 accent-white "
              />
              <label
                htmlFor="participation_live"
                className="ml-2 text-white font-semibold  "
              >
                Live
              </label>
            </div>
            <div className="relative inline-flex items-center">
              <input
                type="checkbox"
                id="participation"
                {...register("participation")}
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block  p-2.5 w-8 h-8 accent-white "
              />
              <label
                htmlFor="participation_online"
                className="ml-2 text-white font-semibold"
              >
                Online
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="foodPreferences" className="text-white font-semibold">
            Food preferences
          </label>
          <input
            type="text"
            id="foodPreferences"
            {...register("foodAllergies")}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-full p-2.5 "
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="foodAllergies" className="text-white font-semibold">
            Food allergies
          </label>
          <input
            type="text"
            id="foodAllergies"
            {...register("foodAllergies")}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-full p-2.5 "
          />
        </div>

        <div className="relative inline-flex items-center justify-center">
          <input
            type="checkbox"
            id="participation"
            checked
            {...register("participation")}
            className="form-checkbox h-5 w-5 text-gray-600  transition duration-150 ease-in-out accent-white"
          />
          <label
            htmlFor="participation_online"
            className="ml-2 text-white font-semibold "
          >
            I accept the terms and conditions
          </label>
        </div>
        {serverError && <span className="text-red-500">{serverError}</span>}
        <button
          type="submit"
          disabled={submitting}
          className="bg-[#0AE47C]  w-2/6 text-text-gray-700 px-4 py-2 rounded-lg disabled:bg-gray-400 text-white font-semibold mx-auto "
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
