'use client'

import Link from "next/link";

export default function Home() {

  const random = getRandomInt(5);
  if (random === 1) throw new Error("Random Error");

  return (
    <main>
        <Link href="/profile">음하하하하하</Link>
        <Link href="/products">음하하하하하</Link>
        <Link href="/blog">음하하하하하</Link>
    </main>
  );
}

function getRandomInt(count) {
  return Math.floor(Math.random() * count);
}