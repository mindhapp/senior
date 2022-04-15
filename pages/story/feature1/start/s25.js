import React from "react";
import Link from "next/link";
import { observer } from "mobx-react-lite";

const S25 = observer(() => {
  return (
    <div>
      <center>
        <Link href={`/story/feature1/start/s26`}>
          <div className=" cursor-pointer">
            คุณลองโทรกลับไปหาปลายสายสิ
            <img src="/assetsStory/15.png" alt="test" width={200} />
          </div>
        </Link>
      </center>
    </div>
  );
});

export default S25;
