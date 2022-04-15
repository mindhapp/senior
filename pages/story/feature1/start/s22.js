import React from "react";
import Link from "next/link";
import { observer } from "mobx-react-lite";

const S22 = observer(() => {
  return (
    <div>
      <center>
        <Link href={`/story/feature1/start/s23`}>
          <div className=" cursor-pointer">
            <br />
            ถ้าคุณได้มีโอกาสรู้ล่วงหน้าว่า
            <br />
            นี่เป็นสายสุดท้าย
            <br />
            คุณยังมีอะไรติดค้าง
            <br />
            หรือว่าเสียดายอีกมั้ย...
            <img src="/assetsStory/13.png" alt="test" width={200} />
          </div>
        </Link>
      </center>
    </div>
  );
});

export default S22;
