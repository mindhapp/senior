import React, { useState } from "react";
import { useRouter } from "next/router";
import { store } from "../../../../components/store/store";
import { observer } from "mobx-react-lite";

const S12 = observer(() => {
  const [name, setName] = useState("");
  const router = useRouter();

  const submit = (e) => {
    e.preventDefault();
    store.addNames(name);
    router.push("/story/feature1/start/s13");
  };
  return (
    <div>
      <center>
        <form onSubmit={submit}>
          <div className=" cursor-pointer pt-24">
            <label>คุณอยากให้สายนั้นเป็นใคร</label>
            <br />
            <br />
            <input
              type="text"
              required
              className=" bg-black rounded-md py-4 px-6 text-white"
              placeholder="พิมพ์ชื่อคนนั้น.."
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br /> <br />
            <button type="submit">{`>> ถัดไป`}</button>
          </div>
        </form>
        <br />
      </center>
    </div>
  );
});

export default S12;
