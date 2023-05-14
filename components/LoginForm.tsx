"use client";

import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface LoginFormData {
  email: string;
  password: string;
}

// interface LoginResponseData {
//   token: string;
// }
export const LoginForm = () => {
  const router = useRouter();
  const [error, setServerError] = useState("");
  const [submiting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    setSubmitting(true);
    router.push("/admin-home");
    try {
      const response = await axios.post<LoginFormData>(
        "https://mimica-kuzmanovska.sharedwithexpose.com/",
        data
      );
     
      reset();
    } catch (error: AxiosError | any) {
      setServerError("Invalid email or password");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
        <div className="w-full bg-white rounded-lg shadow sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
            <h1 className="text-xl  text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl backdrop-blur-xl">
              Admin Log in
            </h1>
            <form
              className="space-y-4 md:space-y-6 "
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
                  {...register("email", { required: true })}
                  type="text"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-greenish text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                  className="bg-gray-50 border border-greenish text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
                {errors.password && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-1/2  text-white  bg-greenish focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
