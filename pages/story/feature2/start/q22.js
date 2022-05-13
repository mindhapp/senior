import React from "react";
import { store } from "../../../../components/store/store";
import Link from "next/link";
import { observer } from "mobx-react-lite";

const Q22 = observer(() => {
  return (
    <div>
      <center>
        <div className=" border border-solid py-10">
          {" "}
          <h1>
            ตอนที่คุณได้เห็นร่างไร้วิญญาณของคนที่คุณรักอยู่ด้านหน้าของคุณ ?
          </h1>
          <br />
          <Link href="/story/feature2/start/q3">
            <button onClick={() =>
              // store.addCharacter("N")
              store.addCharacter({ question: 22, character: 'N', index: 1, questionnumber:22 })
            }>
              {" "}
              <i className="fa-solid fa-circle" />{" "}
              นึกถึงภาพวันเก่าๆตอนที่เขายังมีชีวิตอยู่ อยากย้อนเวลากลับไป
            </button>
          </Link>
          <br />
          <br />
          <Link href="/story/feature2/start/q23">
            <button>
              {" "}
              <i className="fa-solid fa-circle" /> โลกก็เป็นไปตามปกติ เกิด แก่
              เจ็บ ตาย ทำใจยอมรับความจริง
            </button>
          </Link>
        </div>
      </center>
    </div>
  );
});

export default Q22;
