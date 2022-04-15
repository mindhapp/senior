import React from "react";
import Link from "next/link";

function S3() {
  return (
    <div>
      <center>
        <Link href={`/story/feature1/start/s4`}>
          <div className=" cursor-pointer pt-24">
            เป็นวันสบายๆ ที่คุณไม่ต้องทำอะไร
            <img src="/assetsStory/2.png" alt="test" width={200} />
          </div>
          
        </Link>
      </center>
    </div>
  );
}

export default S3;
