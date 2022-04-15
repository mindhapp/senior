import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <div>
      <div className="bg-gray-100 font-sans w-full  m-0">
        <div className="bg-white shadow">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              <div>
                <img src="/logo.png" width={200} alt="logo" />
              </div>
              <div className=" sm:flex sm:items-center">
                <Link href={`/story/feature1`}>
                  <a className="text-gray-800 text-sm font-semibold hover:text-blue-700 mr-4">
                    Story
                  </a>
                </Link>
                <Link href={`/story/feature2/start`}>
                  <a className="text-gray-800 text-sm font-semibold hover:text-blue-700 mr-4">
                    Question
                  </a>
                </Link>
                <Link href={`/allcard`}>
                  <a className="text-gray-800 text-sm font-semibold hover:text-blue-700 mr-4">
                    MBTI
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
