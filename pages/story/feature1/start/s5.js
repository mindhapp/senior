import React from "react";
import Link from "next/link";

function S5() {
  return (
    <div>
      <center>
        <Link href={`/story/feature1/start/s6`}>
          <div className=" cursor-pointer pt-24">
            เตียงนอนที่คุ้นเคยเหมือนกันกับทุกคน
            <img src="/assetsStory/4.png" alt="test" width={200} />
          </div>
        </Link>
      </center>
    </div>
  );
}

export default S5;
