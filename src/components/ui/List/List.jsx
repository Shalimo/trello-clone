import React from 'react'
import style from './List.module.scss'
import CardList from '../CardList/CardList'
import AddCardButton from '../CardButton/AddCardButton'
import { Droppable } from 'react-beautiful-dnd'

const List = ({ list }) => {
	return (
		<Droppable droppableId={String(list.id)}>
			{provided => (
				<div
					{...provided.droppableProps}
					ref={provided.innerRef}
					className={style.container}
				>
					<h1>{list.title}</h1>
					{list.cards.map((card, index) => (
						<CardList key={card.id} card={card} index={index} id={card.id} />
					))}
					<AddCardButton listID={list.id} />
					{provided.placeholder}
				</div>
			)}
		</Droppable>
	)
}

export default List
