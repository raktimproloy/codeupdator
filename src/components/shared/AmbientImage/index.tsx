'use client'
import React, { useEffect, useState } from 'react';
import Styles from "./style.module.css";
import Image from 'next/image';

interface IndexProps {
  imageSrc: string,
  count: number
}

function Index({ imageSrc, count }: IndexProps) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("_theme") || "light";
    setTheme(localTheme);
    document.documentElement.setAttribute("data-theme", localTheme);
  }, []);

  useEffect(() => {
    const img = document.getElementById(`js-video${count}`) as HTMLImageElement;
    const canvas = document.getElementById(`js-canvas${count}`) as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.filter = "blur(1px)";

      const draw = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };

      if (img.complete) {
        draw();
      } else {
        img.onload = draw;
      }
    }
  }, [count]);

  return (
    <section className={`${Styles.wrapper} ${theme === "light" ? "hidden" : "block"}`}>
      <Image src={imageSrc} className={Styles.video} id={`js-video${count}`} width={1000} height={1000} alt='card' />
      <canvas width="10" height="8" className={Styles.canvas} aria-hidden="true" id={`js-canvas${count}`}></canvas>
    </section>
  );
}

export default Index;
