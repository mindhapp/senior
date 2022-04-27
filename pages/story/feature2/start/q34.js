import React from "react";
import { store } from "../../../../components/store/store";
import Link from "next/link";
import { observer } from "mobx-react-lite";

const Q34 = observer(() => {
  return (
    <div>
      <center>
        <div className=" border border-solid py-10">
          {" "}
          <h1>เวลาที่คุณได้พูดคุยกับคนที่คุณรัก ?</h1>
          <br />
          <Link href="/story/feature2/start/q4">
            <button onClick={() =>
              // store.addCharacter("F")
              store.addCharacter({ question: 34, character: 'F', index: 2 })
            }>
              {" "}
              <i className="fa-solid fa-circle" />{" "}
              มีอารมณ์ร่วมและมีปฏิกิริยาตอบโต้กับเรื่องที่ฟัง
            </button>
          </Link>
          <br />
          <br />
          <Link href="/story/feature2/start/q4">
            <button onClick={() =>
              // store.addCharacter("T")
              store.addCharacter({ question: 34, character: 'T', index: 2 })
            }>
              {" "}
              <i className="fa-solid fa-circle" />{" "}
              ถามคำถามเกี่ยวกับคนๆนั้นเพื่อดูทัศนคติ
            </button>
          </Link>
        </div>
      </center>
    </div>
  );
});

export default Q34;
