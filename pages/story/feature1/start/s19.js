import React from "react";
import Link from "next/link";
import { observer } from "mobx-react-lite";

const S19 = observer(() => {
  return (
    <div>
      <center>
        <Link href={`/story/feature1/start/s20`}>
          <div className=" cursor-pointer">
            <br />
            ไม่มีเสียงตอบรับมาพูดคุยประโยค
            <br />
            เหล่านั้นกับคุณอีกแล้ว....
            <img src="/assetsStory/12.png" alt="test" width={200} />
          </div>
        </Link>
      </center>
    </div>
  );
});

export default S19;
