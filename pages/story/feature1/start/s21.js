import React, { useContext } from "react";
import Link from "next/link";
// import { observer } from "mobx-react-lite";
import { useRouter } from 'next/router'
import { Context } from '../../../../context'
import { updateAnswer } from '../../../../services/updateAnswer'

function S21() {
  const router = useRouter()
  const [authState] = useContext(Context)

  const onSubmit = async (value) => {
    await updateAnswer('feature1', authState.uid, {
      s21: value
    })
    router.push('/story/feature1/start/s22')
  }
  return (
    <div>
      <center>
        ความรู้สึกแรกที่วิ่งเข้ามาในหัวคุณคืออะไร
        <div className="cursor-pointer">
          <br />


          <Link href={`/story/feature1/start/s22`}>
            <div>
              <button className=" bg-black px-20 py-3 w-3/5 rounded-md text-white" onClick={() => onSubmit('กลัว')}>
                กลัว
              </button>
              <br />
              <br />
              <button className=" bg-black px-20 py-3 w-3/5 rounded-md text-white" onClick={() => onSubmit('เสียใจ')}>
                เสียใจ
              </button>
              <br />
              <br />
              <button className=" bg-black px-20 py-3 w-3/5 rounded-md text-white" onClick={() => onSubmit('ผิดหวัง')}>
                ผิดหวัง
              </button>
              <br />
              <br />
              <button className=" bg-black px-20 py-3 w-3/5 rounded-md text-white" onClick={() => onSubmit('ตกใจ')}>
                ตกใจ
              </button>
              <br />
              <br />
              <button className=" bg-black px-20 py-3 w-3/5 rounded-md text-white" onClick={() => onSubmit('เฉยๆ')}>
                เฉยๆ
              </button>
            </div>
          </Link>
        </div>
      </center>
    </div>
  );
};

export default S21;
