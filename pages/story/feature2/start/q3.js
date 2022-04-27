import React from "react";
import { store } from "../../../../components/store/store";
import Link from "next/link";
import { observer } from "mobx-react-lite";

const Q3 = observer(() => {
  return (
    <div>
      <center>
        <div className=" border border-solid py-10">
          {" "}
          <h1>
            ตอนที่คุณรู้ว่านี่เป็นสายสุดท้ายจากคนที่คุณรัก ความรู้สึกแรก ?
          </h1>
          <br />
          <Link href="/story/feature2/start/q33">
            <button>
              {" "}
              <i className="fa-solid fa-circle" /> พยายามหาเหตุผลในสิ่งที่พลาดไป
            </button>
          </Link>
          <br />
          <br />
          <Link href="/story/feature2/start/q4">
            <button onClick={() =>
              // store.addCharacter("F")
              store.addCharacter({ question: 3, character: 'F', index: 2 })
            }>
              {" "}
              <i className="fa-solid fa-circle" /> โกรธมากที่ทำอะไรไม่ได้
              น้ำตาไหลก่อน
            </button>
          </Link>
        </div>
      </center>
    </div>
  );
});

export default Q3;
