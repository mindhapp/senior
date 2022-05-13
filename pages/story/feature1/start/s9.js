import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'

import { Context } from '../../../../context'
import { updateAnswer } from '../../../../services/updateAnswer'

function S9() {
  const router = useRouter()
  const [authState] = useContext(Context)

  const onSubmit = async (value) => {
    await updateAnswer('feature1', authState.uid, {
      s9: value
    })
    router.push('/story/feature1/start/s10')
  }

  return (
    <div>
      <center>
        <div>
          ตอนนี้คุณรู้สึกอย่างไร <br />
          <br />
        </div>
          <div>
          <button className=" bg-black px-20 py-3 w-3/5 rounded-md text-white" onClick={() => onSubmit('มีความสุข')}>
            มีความสุข
          </button>
          <br />
          <br />
          <button className=" bg-black px-20 py-3 w-3/5 rounded-md text-white" onClick={() => onSubmit('เศร้า')}>
            เศร้า
          </button>
          <br />
          <br />
          <button className=" bg-black px-20 py-3 w-3/5 rounded-md text-white" onClick={() => onSubmit('เหงา')}>
            เหงา
          </button>
          <br />
          <br />
          <button className=" bg-black px-20 py-3 w-3/5 rounded-md text-white" onClick={() => onSubmit('เหนื่อย')}>
            เหนื่อย
          </button>
          <br />
          <br />
          <button className=" bg-black px-20 py-3 w-3/5 rounded-md text-white" onClick={() => onSubmit('เฉยๆ')}>
            เฉยๆ
          </button>
        </div>
      </center>
    </div>
  );
}

export default S9;
