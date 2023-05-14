"use-client";

import { AvatarLogo } from "@/components/AvatarLogo";
import CreateEvent from "@/components/CreateEvent";
import { Footer } from "@/components/Footer";
import bgImage from "./../../img/bg-image.png";
import React from "react";
export default function AdminRoute() {
  return (
    <>
      <AvatarLogo />
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
    </>
  );
}
