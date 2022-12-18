import { useEffect, useState } from 'react';
import Story from './Story'

const profiles = [
    {
        name: 'Elon Musk',
        src:'https://links.papareact.com/4zn',
        profile:'https://links.papareact.com/kxk',
        desc:'The fucking Elon Musk',
        id:1 

    },
    {
        name: 'Jeff Bezos',
        src:'https://links.papareact.com/k2j',
        profile:'https://links.papareact.com/f0o',
        desc: 'Amazon is God',
        id:2
    },
    {
        name: 'Mark Zuckerberg',
        src:'https://links.papareact.com/xql',
        profile:'https://links.papareact.com/snf',
        desc:'Social Media internet trafic is mine',
        id:3
    },
    {
        name: 'Bill Gates',
        src:'https://links.papareact.com/4u4',
        profile:'https://links.papareact.com/zvy',
        desc:'Old School Champion',
        id:4

    },
    {
        name: 'Elon Musk 2',
        src:'https://links.papareact.com/4zn',
        profile:'https://links.papareact.com/kxk',
        desc:'The fucking Elon Musk x2' ,
        id:5
    },
    {
        name: 'Elon Musk',
        src:'https://links.papareact.com/4zn',
        profile:'https://links.papareact.com/kxk',
        desc:'The fucking Elon Musk' ,
        id:6

    },
    {
        name: 'Jeff Bezos',
        src:'https://links.papareact.com/k2j',
        profile:'https://links.papareact.com/f0o',
        desc: 'Amazon is God',
        id:7
    },
    {
        name: 'Mark Zuckerberg',
        src:'https://links.papareact.com/xql',
        profile:'https://links.papareact.com/snf',
        desc:'Social Media internet trafic is mine',
        id:8
    },
    {
        name: 'Bill Gates',
        src:'https://links.papareact.com/4u4',
        profile:'https://links.papareact.com/zvy',
        desc:'Old School Champion',
        id:9

    },
    {
        name: 'Elon Musk 2',
        src:'https://links.papareact.com/4zn',
        profile:'https://links.papareact.com/kxk',
        desc:'The fucking Elon Musk x2' ,
        id:10
    },
    {
        name: 'Bill Gates',
        src:'https://links.papareact.com/4u4',
        profile:'https://links.papareact.com/zvy',
        desc:'Old School Champion',
        id:11

    },
    {
        name: 'Elon Musk 2',
        src:'https://links.papareact.com/4zn',
        profile:'https://links.papareact.com/kxk',
        desc:'The fucking Elon Musk x2' ,
        id:12
    },
    {
        name: 'Elon Musk',
        src:'https://links.papareact.com/4zn',
        profile:'https://links.papareact.com/kxk',
        desc:'The fucking Elon Musk' ,
        id:13

    },
    {
        name: 'Jeff Bezos',
        src:'https://links.papareact.com/k2j',
        profile:'https://links.papareact.com/f0o',
        desc: 'Amazon is God',
        id:14
    },
    {
        name: 'Mark Zuckerberg',
        src:'https://links.papareact.com/xql',
        profile:'https://links.papareact.com/snf',
        desc:'Social Media internet trafic is mine',
        id:15
    },
    {
        name: 'Bill Gates',
        src:'https://links.papareact.com/4u4',
        profile:'https://links.papareact.com/zvy',
        desc:'Old School Champion',
        id:16    },
    {
        name: 'Elon Musk 2',
        src:'https://links.papareact.com/4zn',
        profile:'https://links.papareact.com/kxk',
        desc:'The fucking Elon Musk x2' ,
        id:17
    },
]
function Stories() {
    

  return (
    <div className='flex w-full space-x-2 p-6 bg-white mt-0 border-gray-200 border rounded-sm overflow-x-auto scrollbar scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-50 scrollbar-thumb-rounded
    '>
        {profiles.map((profile) => (
            <Story key={profile.id} img={profile.src} username={profile.name.split(' ').join('').toLocaleLowerCase()} />
        ))}
    </div>
  )
}

export default Stories