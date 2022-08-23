import React, { useState } from "react";

interface Props {
  question: string;
  answer: string;
}
export default function Faqcards({ question, answer }: Props) {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex flex-col">
      <div
        onClick={() => {
          setVisible(!visible);
        }}
        className="flex cursor-pointer  transition ease-in-out delay-150 items-center gap-5 font-bold text-xl border-b-[1px] py-[20px]"
      >
        {" "}
        <img
          className="h-10 "
          src={
            visible
              ? "./svgs/circle-minus-solid.svg"
              : "./svgs/circle-plus-solid.svg"
          }
        />{" "}
        <p>{question}</p>
      </div>

      <div className="pl-1">
        {visible ? (
          <p className="text-lg transition ease-in-out delay-150 pl-14">
            {answer}
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
