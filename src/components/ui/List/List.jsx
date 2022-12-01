import React from 'react'
import style from './List.module.scss'
import CardList from '../CardList/CardList'
import AddCardButton from '../CardButton/AddCardButton'
import { Droppable } from 'react-beautiful-dnd'

const List = ({ list, cards, id }) => {
	return (
		<Droppable droppableId={String(id)}>
			{provided => (
				<div
					{...provided.droppableProps}
					ref={provided.innerRef}
					className={style.container}
				>
					<h1>{list.title}</h1>
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
