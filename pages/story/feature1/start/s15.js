import React from "react";
import Link from "next/link";
import { observer } from "mobx-react-lite";

const S15 = observer(() => {
  return (
    <div>
      <center>
        <Link href={`/story/feature1/start/s16`}>
          <div className=" cursor-pointer pt-24">
            หลังจากคุณวางสาย
            <img src="/assetsStory/8.png" alt="test" width={200} />
          </div>
        </Link>
      </center>
    </div>
  );
});

export default S15;
