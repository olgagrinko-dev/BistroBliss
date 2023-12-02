'use client'

import style from '../../menu/[id]/id.module.scss';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import array from '../../../storage/storage';

export default function Id() {
    const { id } = useParams();
    const [found, setFound] = useState({});

    useEffect(() => {
        const result = array.filter(el => el.id == id);
        setFound(result[0]);
        console.log(result);
    }, []);

    return (
        <div className={style.colorCard}>
            <div className={style.mainCards}>
                <div className={style.imgCard}>
                    <Image className={style.img} src={found.img}></Image>
                </div>
                <div className={style.textCard}>
                    <h1>{found?.title}</h1>
                    <h2>{found?.description}</h2>
                    <p>{found?.price}</p>
                </div>
            </div>
        </div>
    )
}