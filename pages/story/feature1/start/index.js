import React from "react";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
  const submit = (e) => {
    e.preventDefault();
    router.push("/story/feature1/start/s1");
  };
  return (
    <div>
      <center>
        <form onSubmit={submit}>
          <img src="/logo.png" alt="logo" className="py-10" />
          <label>ชื่อเล่น</label>
          <br />
          <input className=" bg-gray-300 rounded-md w-64" type="text" pattern="[^0-9]*" required />
          <br />
          <br />
          <label>อายุ</label>
          <br />
          <input className=" bg-gray-300 rounded-md w-64" type="number" min="1" max="100" required />
          <br />
          <br />
          <button className="bg-sky-600 hover:bg-sky-700 px-10 py-1 rounded-md text-white">
            {" "}
            ถัดไป
          </button>
        </form>
      </center>
    </div>
  );
}

export default Index;
