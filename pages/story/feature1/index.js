import React from "react";
import Link from "next/link";

function Index() {
  return (
    <div>
      <center>
        <img src="/logo.png" alt="logo" className="py-10" />
        <br />
        <br />
        <Link href={`/story/feature1/warning`}>
          <button className="bg-sky-600 hover:bg-sky-700 px-10 py-1 rounded-md text-white">
            {" "}
            ถัดไป
          </button>
        </Link>
      </center>
    </div>
  );
}

export default Index;
