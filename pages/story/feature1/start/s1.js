import React from "react";
import Link from "next/link";

function S1() {
  return (
    <div>
      <center>
        <Link href={`/story/feature1/start/s2`}>
          <div className=" cursor-pointer pt-24">
            ถ้าคุณพร้อมแล้ว
            <br />
            แตะหน้าจอเพื่อไปต่อได้เลย
          </div>
        </Link>
        
      </center>
    </div>
  );
}

export default S1;
