import axios from 'axios';

async function getIp() {
    const response = await axios.get('https://api.ipify.org/?format=json');
    return response.data.ip;
}

export default async function IP() {
    const result = await getIp();

    return (
        <div>
            <h1>My IP: {result}</h1>
        </div>
    )
}


// 'use client'

// import axios from 'axios';
// import { useEffect, useState } from 'react';

// export default function IP() {
//     const [data, setData] = useState('');

//     async function getIp() {
//         const response = await axios.get('https://api.ipify.org/?format=json');
//         console.log(response);
//         setData(response.data.ip);
//     }

//     useEffect(() => {
//         getIp()
//     }, [])

//     return (
//         <div>
//             <h1>My IP: {data}</h1>
//         </div>
//     )
// }