import CreateEvent from "@/components/CreateEvent";
import { Footer } from "@/components/Footer";
import UserFormRegister from "@/components/UserFormRegister";
import React from "react";
export default function Home() {
  return (
    <div className="h-[100vh]">
      {/* <UserFormRegister /> */}
      <div className="flex w-full">
        <div className="w-1/4"></div>
        <div className="w-3/4">
          <CreateEvent />
        </div>
      </div>
      <Footer />
    </div>
  );
}
