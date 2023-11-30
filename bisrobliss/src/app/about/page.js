import style from '../about/about.module.scss';

export default function About() {
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
                                <div className={style.item1}>
                                    <h2>3</h2>
                                    <p>Locations</p>
                                </div>
                                <div className={style.item2}>
                                    <h2>1995</h2>
                                    <p>Founded</p>
                                </div>
                                <div className={style.item3}>
                                    <h2>65+</h2>
                                    <p>Staff Members</p>
                                </div>
                                <div className={style.item4}>
                                    <h2>100%</h2>
                                    <p>Satisfied Customers</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.imgStatistic}></div>
                    </div>
                </div>

            </section>
        </div>
    )
}