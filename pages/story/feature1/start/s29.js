import React from "react";
import Link from "next/link";
import { observer } from "mobx-react-lite";

const S29 = observer(() => {
  return (
    <div>
      <center>
        <Link href={`/story/feature1/start/s30`}>
          <div className="cursor-pointer pt-24">
            หลังจากนี้ขอให้คุณใช้ชีวิตอย่างมีความสุข
            <br />
            แล้วอย่าลืมโทรหาคนที่คุณรักด้วยล่ะ
          </div>
        </Link>
      </center>
    </div>
  );
});

export default S29;
