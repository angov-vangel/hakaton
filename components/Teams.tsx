"use client";
import Image from "next/image";

function Teams() {
  return (
    <div>
      <div className="flex flex-wrap ">
        <div className="w-1/2">
          <Image
            src="/img/team_members.png"
            alt={"chart"}
            width={400}
            height={300}
          />
        </div>
        <div className="w-1/2">
          <Image
            src="/img/team_members.png"
            alt={"chart"}
            width={400}
            height={300}
          />
        </div>
        <div>
          <h2 className="text-lg font-medium mb-4">Other Statistics</h2>
          <Image
            src="/img/team_members.png"
            alt={"chart"}
            width={400}
            height={300}
          />
        </div>
        <div className="w-1/2">
          <Image
            src="/img/team_members.png"
            alt={"chart"}
            width={400}
            height={300}
          />
        </div>
        <div className="w-1/2">
          <Image
            src="/img/team_members.png"
            alt={"chart"}
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
export default Teams;
