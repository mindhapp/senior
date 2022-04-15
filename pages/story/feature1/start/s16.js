import React from "react";
import Link from "next/link";
import { observer } from "mobx-react-lite";

const S16 = observer(() => {
  return (
    <div>
      <center>
        <Link href={`/story/feature1/start/s17`}>
          <div className=" cursor-pointer pt-24">
            ทุกอย่างรอบตัวคุณดูเงียบกว่าที่เคยเป็น
            <img src="/assetsStory/9.png" alt="test" width={200} />
          </div>
        </Link>
      </center>
    </div>
  );
});

export default S16;
