import React from "react";
import { store } from "../../../../components/store/store";
import Link from "next/link";
import { observer } from "mobx-react-lite";

const Q2 = observer(() => {
  return (
    <div>
      <center>
        <div className=" border border-solid py-10">
          {" "}
          <h1>หากคนที่คุณรักจากไปอย่างกระทันหัน ?</h1>
          <br />
          <Link href="/story/feature2/start/q22">
            <button>
              {" "}
              <i className="fa-solid fa-circle" />{" "}
              คิดทบทวนว่าชีวิตหลังจากนี้จะเป็นยังไง
            </button>
          </Link>
          <br />
          <br />
          <Link href="/story/feature2/start/q3">
            <button onClick={() => store.addCharacter("N")}>
              {" "}
              <i className="fa-solid fa-circle" /> รู้สึกเศร้า เสียใจ
              จมดิ่งไปกับความรู้สึก
            </button>
          </Link>
        </div>
      </center>
    </div>
  );
});

export default Q2;
