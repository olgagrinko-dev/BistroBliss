import Link from 'next/link';
import style from '../Header/header.module.scss';

export default function Header() {
    return (
        <div className={style.colorinfo}>
            <div className={style.header}>

                <div className={style.info}>
                    <div className={style.contact}>
                        <div className={style.phone}>
                            <div className={style.imgphone}></div>
                            <p>(414) 857 - 0107</p>
                        </div>

                        <div className={style.mail}>
                            <div className={style.imgmail}></div>
                            <p>yummy@bistrobliss</p>
                        </div>
                    </div>

                    <div className={style.images}>
                        <div className={style.imgtwitter}></div>
                        <div className={style.imgfacebook}></div>
                        <div className={style.imgpinstagram}></div>
                        <div className={style.imgcompan}></div>
                    </div>
                </div>
            </div>

            <div className={style.colornavig}>
                <div className={style.navig}>
                    <div className={style.logomain}>
                        <div className={style.logo}></div>
                        <h1>Bistro Bliss</h1>
                    </div>

                    <div className={style.elemnavig}>
                        <p ><Link href='/'>home</Link></p>
                        <p><Link href='/about'>about</Link></p>
                        <p><Link href='/menu'>menu</Link></p>
                    </div>

                    <div className={style.btnhed}>Book A Table</div>
                </div>
            </div>

        </div>
    )
}