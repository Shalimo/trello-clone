import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import style from './Home.module.scss'

const Home = () => {
  const arr = useSelector((state) => state.desk)

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
          <div className={style.bottomSection}>
            <p>+</p>
            <p>Add card</p>
          </div>
        </div> 
      ))}
    </div>
  )
}

export default Home