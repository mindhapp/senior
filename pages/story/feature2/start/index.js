import React from "react";
import Link from "next/link";

function Index() {
  return (
    <div className="container mx-auto py-40">
      <div className="grid grid-cols-1 gap-4">
        <div className="col-start-1 col-end-7 px-10 sm:px-22 md:px-22 lg:px-72 text-lg">
          <center>
            <Link href={`/story/feature2/start/q0`}>
              <button className=" bg-pink-400 hover:bg-pink-500 px-20 py-10 rounded-md text-white mb-10">
                {`Let's play now`}
              </button>
            </Link>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Index;
