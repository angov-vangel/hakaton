import Charts from "@/components/Charts";
import CreateEvent from "@/components/CreateEvent";
import { Footer } from "@/components/Footer";
import { LoginForm } from "@/components/LoginForm";
import { LogoPlaceholder } from "@/components/LogoPlaceholder";
import UserFormRegister from "@/components/UserFormRegister";
import React from "react";
import bgImage from "./../img/bg-image.png";
import { Chart } from "react-chartjs-2";
import { AvatarLogo } from "@/components/AvatarLogo";
export default function Home() {
  return (
    <div className="h-[100vh]">
      <AvatarLogo />
      {/* <LoginForm /> */}
      <div
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="flex w-full px-10 py-20"
      >
        <div className="mx-auto w-3/4">
          <CreateEvent />
        </div>
      </div>
      <Footer />
    </div>
  );
}
