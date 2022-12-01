import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import style from './Home.module.scss'
import TitleButton from '../../ui/TitleButton/TitleButton'
import List from '../../ui/List/List'
import Header from '../../ui/Header/Header'
import { DragDropContext } from 'react-beautiful-dnd'
import { sort } from '../../../store/deskSlice'

const Home = () => {
	const lists = useSelector(state => state.desk)
	const dispatch = useDispatch()
	const onDragEnd = result => {
		const { destination, source, draggableId } = result

		if (!destination) {
			return
		}

		dispatch(
			sort(
				source.droppableId,
				destination.droppableId,
				source.index,
				destination.index,
				draggableId
			)
		)
	}

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Header />
			<div className={style.content}>
				{lists.map(list => (
					<List key={list.id} cards={list.cards} list={list} id={list.id} />
				))}
				<TitleButton />
			</div>
		</DragDropContext>
	)
}

export default Home
