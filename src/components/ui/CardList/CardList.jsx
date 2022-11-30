import React from 'react'
import style from './CardList.module.scss'
import { Draggable } from 'react-beautiful-dnd'

const CardList = ({ card, id, index }) => {
	return (
		<Draggable draggableId={String(id)} index={index}>
			{provided => (
				<div>
					<div
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
					>
						<div className={style.description}>
							<p>{card.description}</p>
						</div>
					</div>
				</div>
			)}
		</Draggable>
	)
}

export default CardList
