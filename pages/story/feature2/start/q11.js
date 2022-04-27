import React from "react";
import { store } from "../../../../components/store/store";
import Link from "next/link";
import { observer } from "mobx-react-lite";

const Q11 = observer(() => {
  return (
    <div>
      <center>
        <div className=" border border-solid py-10">
          {" "}
          <h1>การได้เจอผู้คนใหม่ๆทำให้คุณรู้สึกอย่างไร ?</h1>
          <br />
          <Link href="/story/feature2/start/q2">
            <button onClick={() =>
              // store.addCharacter("I")
              store.addCharacter({ question: 11, character: 'I', index: 0 })
            }>
              {" "}
              <i className="fa-solid fa-circle" /> อึดอัด ทำตัวไม่ถูก
            </button>
          </Link>
          <br />
          <br />
          <Link href="/story/feature2/start/q2">
            <button onClick={() =>
              // store.addCharacter("E")
              store.addCharacter({ question: 11, character: 'E', index: 0 })
            }>
              {" "}
              <i className="fa-solid fa-circle" /> มีความสุข
              ชอบที่ได้เจอผู้คนใหม่ๆ
            </button>
          </Link>
        </div>
      </center >
    </div >
  );
});

export default Q11;
