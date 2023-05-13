import Charts from "@/components/Charts";
import CreateEvent from "@/components/CreateEvent";
import { Footer } from "@/components/Footer";
import { LoginForm } from "@/components/LoginForm";
import { LogoPlaceholder } from "@/components/LogoPlaceholder";
import UserFormRegister from "@/components/UserFormRegister";
import React from "react";
import { Chart } from "react-chartjs-2";
export default function Home() {
  return (
    <div className="h-[100vh]">
      {/* <UserFormRegister /> */}
      <LoginForm />

      <div className="flex w-full">
        <div className="w-1/4">
          <LogoPlaceholder />
        </div>
        <div className="w-3/4">
          <CreateEvent />
        </div>
      </div>
      <Charts />
      <Footer />
    </div>
  );
}
