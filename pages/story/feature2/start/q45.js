import React from "react";
import { store } from "../../../../components/store/store";
import Link from "next/link";
import { observer } from "mobx-react-lite";

const Q45 = observer(() => {
  return (
    <div>
      <center>
        <div className=" border border-solid py-10">
          {" "}
          <h1>ถ้าต้องสารภาพความในใจกับคนที่คุณ ?</h1>
          <br />
          <Link href="/story/feature2/start/end">
            <button onClick={() => store.addCharacter("P")}>
              {" "}
              <i className="fa-solid fa-circle" />{" "}
              ถ้าบรรยากาศรอบๆเป็นใจก็สารภาพเลย
            </button>
          </Link>
          <br />
          <br />
          <Link href="/story/feature2/start/end">
            <button onClick={() => store.addCharacter("J")}>
              {" "}
              <i className="fa-solid fa-circle" />{" "}
              วางแผนอย่างละเอียดก่อนหาจังหวะสารภาพ
            </button>
          </Link>
        </div>
      </center>
    </div>
  );
});

export default Q45;
