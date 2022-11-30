import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AddCardButton from '../../ui/CardButton/AddCardButton'
import style from './Home.module.scss'

const Home = () => {
  const arr = useSelector((state) => state.desk)
  const dispatch = useDispatch()

  return (
    <div className={style.content}>
      {arr.map((item) => (
        <div key={item.id} className={style.container}>
          <h1>{item.title}</h1>
          {item.cards.map((item) => (
            <div key={item.id} className={style.description}>
              <p>{item.description}</p>
            </div>
          ))}
          <AddCardButton/>
        </div> 
      ))}
    </div>
  )
}

export default Home