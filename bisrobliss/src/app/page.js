import style from './page.module.scss';
import Image from 'next/image';
import img1app from '../../public/assets/HomePage/tea.svg'
import img2app from '../../public/assets/HomePage/icon2.svg'
import img3app from '../../public/assets/HomePage/icon3.svg'
import img4app from '../../public/assets/HomePage/icon4.svg'

import img5app from '../../public/assets/HomePage/kebab.svg'
import img6app from '../../public/assets/HomePage/birthday.svg'
import img7app from '../../public/assets/HomePage/happy.svg'
import img8app from '../../public/assets/HomePage/group.svg'



export default function Homepage() {
  const array1 = [
    { img1: img1app, title: 'Breakfast', description: 'In the new era of technology we look in the future with certainty and pride for our life.', button: 'Explore Menu' },
    { img1: img2app, title: 'Main Dishes', description: 'In the new era of technology we look in the future with certainty and pride for our life.', button: 'Explore Menu' },
    { img1: img3app, title: 'Drinks', description: 'In the new era of technology we look in the future with certainty and pride for our life.', button: 'Explore Menu' },
    { img1: img4app, title: 'Desserts', description: 'In the new era of technology we look in the future with certainty and pride for our life.', button: 'Explore Menu' }
  ]

  const array2 = [
    { img2: img5app, event: 'Caterings', description: 'In the new era of technology we look in the future with certainty for life.' },
    { img2: img6app, event: 'Birthdays', description: 'In the new era of technology we look in the future with certainty for life.' },
    { img2: img7app, event: 'Weddings', description: 'In the new era of technology we look in the future with certainty for life.' },
    { img2: img8app, event: 'Events', description: 'In the new era of technology we look in the future with certainty for life.' }
  ]

  return (

    <div className={style.colormain}>
      <main className={style.main}>

        <section className={style.title}>
          <div className={style.text}>
            <h1>Best food for
              your taste
            </h1>
            <p>Discover delectable cuisine and unforgettable moments
              in our welcoming, culinary haven.
            </p>
            <div className={style.btns}>
              <button className={style.btnbron}>Book A Table</button>
              <button className={style.btnmenu}>Explore Menu</button>
            </div>
          </div>
        </section>

        <div className={style.colorblockmenu}>
          <section className={style.blockmenu}>

            <h1>Browse Our Menu</h1>

            <div className={style.foodselection}>
              {array1.map((elem) =>
                <div className={style.itemMain}>
                  <div><Image src={elem.img1} /></div>
                  <h2>{elem.title}</h2>
                  <p>{elem.description}</p>
                  <div className={style.btnblock}>Explore Menu</div>
                </div>
              )}
            </div>
          </section>
        </div>

        <section className={style.services}>

          <h1>We also offer unique services for your events</h1>

          <div className={style.events}>
            {array2.map((elem) =>
              <div className={style.itemEvents}>
                <div><Image src={elem.img2} /></div>
                <h2>{elem.event}</h2>
                <p>{elem.description}</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
