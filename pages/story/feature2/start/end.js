import React, { useEffect, useState, useRef, useContext } from "react";
import { store } from "../../../../components/store/store";
import Link from "next/link";
import Istj from "../../../../components/card/Istj";
import Infj from "../../../../components/card/Infj";
import Enfj from "../../../../components/card/Enfj";
import Enfp from "../../../../components/card/Enfp";
import Entj from "../../../../components/card/Entj";
import Entp from "../../../../components/card/Entp";
import Estj from "../../../../components/card/Estj";
import Isfj from "../../../../components/card/Isfj";
import Esfj from "../../../../components/card/Esfj";
import Intp from "../../../../components/card/Intp";
import Infp from "../../../../components/card/Infp";
import Isfp from "../../../../components/card/Isfp";
import Esfp from "../../../../components/card/Esfp";
import Estp from "../../../../components/card/Estp";
import Istp from "../../../../components/card/Istp";
import { useRouter } from "next/router";
import { Context } from '../../../../context';
import { updateAnswer } from '../../../../services/updateAnswer';
// import { useCallback } from "react/cjs/react.production.min";
import { signOut } from "firebase/auth";
// const res = {
//   q1: 2,
//   q2: 3,
//   q3: 'asdjkhrgfkj',
//   q4: 'B',
//   q5: 6,
// }

const End = () => {
  const [result, setResult] = useState()  
  const [authState] = useContext(Context)

  useEffect(() => {   
    let temp = "";
      for (let i = 0; i <= 3; i++) {
        temp += localStorage.getItem(i)
      }
   setResult(temp)
   updateAnswer('feature2', authState.uid, 
    // { question: c.question, character: temp, index: 1, questionnumber:2 }) 
    {character:temp, 
    Answerquestion1:localStorage.getItem("question0"),
    Answerquestion2:localStorage.getItem("question1"),
    Answerquestion3:localStorage.getItem("question2"),
    Answerquestion4:localStorage.getItem("question3")})
    // const fetchFireStore = async () => {
    //   localStorage.setItem('finish', true)
    //   localStorage.setItem('result', temp)
   
    //   await addDoc(collection(db, "Record"), {
    //     name: localStorage.getItem('name'),
    //     MBTI_type: temp
    //   });
     
    // }
    // if (localStorage.getItem('finish') === 'false') {
    //   fetchFireStore()
    // }
    
  }, [])
  // const onLogout = useCallback(() => {
  //   signOut(AuthInstance())
  // },[])
  
  
  return (
    <div>
      <center>การ์ดที่คุณได้คือ {result}</center>
      {result === "ISTJ" ? (
        <Istj />
      ) : result == "ESTJ" ? (
        <Estj />
      ) : result == "ISFJ" ? (
        <Isfj />
      ) : result == "ESFJ" ? (
        <Esfj />
      ) : result == "ENTJ" ? (
        <Entj />
      ) : result == "INTJ" ? (
        <Infj />
      ) : result == "ENTP" ? (
        <Entp />
      ) : result == "INTP" ? (
        <Intp />
      ) : result == "ENFJ" ? (
        <Enfj />
      ) : result == "INFJ" ? (
        <Infj />
      ) : result == "ENFP" ? (
        <Enfp />
      ) : result == "INFP" ? (
        <Infp />
      ) : result == "ISFP" ? (
        <Isfp />
      ) : result == "ESFP" ? (
        <Esfp />
      ) : result == "ESTP" ? (
        <Estp />
      ) : result == "ISTP" ? (
        <Istp />
      ) : null}
      <br />
      <br />
      <center>
        <Link href={`/howto`}>
          <button
            onClick={() => store.clearData()}
          >{`>> กลับไปยังหน้าแรก`}</button>
        </Link>
      </center>
    </div>
  );
};

export default End;
