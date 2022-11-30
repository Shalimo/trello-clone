import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AddCardButton from '../../ui/CardButton/AddCardButton'
import { addTitle } from '../../../store/deskSlice'
import style from './Home.module.scss'
import TextareaAutosize from 'react-textarea-autosize'
import { useTitle } from '../../../hooks/useTitle'
import TitleButton from '../../ui/TitleButton/TitleButton'
import CardList from '../../ui/CardList/CardList'
import List from '../../ui/List/List'
import Header from '../../ui/Header/Header'
import { DragDropContext } from 'react-beautiful-dnd'

const Home = () => {
	const lists = useSelector(state => state.desk)
	const onDragEnd = () => {}

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Header />
			<div className={style.content}>
				{lists.map(list => (
					<List key={list.id} list={list} />
				))}
				<TitleButton />
			</div>
		</DragDropContext>
	)
}

export default Home
