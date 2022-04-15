import React from "react";
import Link from "next/link";
import { observer } from "mobx-react-lite";

const S21 = observer(() => {
  return (
    <div>
      <center>
        ความรู้สึกแรกที่วิ่งเข้ามาในหัวคุณคืออะไร
        <div className="cursor-pointer">
          <br />

          <Link href={`/story/feature1/start/s22`}>
            <div>
              <button className=" bg-black px-20 py-3 w-3/5 rounded-md text-white">
                กลัว
              </button>
              <br />
              <br />
              <button className=" bg-black px-20 py-3 w-3/5 rounded-md text-white">
                เสียใจ
              </button>
              <br />
              <br />
              <button className=" bg-black px-20 py-3 w-3/5 rounded-md text-white">
                ผิดหวัง
              </button>
              <br />
              <br />
              <button className=" bg-black px-20 py-3 w-3/5 rounded-md text-white">
                ตกใจ
              </button>
              <br />
              <br />
              <button className=" bg-black px-20 py-3 w-3/5 rounded-md text-white">
                เฉยๆ
              </button>
            </div>
          </Link>
        </div>
      </center>
    </div>
  );
});

export default S21;
