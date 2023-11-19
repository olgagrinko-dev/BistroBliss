import style from './page.module.scss';

export default function Homepage() {
  return (
    <main className={style.main}>
      
      <section className={style.title}>
        <div className={style.text}>
          <h1>Best food for
            your taste</h1>
          <p>Discover delectable cuisine and unforgettable moments
            in our welcoming, culinary haven.</p>
          <div className={style.btns}>
            <div className={style.btnbron}>Book A Table</div>
            <div className={style.btnmenu}>Explore Menu</div>
          </div>
        </div>
      </section>

      <section className={style.blockmenu}>
        <h1>Browse Our Menu</h1>
        <div></div>
      </section>

      <section className={style.services}>
        <h1>We also offer unique services for your events</h1>
        <div></div>
      </section>
    </main>
  )
}
