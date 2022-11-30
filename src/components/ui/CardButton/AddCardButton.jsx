import React from 'react'
import { useForm } from '../../../hooks/useForm'
import TextareaAutosize from 'react-textarea-autosize'
import { addCard } from '../../../store/deskSlice'
import { useDispatch } from 'react-redux'
import style from './AddCardButton.module.scss'

const AddCardButton = ({ listID }) => {
	const { isFormOpen, toggleForm, text, handleInputChange } = useForm()
	const dispatch = useDispatch()

	return (
		<>
			<div
				className={style.cardButton}
				onClick={() => {
					toggleForm()
				}}
			>
				{isFormOpen ? (
					<TextareaAutosize
						className={style.textArea}
						value={text}
						onChange={e => {
							handleInputChange(e.target.value)
						}}
						autoFocus
						placeholder='Enter a title for this card...'
					/>
				) : (
					<p>+ Add card</p>
				)}
			</div>
			{isFormOpen ? (
				<div className={style.secondButtonContainer}>
					<button
						onClick={
							text.length === 0
								? null
								: () => {
										handleInputChange('')
										dispatch(addCard({ text, listID }))
								  }
						}
						className={style.secondCardButton}
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
		</>
	)
}

export default AddCardButton
