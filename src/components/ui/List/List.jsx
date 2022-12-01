import React from 'react'
import style from './List.module.scss'
import CardList from '../CardList/CardList'
import AddCardButton from '../CardButton/AddCardButton'
import { Droppable } from 'react-beautiful-dnd'
import { deleteTitle } from '../../../store/deskSlice'
import { useDispatch } from 'react-redux'

const List = ({ list, cards, id }) => {
	const dispatch = useDispatch()

	return (
		<Droppable droppableId={String(id)}>
			{provided => (
				<div
					{...provided.droppableProps}
					ref={provided.innerRef}
					className={style.container}
				>
					<div className={style.titleContainer}>
						<h1>{list.title}</h1>
						<button
							className={style.deleteTitleButton}
							onClick={() => {
								dispatch(deleteTitle({ id }))
							}}
						>
							×
						</button>
					</div>
					{cards.map((card, index) => (
						<CardList key={card.id} card={card} index={index} id={card.id} />
					))}
					<AddCardButton listID={id} />
					{provided.placeholder}
				</div>
			)}
		</Droppable>
	)
}

export default List
