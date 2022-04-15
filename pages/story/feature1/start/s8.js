import React from "react";
import Link from "next/link";

function S8() {
  return (
    <div>
      <center>
        <Link href={`/story/feature1/start/s9`}>
          <div className=" cursor-pointer pt-24">
            ตอนนี้อยากให้คุณลองจินตนาการ
            <br />
            ว่าคุณกำลังนอนมองเพดานสีขาว <br />
            ในห้องของคุณอยู่
            <img src="/assetsStory/5.png" alt="test" width={200} />
          </div>
        </Link>
      </center>
    </div>
  );
}

export default S8;
