import React from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { useTitle } from '../../../hooks/useTitle'
import style from './TitleButton.module.scss'
import { useDispatch } from 'react-redux'
import { addTitle } from '../../../store/deskSlice'

const TitleButton = () => {
	const { isFormTitleOpen, toggleForm, text, handleInputChange } = useTitle()
	const dispatch = useDispatch()
	return (
		<div className={style.container}>
			{isFormTitleOpen ? (
				<TextareaAutosize
					className={style.titleArea}
					value={text}
					onChange={e => {
						handleInputChange(e.target.value)
					}}
					autoFocus
				/>
			) : (
				<h2
					className={style.titleButton}
					onClick={() => {
						toggleForm()
					}}
				>
					Add new title
				</h2>
			)}
			{isFormTitleOpen ? (
				<div className={style.secondButtonContainer}>
					<button
						onClick={() => {
							handleInputChange('')
							dispatch(addTitle(text))
						}}
						className={style.secondTitleButton}
					>
						Add card
					</button>
					<p
						onClick={() => {
							toggleForm()
						}}
					>
						×
					</p>
				</div>
			) : null}
		</div>
	)
}

export default TitleButton
