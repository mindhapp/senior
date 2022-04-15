import React from "react";
import Link from "next/link";
import { observer } from "mobx-react-lite";

const S31 = observer(() => {
  return (
    <div>
      <center>
        <Link href={`/story/feature2/start`}>
          <div className="cursor-pointer pt-24">
            แล้วความสุขของคุณล่ะคืออะไร...
            <br />
            ลองมารู้จักตัวเองมากขึ้นสิ
            <img src="/logo.png" alt="logo" className="py-10" />
          </div>
        </Link>
      </center>
    </div>
  );
});

export default S31;
