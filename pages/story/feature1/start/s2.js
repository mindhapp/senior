import React from "react";
import Link from "next/link";

function S2() {
  return (
    <div>
      <center>
        <Link href={`/story/feature1/start/s3`}>
          <div className=" cursor-pointer pt-24">
            วันนี้เป็นวันธรรมดาๆ วันหนึ่ง
            <img src="/assetsStory/1.png" alt="test" width={200} />
          </div>
        </Link>
        
      </center>
    </div>
  );
}

export default S2;
