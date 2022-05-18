
import { useRouter } from "next/router";
import React, { useRef, useContext } from "react";
import { Context } from '../../../../context'
import { updateAnswer } from '../../../../services/updateAnswer'

function Index() {
  const router = useRouter();
  const [authState] = useContext(Context)
  const inputRef = useRef(null)
  const submit = async(e) => {
    e.preventDefault();
  
     // call firestore to set value
     updateAnswer('feature1', authState.uid, {
      name: inputRef.current.value,
    }) 
     router.push("/story/feature1/start/s1");
  };
  return (
    <div>
      <center>
        <form onSubmit={submit}>
          <img src="/logo.png" alt="logo" className="py-10" />
          <label>ชื่อเล่น</label>
          <br />
          <input className=" bg-gray-300 rounded-md w-64" type="text" pattern="[^0-9]*" required 
          ref={inputRef}/>
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
