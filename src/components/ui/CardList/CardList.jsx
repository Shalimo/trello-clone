import React from 'react'
import style from './CardList.module.scss'
import { Draggable } from 'react-beautiful-dnd'
import { deleteCard } from '../../../store/deskSlice'
import { useDispatch } from 'react-redux'

const CardList = ({ card, id, index }) => {
	const dispatch = useDispatch()

	return (
		<Draggable draggableId={String(id)} index={index}>
			{provided => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					<div className={style.description}>
						<p>{card.description}</p>
						<button
							onClick={() => {
								dispatch(deleteCard({ id }))
							}}
						>
							×
						</button>
					</div>
				</div>
			)}
		</Draggable>
	)
}

export default CardList
