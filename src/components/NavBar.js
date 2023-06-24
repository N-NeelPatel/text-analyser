import React from "react";
import { Icon } from "@iconify/react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <header className="header h-20 bg-[#f1f7ff] flex justify-between items-center p-8 z-10">
        <div className="text-2xl font-semibold">Text Analyser</div>
        <div className="flex pr-8">
          <a
            className="mr-4"
            href="https://github.com/N-NeelPatel"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="mdi:github" style={{ "font-size": "24px" }} />
          </a>
          <a
            className="mr-4"
            href="https://twitter.com/NTPatel_07"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="mdi:twitter" style={{ "font-size": "24px" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/neel-patel-900a47154/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="mdi:linkedin" style={{ "font-size": "24px" }} />
          </a>
        </div>
      </header>
    </>
  );
}
