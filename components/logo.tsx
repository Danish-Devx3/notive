import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href={"/"} className="flex items-center justify-center gap-2 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="30px"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path d="M15 1H1V3H15V1Z" fill="#c28023" />
        <path d="M1 5H3V15H1V5Z" fill="#e79b31" />
        <path d="M5 13H15V15H5V13Z" fill="#5c3909" />
        <path d="M15 9H5V11H15V9Z" fill="#895409" />
        <path d="M5 5H15V7H5V5Z" fill="#b67214" />
      </svg>
      <h3 className="text-2xl font-semibold text-primary">Notive</h3>
    </Link>
  );
}
