import React from "react";
import Link from "next/link";
import { observer } from "mobx-react-lite";

const Q0 = observer(() => {
  return (
    <div>
      <center>
       
        <div className=" border border-solid py-10">
          {" "}
          <h1>ฉันเป็นคนที่ ....</h1>
          <br />
          <Link href="/story/feature2/start/q1">
            <button>
              {" "}
              <i className="fa-solid fa-circle" /> สดใส และ
              กล้าแสดงความรู้สึกอย่างตรงไปตรงมา
            </button>
          </Link>
          <br />
          <br />
          <Link href="/story/feature2/start/q11">
            <button>
              {" "}
              <i className="fa-solid fa-circle" />{" "}
              กระตือรือร้นเมื่ออยู่ในสถานการณ์ แปลกใหม่ แต่ก็เป็นคนที่เงียบสงบ
            </button>
          </Link>
        </div>
      </center>
    </div>
  );
});

export default Q0;
