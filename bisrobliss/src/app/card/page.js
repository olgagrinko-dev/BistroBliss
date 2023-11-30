'use client'

import img1 from '../menu/assets/img1.png';
import img2 from '../menu/assets/img2.png';
import img3 from '../menu/assets/img3.png';
import img4 from '../menu/assets/img4.png';
import img5 from '../menu/assets/img5.png';
import img6 from '../menu/assets/img6.png';
import img7 from '../menu/assets/img7.png';
import img8 from '../menu/assets/img8.png';

import style from '../card/card.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
const array = './storage/storage.json';

export default function Card() {

    const [list, setlist] = useState({});  

    async function filterShowCard() {
        const result = array.filter((el) => el.id == id);
        setlist(result);
    }

    useEffect(() => {
        filterShowCard()
    }, []);

    return (
        <div className={style.colorCard}>
            <div className={style.mainCards}>
                <div className={style.imgCard}>
                    <Image className={style.img} src={list.img}></Image>
                </div>
                <div className={style.textCard}>
                    <h1>{list.title}</h1>
                    <h2 className={style.description}>{list.description}</h2>
                    <p className={style.price}>{list.price}</p>
                </div>
            </div>
        </div>
    )
}