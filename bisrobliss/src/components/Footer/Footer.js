import style from '../Footer/footer.module.scss';

export default function Footer() {


    return (
        <div className={style.footer}>
            <section className={style.info}>
                <div className={style.bistrobliss}>
                    <div className={style.logo}>
                        <div className={style.imglogo}></div>
                        <h1>Bistro Bliss</h1>
                    </div>
                    <p>
                        In the new era of technology we look a
                        in the future with certainty and pride to
                        for our company and.
                    </p>
                </div>

                <div className={style.navig}>
                    <div className={style.pages}>
                        <h2>Pages</h2>
                        <div className={style.colonpape}>
                        <div className={style.elempape}>
                            {['Home', 'About', 'Menu', 'Pricing', 'Blog', 'Contact', 'Delivery'].map((el, index) => <p key={index}>{el}</p>)}
                        </div>

                        </div>
                    </div>
                    <div className={style.utilitypages}>
                        <h2>Utility Pages</h2>
                        <div className={style.elemutilitypages}>
                            {['Start Here', 'Styleguide', 'Password Protected', '404 Not Found', 'Licenses', 'Changelog', 'View More'].map((el, index) => <p key={index}>{el}</p>)}
                        </div>
                    </div>
                </div>

                <div className={style.link}>
                    <h2>Follow Us On Instagram</h2>
                    <div className={style.imges}>
                        <div className={style.block}>
                            <div className={style.img1}></div>
                            <div className={style.img3}></div>
                        </div>
                        <div className={style.block}>
                            <div className={style.img2}></div>
                            <div className={style.img4}></div>
                        </div>
                    </div>
                </div>
            </section>
            <div className={style.line}></div>
            <h3>Copyright © 2023 Hashtag Developer. All Rights Reserved</h3>
        </div>
    )
}