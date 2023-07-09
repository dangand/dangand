"use client";

// import "@/styles/global.css";
import { useState } from "react";

import { Visible } from "@/components/layout";
import { Text } from "@/components/typography";

export default function Home() {
  const [hiddenText, setHiddenText] = useState(false);
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Visible visible={hiddenText}>
        <p>Hellow</p>
      </Visible>

      <Text child="halo" size="heading" />

      <button
        onClick={() => {
          setHiddenText(!hiddenText);
        }}
      >
        Klik
      </button>
    </main>
  );
}
