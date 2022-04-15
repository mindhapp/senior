import React from "react";
import { useRouter } from "next/router";

function S6() {
  const router = useRouter();
  const submit = (e) => {
    e.preventDefault();
    router.push("/story/feature1/start/s7");
  };
  return (
    <div>
      <center>
        <form onSubmit={submit}>
          <div className=" cursor-pointer pt-24">
            <label>สิ่งแรกที่คุณทำตอนตื่นนอนคืออะไร</label>
            <br />
            <br />
            <input
              type="text"
              required
              className=" bg-black rounded-md py-4 px-6 text-white"
              placeholder="พิมพ์ข้อความ..."
            />
            <br /> <br />
            <button type="submit">{`>> ถัดไป`}</button>
          </div>
        </form>
        <br />
      </center>
    </div>
  );
}

export default S6;
