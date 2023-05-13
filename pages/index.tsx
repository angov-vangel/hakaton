import CreateEvent from "@/components/CreateEvent";
import UserFormRegister from "@/components/UserFormRegister";
import React from "react";
export default function Home() {
  return (
    <div className="">
      {/* <UserFormRegister /> */}
      <div className="flex w-full">
        <div className="w-1/4"></div>
        <div className="w-3/4">
          <CreateEvent />
        </div>
      </div>
    </div>
  );
}
