import React from "react";
import Link from "next/link";
import { observer } from "mobx-react-lite";

const S18 = observer(() => {
  return (
    <div>
      <center>
        <Link href={`/story/feature1/start/s19`}>
          <div className=" cursor-pointer">
            <img src="/assetsStory/11.png" alt="test" width={200} />
            <br />
            นั่นเป็นสายสุดท้ายที่คุณ
            <br />
            ได้รับจากคนที่คุณรัก...
          </div>
        </Link>
      </center>
    </div>
  );
});

export default S18;
