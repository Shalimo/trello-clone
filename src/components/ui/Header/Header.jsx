import React from 'react'
import style from './Header.module.scss'
import me from '../../../assets/me.jpg'

const Header = () => {
	return (
		<div className={style.container}>
			<h1>Clone Trello</h1>
			<input placeholder='Search' />
			<img src={me} />
		</div>
	)
}

export default Header
