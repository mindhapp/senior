import React from "react";
import Link from "next/link";
import { observer } from "mobx-react-lite";

const S26 = observer(() => {
  return (
    <div>
      <center>
        <Link href={`/story/feature1/start/s27`}>
          <div className=" cursor-pointer">
            และลองพูดประโยคเหล่านั้นกับเขา
          </div>
        </Link>
      </center>
    </div>
  );
});

export default S26;
