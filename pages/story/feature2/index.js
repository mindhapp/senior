import React from "react";
import Link from "next/link";

function Index() {
  return (
    <div>
      <center>
        <Link href={`/story/feature2/start`}>
          <button className=" bg-pink-400 hover:bg-pink-500 px-20 py-10 rounded-md text-white mb-10">
            {`Let's play now`}
          </button>
        </Link>
      </center>
    </div>
  );
}

export default Index;
