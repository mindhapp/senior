import React from "react";
import { store } from "../../../../components/store/store";
import { observer } from "mobx-react-lite";
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

const End = observer(() => {
  let answers = store.character.toString();
  let results = answers.split(",");
  let result = results.join("");

  return (
    <div>
      <center>การ์ดที่คุณได้คือ {results.join("")}</center>
      {result == "ISTJ" ? (
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
});

export default End;
