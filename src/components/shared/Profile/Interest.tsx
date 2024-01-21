import React from 'react'

function Interest() {
  return (
    <div className="flex space-x-1">
        <span className="indicator-item indicator-top indicator-start badge badge-success text-white rounded">Node js</span>
        <span className="indicator-item indicator-top indicator-center badge badge-secondary rounded">PHP</span>
        <span className="indicator-item indicator-top indicator-end badge badge-accent text-white rounded">Vue Js</span>
        <span className="indicator-item indicator-middle indicator-start badge badge-neutral rounded">Laravel</span>
        <span className="indicator-item indicator-middle indicator-center badge badge-warning rounded">HTML</span>
    </div>
  )
}

export default Interest