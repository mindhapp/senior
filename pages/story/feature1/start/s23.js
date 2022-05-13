import React, { useRef, useContext } from "react";
import { useRouter } from "next/router";

import { Context } from '../../../../context'
import { updateAnswer } from '../../../../services/updateAnswer'


function S23() {
  const router = useRouter();
  const [authState] = useContext(Context)

  const inputRef = useRef(null)

  const submit = async (e) => {
    e.preventDefault();

    // call firestore to set value
    await updateAnswer('feature1', authState.uid, {
      s23: inputRef.current.value,
    })

    router.push("/story/feature1/start/s24");
  };
  return (
    <div>
      <center>
        <form onSubmit={submit}>
          <div className=" cursor-pointer pt-24">
            <label>สิ่งที่คุณอยากบอกปลายสายมากที่สุดคืออะไร...</label>
            <br />
            <br />
            <input
              type="text"
              required
              className=" bg-black rounded-md py-4 px-6 text-white"
              placeholder="พิมพ์ข้อความ..."
              ref={inputRef}
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

export default S23;
