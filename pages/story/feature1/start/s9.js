import React from "react";
import Link from "next/link";

function S9() {
  return (
    <div>
      <center>
        <div>
          ตอนนี้คุณรู้สึกอย่างไร <br />
          <br />
        </div>
        <Link href={`/story/feature1/start/s10`}>
          <div>
            <button className=" bg-black px-20 py-3 w-3/5 rounded-md text-white">
              มีความสุข
            </button>
            <br />
            <br />
            <button className=" bg-black px-20 py-3 w-3/5 rounded-md text-white">
              เศร้า
            </button>
            <br />
            <br />
            <button className=" bg-black px-20 py-3 w-3/5 rounded-md text-white">
              เหงา
            </button>
            <br />
            <br />
            <button className=" bg-black px-20 py-3 w-3/5 rounded-md text-white">
              เหนื่อย
            </button>
            <br />
            <br />
            <button className=" bg-black px-20 py-3 w-3/5 rounded-md text-white">
              เฉยๆ
            </button>
          </div>
        </Link>
      </center>
    </div>
  );
}

export default S9;
