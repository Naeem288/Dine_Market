'use client';
import React from "react";
import { Button } from "components/ui/button";

let CounterValue = 0;
const Increament=()=>{};

const counterView = () => {
  return (
    <div className="flex flex-col items-center p-5 ">
      <div className=" bg-gray-900 p-6 font-bold text-white text-lg rounded-2xl shadow shadow-black ">Counter App</div>
      <div className="py-6 flex gap-6">
        <Button className="rounded-lg">Increament</Button>
        <h3>Counter Value {CounterValue} </h3>
        <Button className="rounded-lg" onClick={Increament}>Decreament</Button>
      </div>
    </div>
  );
};

export default counterView;
