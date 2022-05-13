import React, { useEffect } from "react";

import Welcome from "../components/welcome";


function index() {
  // useEffect(() => {
  //   const a = async () => {
  //     const citiesCol = (db, 'Record');
  //     const citySnapshot = await getDocs(citiesCol);
  //     const cityList = citySnapshot.docs.map(doc => doc.data());
  //     console.log(cityList)
  //   }
  //   a();
  // }, []);
  return (
    <div>
      <Welcome />
    </div>
  );
}

export default index;
