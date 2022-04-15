import React from "react";
import Link from "next/link";
import { observer } from "mobx-react-lite";

const Q4 = observer(() => {
  return (
    <div>
      <center>
        <div className=" border border-solid py-10">
          {" "}
          <h1>วันนี้เป็นวันที่อากาศดีเหมาะกับการออกไปเที่ยวคุณจะ...</h1>
          <br />
          <Link href="/story/feature2/start/q44">
            <button>
              {" "}
              <i className="fa-solid fa-circle" />{" "}
              วางแผนอย่างละเอียดว่าจะทำอะไรบ้าง
            </button>
          </Link>
          <br />
          <br />
          <Link href="/story/feature2/start/q44">
            <button>
              {" "}
              <i className="fa-solid fa-circle" />{" "}
              แค่ทำอะไรบางอย่างก็รู้สึกผ่อนคลายแล้ว
            </button>
          </Link>
        </div>
      </center>
    </div>
  );
});

export default Q4;
