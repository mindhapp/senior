import React from "react";
import Link from "next/link";
import { store } from "../../../../components/store/store";
import { observer } from "mobx-react-lite";

const S14 = observer(() => {
  return (
    <div>
      <center>
        <Link href={`/story/feature1/start/s15`}>
          <div className=" cursor-pointer pt-24">
            บทสนทนาระหว่างคุณและ...{store.names}
            <br />
            ก็ดำเนินไปอย่างปกติเหมือนกับทุกครั้ง
          </div>
        </Link>
      </center>
    </div>
  );
});

export default S14;
