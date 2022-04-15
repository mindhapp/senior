import React from "react";
import { store } from "../../../../components/store/store";
import Link from "next/link";
import { observer } from "mobx-react-lite";

const Q44 = observer(() => {
  return (
    <div>
      <center>
        <div className=" border border-solid py-10">
          {" "}
          <h1>สิ่งไหนใกล้เคียงกับตัวคุณมากที่สุด ?</h1>
          <br />
          <Link href="/story/feature2/start/end">
            <button onClick={() => store.addCharacter("J")}>
              {" "}
              <i className="fa-solid fa-circle" />{" "}
              จำรายละเอียดคนสำคัญได้อย่างแม่นยำ
            </button>
          </Link>
          <br />
          <br />
          <Link href="/story/feature2/start/q45">
            <button>
              {" "}
              <i className="fa-solid fa-circle" />{" "}
              จำได้บ้างแต่ลืมรายละเอียดบางอย่างไปบ้าง
            </button>
          </Link>
        </div>
      </center>
    </div>
  );
});

export default Q44;
