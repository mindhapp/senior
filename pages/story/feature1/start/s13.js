import React from "react";
import Link from "next/link";
import { store } from "../../../../components/store/store";
import { observer } from "mobx-react-lite";

const S13 = observer(() => {
  return (
    <div>
      <center>
        <Link href={`/story/feature1/start/s14`}>
          <div className=" cursor-pointer pt-24">
            มีสายเรียกเข้าจาก {store.names}
            <img src="/assetsStory/7.png" alt="test" width={200} />
          </div>
        </Link>
      </center>
    </div>
  );
});

export default S13;
