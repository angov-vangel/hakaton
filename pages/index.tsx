import Charts from "@/components/Charts";
import CreateEvent from "@/components/CreateEvent";
import { Footer } from "@/components/Footer";
import { LoginForm } from "@/components/LoginForm";
import { LogoPlaceholder } from "@/components/LogoPlaceholder";
import UserFormRegister from "@/components/UserFormRegister";
import React from "react";
import HomePage from "../components/Home";
import { Chart } from "react-chartjs-2";
import { AvatarLogo } from "@/components/AvatarLogo";
export default function Home() {
  return (
    <div className="h-[100vh]">
      <HomePage />
    </div>
  );
}
