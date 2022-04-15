import React from "react";
import Link from "next/link";
import { observer } from "mobx-react-lite";

const S28 = observer(() => {
  return (
    <div>
      <center>
        <Link href={`/story/feature1/start/s29`}>
          <div className="cursor-pointer pt-24">
            เพราะบางทีชีวิตก็ไม่มีอะไรแน่นอน
            <br />
            อาจจะไม่มีพรุ่งนี้ให้ได้พูดคุยสนุกๆ
            <br />
            แบบเดิมแล้ว...
          </div>
        </Link>
      </center>
    </div>
  );
});

export default S28;
