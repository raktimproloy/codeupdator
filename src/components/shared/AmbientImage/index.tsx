'use client'
import React, { useEffect, useState } from 'react';
import Styles from "./style.module.css";

function Index() {
  const [theme, setTheme] = useState("light")
  useEffect(() => {
      var htmlElement = document.documentElement;
      const localTheme = localStorage.getItem("_theme") || "light"
      setTheme(localTheme)
      htmlElement.setAttribute("data-theme", localTheme);
  }, [])

  useEffect(() => {
      const img:any = document.getElementById("js-video");
      const canvas:any = document.getElementById("js-canvas");
      const ctx = canvas.getContext("2d");
  
      ctx.filter = "blur(1px)";
  
      const draw = () => {
        console.log("draw")
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
  
      const init = () => {
        console.log("init")
        draw(); // Initial draw for still image
      };
  
      const cleanup = () => {
        console.log("cleanup")
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
      <img src="/car2.jpg" className={`${Styles.video}`} alt="" id="js-video" />
      <canvas width="10" height="8" className={`${Styles.canvas}`} aria-hidden="true" id="js-canvas"></canvas>
    </section>
  );
}

export default Index;
