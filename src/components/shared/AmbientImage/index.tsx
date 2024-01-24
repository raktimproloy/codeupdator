'use client'
import React, { useEffect } from 'react'
import Styles from "./style.module.css"

function Index() {
    useEffect(() => {
        const img:any = document.getElementById("js-video");
        const canvas:any = document.getElementById("js-canvas");
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
          cleanup(); // Cleanup on component unmount
        };
      }, []);
  return (
    <section className={`${Styles.wrapper}`}>
        <img src="/img.jpg" className={`${Styles.video}`} alt="" id="js-video" />
        <canvas width="10" height="6" className={`${Styles.canvas}`} aria-hidden="true" id="js-canvas"></canvas>
    </section>
  )
}

export default Index