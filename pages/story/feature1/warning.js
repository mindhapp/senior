import React from "react";
import Link from "next/link";

function Warning() {
  function play() {
    var audio = document.getElementById("a1");
    audio.play();
  }
  return (
    <div>
      <center>
        คำเตือน
        <br /> เว็บไซต์นี้มีเนื้อหาเกี่ยวกับ
        <br /> อารมณ์และความรู้สึก
        <br />
        อาจมีผลกระทบทางด้านจิตใจ
        <br /> โปรดตรวจสอบสภาพจิตใจก่อนเล่น
        <br />
        หากคุณไม่สบายใจระหว่างเล่น
        <br /> สามารถหยุดเล่นได้ตลอด
        <br /> *เนื้อหาในเว็บนี้ไม่ใช่
        <br />
        แบบสอบถามทางจิตวิทยา
        <br /> หรือโหราศาสตร์แต่อย่างใด
        <br />
        <br />
        <Link href={`/story/feature1/info`}>
          <button
            className="bg-sky-600 hover:bg-sky-700 px-10 py-1 rounded-md text-white"
            onClick={play}
          >
            {" "}
            ถัดไป
          </button>
        </Link>
      </center>
    </div>
  );
}

export default Warning;
