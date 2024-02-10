'use client'
import React, { useEffect, useState } from 'react';
import Styles from "./style.module.css";
import Image from 'next/image';

interface IndexProps{
  imageSrc: string,
  count: number
}

function Index({imageSrc, count}:IndexProps) {
  const [theme, setTheme] = useState("light")
  
  useEffect(() => {
      var htmlElement = document.documentElement;
      const localTheme = localStorage.getItem("_theme") || "light"
      setTheme(localTheme)
      htmlElement.setAttribute("data-theme", localTheme);
  }, [])

  useEffect(() => {
      const img:any = document.getElementById("js-video");
      const canvas:any = document.getElementById(`js-canvas${count}`);
      const ctx = canvas.getContext("2d");
  
      ctx.filter = "blur(1px)";
  
      const draw = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
  
      const init = () => {
        draw(); // Initial draw for still image
      };
  
      const cleanup = () => {
        img.removeEventListener("load", draw);
      };
  
      window.addEventListener("load", init);
      window.addEventListener("unload", cleanup);
  
      return () => {
        init(); // Cleanup on component unmount
      };
    }, []);

  return (
    <section className={`${Styles.wrapper} ${theme === "light" ? "hidden" : "block"}`}>
      <Image src={`${imageSrc}`} className={`${Styles.video}`} id="js-video" width={500} height={500}
      alt='card' />
      <canvas width="10" height="8" className={`${Styles.canvas}`} aria-hidden="true" id={`js-canvas${count}`}></canvas>
    </section>
  );
}

export default Index;
