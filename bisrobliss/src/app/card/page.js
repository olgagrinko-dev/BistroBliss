import Image from 'next/image';
import storage from '../../storage/storage';
import style from './card.module.scss';
import Link from 'next/link';

export default function Card() {
    return (
        <div className={style.wrapper}>
            {storage.map(elem => <Link href={'/card/${elem.id}'}>
                <div className={style.item} key={elem.id}>
                    <Image src={elem.img} alt={elem.img}></Image>
                    <h1>{elem.title}</h1>
                    <h2>{elem.description}</h2>
                    <p>{elem.price}</p>
                </div>
            </Link>)}
        </div>
    )
}