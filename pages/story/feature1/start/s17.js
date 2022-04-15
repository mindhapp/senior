import React from "react";
import Link from "next/link";
import { observer } from "mobx-react-lite";

const S17 = observer(() => {
  return (
    <div>
      <center>
        <Link href={`/story/feature1/start/s18`}>
          <div className=" cursor-pointer">
            <img src="/assetsStory/10.png" alt="test" width={200} />
            <br />
            ประโยคธรรมดาๆ ที่คุณได้พูดคุยกับ
            <br />
            ปลายสาย ประโยคที่คุ้นเคย...
          </div>
        </Link>
      </center>
    </div>
  );
});

export default S17;
