import React from "react";
import Link from "next/link";

function S7() {
  return (
    <div>
      <center>
        <Link href={`/story/feature1/start/s8`}>
          <div className=" cursor-pointer pt-24">
            นั่นคือสิ่งที่คุณทำเป็นประจำในทุกวัน
          </div>
        </Link>
      </center>
    </div>
  );
}

export default S7;
