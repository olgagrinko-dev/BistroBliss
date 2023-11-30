import style from './page.module.scss';

export default function Homepage() {
  return (

    <div className={style.colormain}>
      <main className={style.main}>

        <section className={style.title}>
          <div className={style.text}>
            <h1>Best food for
              your taste</h1>
            <p>Discover delectable cuisine and unforgettable moments
              in our welcoming, culinary haven.</p>
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

              <div className={style.breakfast}>
                <div className={style.imgbreakfast}></div>
                <h2>Breakfast</h2>
                <p>
                  In the new era of technology we
                  look in the future with certainty
                  and pride for our life.
                </p>
                <div className={style.btnblock}>Explore Menu</div>
              </div>

              <div className={style.maindishes}>
                <div className={style.imgmaindishes}></div>
                <h2>Main Dishes</h2>
                <p>
                  In the new era of technology we
                  look in the future with certainty
                  and pride for our life.
                </p>
                <div className={style.btnblock}>Explore Menu</div>
              </div>

              <div className={style.drinks}>
                <div className={style.imgdrinks}></div>
                <h2>Drinks</h2>
                <p>
                  In the new era of technology we
                  look in the future with certainty
                  and pride for our life.
                </p>
                <div className={style.btnblock}>Explore Menu</div>
              </div>

              <div className={style.desserts}>
                <div className={style.imgdesserts}></div>
                <h2>Desserts</h2>
                <p>
                  In the new era of technology we
                  look in the future with certainty
                  and pride for our life.
                </p>
                <div className={style.btnblock}>Explore Menu</div>
              </div>
            </div>
          </section>
        </div>

        <section className={style.services}>
          <h1>We also offer unique services for your events</h1>

          <div className={style.events}>
            <div className={style.caterings}>
              <div className={style.imgcaterings}></div>
              <div className={style.text}>
                <h2>Caterings</h2>
                <p>
                  In the new era of technology we look
                  in the future with certainty for life.
                </p>
              </div>
            </div>

            <div className={style.birthdays}>
              <div className={style.imgbirthdays}></div>
              <div className={style.text}>
                <h2>Birthdays</h2>
                <p>
                  In the new era of technology we look
                  in the future with certainty for life.
                </p>
              </div>
            </div>

            <div className={style.weddings}>
              <div className={style.imgweddings}></div>
              <div className={style.text}>
                <h2>Weddings</h2>
                <p>
                  In the new era of technology we look
                  in the future with certainty for life.
                </p>
              </div>
            </div>

            <div className={style.event}>
              <div className={style.imgevents}></div>
              <div className={style.text}>
                <h2>Events</h2>
                <p>
                  In the new era of technology we look
                  in the future with certainty for life.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
