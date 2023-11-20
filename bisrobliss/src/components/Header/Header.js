import Link from 'next/link';
import style from '../Header/header.module.scss';

export default function Header() {
    return (
        <div className={style.header}>
            <div className={style.info}>
                <div className={style.phone}>
                    <div className={style.imgphone}></div>
                    <p>(414) 857 - 0107</p>
                </div>

                <div className={style.mail}>
                    <div className={style.imgmail}></div>
                    <p>yummy@bistrobliss</p>
                </div>

                <div className={style.images}>
                    <div className={style.imgtwitter}></div>
                    <div className={style.imgfacebook}></div>
                    <div className={style.imgpinstagram}></div>
                    <div className={style.imgcompan}></div>
                </div>

            </div>
            <div className={style.navig}>
                <div className={style.logo}></div>
                <h1>Bistro Bliss</h1>
                <div className={style.elemnavig}>
                    {/* {['home', 'about', 'menu'].map((el, index) => <p key={index}><Link href={el}>{el}</Link></p>)} */}
                    <p ><Link href='/'>home</Link></p>
                    <p><Link href='/about'>about</Link></p>
                    <p><Link href='/'>menu</Link></p>

                </div>

                <div className={style.btnhed}>Book A Table</div>
            </div>
        </div>
    )
}