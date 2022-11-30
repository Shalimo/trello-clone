import React from 'react'
import { useForm } from '../../../hooks/useForm'
import TextareaAutosize from 'react-textarea-autosize';
import style from './AddCardButton.module.scss'

const AddCardButton = () => {
  const {isFormOpen, toggleForm, text, handleInputChange} = useForm()

  return (
    <>
    <div className={style.cardButton} onClick={() => {toggleForm()}}>
        {isFormOpen ? (<TextareaAutosize className={style.textArea} value={text} onChange={(e) => {handleInputChange(e.target.value)}} autoFocus/>) : (<p>+ Add card</p>)}
    </div>
    {isFormOpen ? 
    (
    <div className={style.secondButtonContainer}>
      <button className={style.secondCardButton}>
        Add card
      </button>
      <p onClick={() => {toggleForm()}}>×</p>
    </div>
    )
    :
    null
    }
    </>
  )
}

export default AddCardButton