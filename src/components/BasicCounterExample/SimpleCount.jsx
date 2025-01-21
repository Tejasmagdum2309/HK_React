import React from "react";
import { useCountContext } from "../../context/CountContext.jsx";
import { useRecoilState, useRecoilValue } from "recoil";
import { countState } from "../../store/atoms/count.jsx";
import CompBtn from "./CompBtn.jsx";
import Countval from "./Countval.jsx";
import EvenCounterSayit from "./EvenCounterSayit.jsx";

const SimpleCount = () => {
  // const {count, setCount} = useCountContext();

  return (
    <>
      <Countval />
      <CompBtn />
      <EvenCounterSayit/>
    </>
  );
};

export default SimpleCount;
