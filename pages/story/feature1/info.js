import React from "react";
import Link from "next/link";

function Info() {
  return (
    <div>
      ผลงานชิ้นนี่เป็นส่วนหนึ่งของ
      <br /> Senior Project
      <br />
      นักศึกษามหาวิทยาสัยมหิดล <br /> คณะเทคโนโลยีสารสนเทศและการสื่อสาร
      <br />
      <br />
      <br />
      {"Turning into happiness"}
      <br />
      <br />
      <br />
      เพื่อความปลอดภัย
      <br />
      แบบกดสอบนี้จะไม่มีการบันทึกข้อมูล <br /> และนำข้อมูลไปเผยแพร่ไดๆทั้งสิ้น{" "}
      <br />
      <br />
      <br />
      <Link href={`/story/feature1/start/`}>
        <button className="bg-sky-600 hover:bg-sky-700 px-10 py-1 rounded-md text-white">
          {" "}
          ถัดไป
        </button>
      </Link>
    </div>
  );
}

export default Info;
