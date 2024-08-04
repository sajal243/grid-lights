import React from 'react'
import "../App.css"

const Cell = ({filled, isDisabled, onClick}) => {
  return (
    <button type='button' onClick = {onClick} disabled={isDisabled} className={filled ? "cell cell-selected": "cell"} />
  )
}

export default Cell