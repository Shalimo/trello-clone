import React from 'react'
import style from './Home.module.scss'

const Home = () => {
  return (
    <div className={style.container}>
      <h1>Title</h1>
      <div className={style.description}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ea magnam est quidem illum, itaque neque nemo corporis iste cum obcaecati laudantium, laborum ducimus iusto, architecto omnis quia id minus?</p>
      </div>
      <div className={style.bottomSection}>
        <p>+</p>
        <p>Add card</p>
      </div>
    </div>
  )
}

export default Home