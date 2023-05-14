"use client";

import { useState } from "react";

import Image from "next/image";

function Charts() {
  const [click, setClick] = useState(false);

  return (
    <div>
    
      <div className="flex flex-wrap ">
        <div className="w-1/2">
          <Image src="/img/chart2.png" alt={"chart"} width={400} height={300} />
        </div>
        <div className="w-1/2">
          <Image src="/img/chart3.png" alt={"chart"} width={400} height={300} />
        </div>
        <div>
          <Image src="/img/chart!.png" alt={"chart"} width={800} height={300} />
        </div>
        <div className="w-1/2">
          <Image src="/img/chart4.png" alt={"chart"} width={400} height={300} />
        </div>
        <div className="w-1/2">
          <Image src="/img/chart5.png" alt={"chart"} width={400} height={300} />
        </div>
      </div>
      <button onClick={() => setClick(true)}>Generate Users</button>
    </div>
  );
}

export default Charts;
