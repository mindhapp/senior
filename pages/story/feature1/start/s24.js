import React from "react";
import Link from "next/link";
import { observer } from "mobx-react-lite";

const S24 = observer(() => {
  return (
    <div>
      <center>
        <Link href={`/story/feature1/start/s25`}>
          <div className=" cursor-pointer">
            นั่นเป็นประโยคที่ดีมากเลยนะ
            <br />
            <br />
            ...
            <img src="/assetsStory/14.png" alt="test" width={200} />
          </div>
        </Link>
      </center>
    </div>
  );
});

export default S24;
