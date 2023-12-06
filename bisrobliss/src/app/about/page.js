import style from '../about/about.module.scss';

export default function About() {
    const array = [
        { data: '3', title: 'Locations' }, { data: '1995', title: 'Founded' },
        { data: '65+', title: 'Staff Members' }, { data: '100%', title: 'Satisfied Customers' }
    ];

    return (
        <div className={style.colorAbout}>

            <section className={style.mainAbout}>
                <div className={style.wrap}>
                    <div className={style.imgAbout}></div>
                    <div className={style.aboutText}>
                        <h1>
                            We provide healthy
                            food for your family.
                        </h1>
                        <h2>Our story began with a vision to create a unique dining
                            experience that merges fine dining, exceptional service, and a
                            vibrant ambiance. Rooted in city's rich culinary culture, we aim to
                            honor our local roots while infusing a global palate.
                        </h2>
                        <p>
                            At place, we believe that dining is not just about food, but also about the
                            overall experience. Our staff, renowned for their warmth and dedication,
                            strives to make every visit an unforgettable event.
                        </p>
                    </div>
                </div>

                <div className={style.colorStatistic}>
                    <div className={style.statistic}>
                        <div className={style.statisticText}>

                            <h1>
                                A little information
                                for our valuable guest
                            </h1>
                            <p>
                                At place, we believe that dining is not just about food, but also about the
                                overall experience. Our staff, renowned for their warmth and dedication,
                                strives to make every visit an unforgettable event.
                            </p>

                            <div className={style.statisticBlock}>
                                {array.map((elem) => <div className={style.item}>
                                    <h2>{elem.data}</h2>
                                    <p>{elem.title}</p>
                                </div>)}
                            </div>
                        </div>
                        <div className={style.imgStatistic}></div>
                    </div>
                </div>
            </section>
        </div>
    )
}