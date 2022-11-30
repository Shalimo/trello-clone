import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AddCardButton from '../../ui/CardButton/AddCardButton'
import { addTitle } from '../../../store/deskSlice'
import style from './Home.module.scss'
import TextareaAutosize from 'react-textarea-autosize'
import { useTitle } from '../../../hooks/useTitle'
import TitleButton from '../../ui/TitleButton/TitleButton'

const Home = () => {
	const arr = useSelector(state => state.desk)

	return (
		<div className={style.content}>
			{arr.map(item => (
				<div key={item.id} className={style.container}>
					<h1>{item.title}</h1>
					{item.cards.map(item => (
						<div key={item.id} className={style.description}>
							<p>{item.description}</p>
						</div>
					))}
					<AddCardButton listID={item.id} />
				</div>
			))}
			<TitleButton />
		</div>
	)
}

export default Home
