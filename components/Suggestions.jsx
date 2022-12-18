import React from 'react'
const profiles = [
    {
        name: 'Elon Musk',
        src:'https://links.papareact.com/4zn',
        profile:'https://links.papareact.com/kxk',
        desc:'The fucking Elon Musk',
        id: 'profile1' 

    },
    {
        name: 'Jeff Bezos',
        src:'https://links.papareact.com/k2j',
        profile:'https://links.papareact.com/f0o',
        desc: 'Amazon is God',
        id: 'profile2' 

    },
    {
        name: 'Mark Zuckerberg',
        src:'https://links.papareact.com/xql',
        profile:'https://links.papareact.com/snf',
        desc:'Social Media internet trafic is mine',
        id: 'profile3' 
    },
    {
        name: 'Bill Gates',
        src:'https://links.papareact.com/4u4',
        profile:'https://links.papareact.com/zvy',
        desc:'Old School Champion',
        id: 'profile4' 

    },
    {
        name: 'Elon Musk 2',
        src:'https://links.papareact.com/4zn',
        profile:'https://links.papareact.com/kxk',
        desc:'The fucking Elon Musk x2',
        id: 'profile5'  
    },
]
function Suggestions() {
  return (
    <div className='mt-4 ml-10' >

        <div className="flex justify-between text-sm mb-5">
            <h3 className='text-sm font-bold text-gray-400' >Suggestions for you</h3>
            <button className='text-gray-400 font-semibold ' >See All</button>
        </div>

        {profiles.map((profile) => (
            <div className="flex items-center justify-between mt-3" key={profile.id} >
                <img src={profile.profile} alt="" className="w-10 h-10 rounded-full border p-[2px] " />
                <div className="flex-1 ml-4">
                    <h2 className='font-semibold text-sm'> {profile.name} </h2>
                    <h3 className='text-xs text-gray-400'> {profile.desc} </h3>
                </div>

                <button className="text-blue-400 text-sm font-bold">Follow</button>

            </div>
        ))}


    </div>
  )
}

export default Suggestions