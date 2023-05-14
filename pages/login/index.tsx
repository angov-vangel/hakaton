"use-client";

import { AvatarLogo } from "@/components/AvatarLogo";
import CreateEvent from "@/components/CreateEvent";
import { Footer } from "@/components/Footer";
import bgImage from "./../../img/bg-image.png";
import React from "react";
import { LoginForm } from "@/components/LoginForm";
export default function AdminRoute() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <LoginForm />
      </div>
    </>
  );
}
