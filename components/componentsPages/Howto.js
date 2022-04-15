import React from "react";
import Link from "next/link";
function Howto() {
  return (
    <div className="container mx-auto py-30">
      <div className="grid grid-cols-1 gap-4">
        <div className="col-start-1 col-end-7 px-10 sm:px-22 md:px-22 lg:px-72 text-lg">
          <center className="mt-20">
            <Link href={`/story/feature1`}>
              <button className=" bg-pink-300 hover:bg-pink-400 px-20 py-10 rounded-md text-white mb-10">
                หากย้อนเวลากลับไปได้สิ่งแรกที่คุณอยากทำมากที่สุด คืออะไร ?{" "}
                <br /> ลองมาสัมผัสบรรยากาศเหล่านั้นผ่านเนื้อเรื่องของเราดูสิ
                <br />
                <br />
                {`Let's Play Now !!`}
              </button>
            </Link>
            <Link href={`/story/feature2/start`}>
              <button className=" bg-green-500 hover:bg-green-400 px-20 py-10 rounded-md text-white mb-10">
                ลองมารู้จักตัวตนของคุณ <br /> เพิ่มขึ้นดูสิ <br />
              </button>
            </Link>
            <br />
            <Link href={`/allcard`}>
              <button className=" bg-purple-300 hover:bg-purple-400 px-20 py-10 rounded-md text-white mb-10">
                การ์ดบ่งบอกความเป็นตัวคุณ
              </button>
            </Link>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Howto;
