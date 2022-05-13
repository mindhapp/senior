import React from "react";
import { store } from "../../../../components/store/store";
import Link from "next/link";
import { observer } from "mobx-react-lite";

const Q23 = observer(() => {
  return (
    <div>
      <center>
        <div className=" border border-solid py-10">
          {" "}
          <h1>หลังจากคุณเล่น Story ของเราคุณจะกลับไปหาคนที่คุณรักแล้ว ...</h1>
          <br />
          <Link href="/story/feature2/start/q3">
            <button onClick={() =>
              // store.addCharacter("S")
              store.addCharacter({ question: 23, character: 'S', index: 1, questionnumber:23 })
            }>
              {" "}
              <i className="fa-solid fa-circle" />{" "}
              วางแผนใช้ชีวิตกับคนที่คุณรักให้คุ้มค่ามากที่สุด
            </button>
          </Link>
          <br />
          <br />
          <Link href="/story/feature2/start/q3">
            <button onClick={() =>
              // store.addCharacter("N")
              store.addCharacter({ question: 23, character: 'N', index: 1 , questionnumber:23})
            }>
              {" "}
              <i className="fa-solid fa-circle" />{" "}
              จะใช้ชีวิตที่เหลืออยู่กับคนที่คุณรักอย่างมีความสุขที่สุดไปเรื่อยๆ
            </button>
          </Link>
        </div>
      </center>
    </div>
  );
});

export default Q23;
