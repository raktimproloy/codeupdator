import React from 'react'
import style from "./style.module.css"

export default function LoadingPopup({active}: any) {
  return (
    <div className={`card w-96 bg-neutral bg-base-100 shadow-xl rounded ${style.loadingContainer} ${active ? style.showLoading : ""}`}>
    <div className="flex justify-center items-center">
        <span className="loading loading-infinity loading-lg me-3"></span>
        <h4>Please wait...</h4>
    </div>
    </div>
  )
}
