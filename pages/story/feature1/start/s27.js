import React from "react";
import Link from "next/link";
import { observer } from "mobx-react-lite";

const S27 = observer(() => {
  return (
    <div>
      <center>
        <Link href={`/story/feature1/start/s28`}>
          <div className="cursor-pointer">
            เขาอาจจะรอฟังอยู่ก็ได้นะ
            <img src="/assetsStory/16.png" alt="test" width={200} />
          </div>
        </Link>
      </center>
    </div>
  );
});

export default S27;
