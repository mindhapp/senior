import React, { useState, useRef, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Context } from '../../../../context'
import { updateAnswer } from '../../../../services/updateAnswer'
function Index() {
  const router = useRouter();
  const [authState] = useContext(Context)
  const inputRef = useRef(null)
  const submit = async (e) => {
    e.preventDefault();
    localStorage.setItem('name', name)
    localStorage.setItem('finish', false)
    setProcess(2);

    // call firestore to set value
    updateAnswer('feature2', authState.uid, {
      name: inputRef.current.value,
    })
  }

  const [process, setProcess] = useState(1)
  const [name, setName] = useState("")
  const onChangeHandler = (e) => {
    setName(e.target.value)
  }
  return (
    process === 1 ? <div>
      <center>
        <form onSubmit={submit}>
          <img src="/logo.png" alt="logo" className="py-10" />
          <label>ชื่อเล่น</label>
          <br />
          <input onChange={onChangeHandler} className=" bg-gray-300 rounded-md w-64" type="text" pattern="[^0-9]*" required ref={inputRef} />
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
    </div> : < div className="container mx-auto py-40" >
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
    </div >
  );


}
export default Index;
