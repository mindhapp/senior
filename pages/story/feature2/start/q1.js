import React from "react";
import { store } from "../../../../components/store/store";
import Link from "next/link";
import { observer } from "mobx-react-lite";


function q1() {
  const router = useRouter();
  const [authState] = useContext(Context)

  const inputRef = useRef(null)

  const submit = async (e) => {
    e.preventDefault();

    // call firestore to set value
    await updateAnswer('feature2', authState.uid, {
      q1: inputRef.current.value,
    })

    router.push("/story/feature2/start/q2");
  }};

const Q1 = observer(() => {
  return (
    <div>
      <center>
        <div className=" border border-solid py-10">
          {" "}
          <h1>
            เมื่อต้องเจอกับเหตุการณ์ไม่คาดคิดจาก Story ที่ผ่านมา คุณจะทำอย่างไร
          </h1>
          <br />
          <Link href="/story/feature2/start/q2">
            <button onClick={() =>
              // store.addCharacter("I")
              store.addCharacter({ question: 1, character: 'I', index: 0, questionnumber:1 })
            }>
              {" "}
              <i className="fa-solid fa-circle" />{" "}
              รอให้คนถามเกี่ยวกับเรื่องราวที่เกิดขึ้น
            </button>
          </Link>
          <br />
          <br />
          <Link href="/story/feature2/start/q2">
            <button onClick={() =>
              // store.addCharacter("E")
              store.addCharacter({ question: 1, character: 'E', index: 0 , questionnumber:1})
            }>
              {" "}
              <i className="fa-solid fa-circle" /> ทักไปเล่าให้คนสำคัญของคุณฟัง
            </button>
          </Link>
          <br />
          <br />
          <Link href="/story/feature2/start/q11">
            <button>
              {" "}
              <i className="fa-solid fa-circle" /> อยู่เฉยๆเรื่อยๆไปตามสถานการณ์
            </button>
          </Link>
        </div>
      </center>
    </div>
  );
});

export default Q1;
