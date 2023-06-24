import React, { useState } from "react";
import "./Main.css";
import Card from "../components/Card";

export default function Main() {
  let [inputText, setInputText] = useState("");
  let [wordsCount, setWordsCount] = useState(0);
  let [charactersCount, setCharactersCount] = useState(0);
  let [sentencesCount, setSentencesCount] = useState(0);
  let [paragraphsCount, setParagraphsCount] = useState(0);
  let [pronounsCount, setPronounsCount] = useState(0);

  const handleInputChange = (event) => {
    let currentInputString = event.target.value;
    console.log("currentInputString", currentInputString);
    setCharactersCount(currentInputString.length);
    setWordsCount(currentInputString.trim().split(/\s+/).length);
    setSentencesCount(
      currentInputString.split(/[.!?]+/).filter(Boolean).length
    );

    setParagraphsCount(
      currentInputString
        .split("\n\n")
        .filter((paragraph) => paragraph.trim().length > 0).length
    );

    setPronounsCount(
      (
        currentInputString.match(
          /\b(he|she|it|they|we|you|I|me|her|him|them|us)\b/gi
        ) || []
      ).length
    );
  };

  return (
    <>
      <div className="bg-[#f0f2f5] h-screen relative">
        <div className="center">
          <div className="flex justify-between pr-2">
            <Card text={"Words"} number={wordsCount} />
            <Card text={"Characters"} number={charactersCount} />
            <Card text={"Sentences"} number={sentencesCount} />
            <Card text={"Paragraphs"} number={paragraphsCount} />
            <Card text={"Pronouns"} number={pronounsCount} />
          </div>
        </div>
        <div className="input-center">
          <textarea
            className="h-full w-full p-4 outline-0 placeholder-[#e6e6e6] placeholder-bold"
            placeholder="Paste your text here..."
            onChange={handleInputChange}
          >
            {inputText}
          </textarea>
        </div>
      </div>
    </>
  );
}
