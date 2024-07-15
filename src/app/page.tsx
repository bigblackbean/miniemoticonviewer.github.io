"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [viewer, setViewer] = useState<boolean>(false);
  const openEmoticonViewer = () => {
    window.open("http://localhost:3000", "_blank", "noopener, noreferrer");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <button onClick={openEmoticonViewer} type="button">
          미니 이모티콘 뷰어
        </button>
        <div className="w-[200px] h-[400px] bg-[#b2c7d9]">
          <input type="file" name="" id="" />
        </div>
      </div>
    </main>
  );
}
