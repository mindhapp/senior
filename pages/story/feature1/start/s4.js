import React from "react";
import Link from "next/link";

function S4() {
  return (
    <div>
      <center>
        <Link href={`/story/feature1/start/s5`}>
          <div className=" cursor-pointer pt-24">
            ตอนนี้คุณอยู่ในห้องนอนของคุณ
            <img src="/assetsStory/3.png" alt="test" width={200} />
          </div>
        </Link>
      </center>
    </div>
  );
}

export default S4;
