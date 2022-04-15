import React, { useEffect, useState } from "react";
import Link from "next/link";

const S30 = () => {
  const [quotes, setQuotes] = useState("");
  function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
  }

  const array = [
    `เวลาของคุณมีจำกัด
  จงอย่าเสียเวลาไปกับการใช้ชีวิตในแบบของคนอื่น
(Steve Jobs)`,
    ` คนที่มองโลกในแง่ร้าย
    จะเห็น "อุปสรรค" อยู่ในทุก ๆ โอกาส 
    ส่วนคนมองโลกในแง่ดี จะเห็น "โอกาส" อยู่ในทุก ๆ อุปสรรค.
     (- Winston Churchill)`,
    `จงหลงใหลในการคิดบวกและ
    มองโลกในด้านดี ๆ เข้าไว้ 
    และหากคุณไม่ชอบสิ่งใด ก็จงเปลี่ยนความชอบของคุณแทน 
    (- Rick Steves)`,
    `วันนี้อาจเป็นวันโหดร้าย
    พรุ่งนี้ก็อาจจะยิ่งโหดร้ายกว่า
    แต่เชื่อเถอะว่า
    วันมะรืนจะเป็นวันที่สวยงาม 
     (- Jack Ma)`,
    `การเปรียบเทียบตัวเองกับคนอื่น คือการ ปลันความสุข ครั้งใหญ่ของตัวเอง
     (- NexusForJesus)`,
    `ความสามารถที่เราไม่ได้ใช้ เหมือนปากกาเคมีที่ลืมปิดฝา มันจะค่อยแห้งไปจนเขียนไม่ติด
     - โน้ส อุดม แต้พานิช`,
    `การเริ่มต้นเป็นเรื่องยาก แต่การก้าวต่อไปเป็นเรื่องยากกว่า
     - ถกลเกียรติ วีรวรรณ`,
    `บางเรื่องอธิบายด้วยคำพูดไม่ได้ ให้เวลาเป็นสิ่งพิสูจน์เอง
     - คุณพันธ์รบ กำลา`,
  ];
  useEffect(() => {
    const result = getRandomItem(array);
    setQuotes(result);
  });

  return (
    <div>
      <center>
        <Link href={`/story/feature1/start/s31`}>
          <div className="cursor-pointer pt-10">
            <div className="w-full py-20 px-10 bg-black text-white rounded-md">
              {quotes}
            </div>
            <br />
            <br />
            {`>> ถัดไป`}
          </div>
        </Link>
      </center>
    </div>
  );
};

export default S30;
