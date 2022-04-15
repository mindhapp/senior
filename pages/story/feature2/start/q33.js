import React from "react";
import { store } from "../../../../components/store/store";
import Link from "next/link";
import { observer } from "mobx-react-lite";

const Q33 = observer(() => {
  return (
    <div>
      <center>
        <div className=" border border-solid py-10">
          {" "}
          <h1>ถ้าคนที่คุณรักอยู่ในสถานการณ์ที่ยากลำบาก ?</h1>
          <br />
          <Link href="/story/feature2/start/q34">
            <button>
              {" "}
              <i className="fa-solid fa-circle" />{" "}
              เสนอทางแก้ปัญหาที่ใช้ได้จริงพร้อมให้กำลังใจ
            </button>
          </Link>
          <br />
          <br />
          <Link href="/story/feature2/start/q4">
            <button onClick={() => store.addCharacter("F")}>
              {" "}
              <i className="fa-solid fa-circle" />{" "}
              มีอารมณ์ร่วมและมีปฏิกิริยาตอบโต้กับเรื่องที่ฟัง
            </button>
          </Link>
        </div>
      </center>
    </div>
  );
});

export default Q33;
