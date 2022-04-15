import React from "react";
import Link from "next/link";

function S10() {
  return (
    <div>
      <center>
        <Link href={`/story/feature1/start/s11`}>
          <div className=" cursor-pointer pt-24">
            มีเสียงโทรศัพท์ดังขึ้น...
            <img src="/assetsStory/6.png" alt="test" width={200} />
          </div>
        </Link>
      </center>
    </div>
  );
}

export default S10;
