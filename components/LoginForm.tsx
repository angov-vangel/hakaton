"use client";

import axios, { AxiosError } from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FieldValues {
  username: string;
  password: string;
}
export const LoginForm = () => {
  const [error, setServerError] = useState("");
  const [submiting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setSubmitting(true);
    try {
      const response = await axios.post(
        "https://mimica-kuzmanovska.sharedwithexpose.com/",
        {
          data,
        }
      );
      console.log(response.data);
    } catch (error: AxiosError | any) {
      setServerError(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  //   useEffect(() => {
  //     const fetchAcademies = async () => {
  //       try {
  //         const response = await axios.get<Academy[]>(
  //           "https://a769-92-55-111-13.ngrok-free.app/api/academies"
  //         );
  //         setAcademies(response.data);
  //         console.log(response.data);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };

  //     fetchAcademies();
  //   }, []);

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your username
                </label>

                <input
                  {...register("username", { required: true })}
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
                {errors.password && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
              <button
                type="submit"
                className="w-full  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};