import React from "react";
import Link from "next/link";
import { observer } from "mobx-react-lite";

const S20 = observer(() => {
  return (
    <div>
      <center>
        <Link href={`/story/feature1/start/s21`}>
          <div className=" cursor-pointer pt-24">
            <br />
           ปลายสายของคุณได้จากคุณไปแล้ว
          </div>
        </Link>
      </center>
    </div>
  );
});

export default S20;
