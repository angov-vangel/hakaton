"use client";
import Image from "next/image";

function Teams() {
  return (
    <div>
      <div className="flex gap-14">
        <div className="w-full lg:w-1/2 ">
          <h2 className="font-bold">Team 1</h2>
          <Image
            src="/img/team_members.png"
            alt={"chart"}
            width={500}
            height={450}
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="font-bold">Team 2</h2>
          <Image
            src="/img/team_members.png"
            alt={"chart"}
            width={500}
            height={450}
          />
        </div>
      </div>
      <div className="flex mt-5 gap-14">
        <div className="w-full lg:w-1/2">
          <h2 className="font-bold">Team 3</h2>
          <Image
            src="/img/team_members.png"
            alt={"chart"}
            width={500}
            height={450}
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="font-bold">Team 4</h2>
          <Image
            src="/img/team_members.png"
            alt={"chart"}
            width={500}
            height={450}
          />
        </div>
      </div>
      <div className="flex mt-5 gap-14">
        <div className="w-full lg:w-1/2">
          <h2 className="font-bold">Team 5</h2>
          <Image
            src="/img/team_members.png"
            alt={"chart"}
            width={500}
            height={450}
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="font-bold">Team 6</h2>
          <Image
            src="/img/team_members.png"
            alt={"chart"}
            width={500}
            height={450}
          />
        </div>
      </div>
    </div>
  );
}
export default Teams;
