import React from "react";

export default function Card(props) {
  const { text, number } = props;
  return (
    <>
      <div className="inline-block flex flex-col items-center w-20 h-20">
        <div className="text-[#9e9e9e] items-center mt-2">{text}</div>
        <div className="items-center font-bold pt-2">{number}</div>
      </div>
    </>
  );
}
