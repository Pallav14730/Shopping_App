import { useState } from "react"
import Image from "next/image"
import image8 from '../Images/image8.jpeg'

function Item1() {

    const [count,setCount]=useState(0)
    function add() {
        setCount(count+1)
    }
    function sub(){
        if (count===0)
        {
            return;
        }
        setCount(count-1)
    }
    return (
        <>
            <div className='w-1/6 inline-block  px-4 py-4 my-5 mx-2 rounded-xl shadow-xl hover:shadow-green-300'>
                <div className=''>
                    {/* image */}
                    <Image src={image8} alt="vegetables" className='w-1/2 h-1/2' />
                </div>
                <div>
                    {/* description */}
                    <h1 className='text-left'>Fortune Soya Health Refined Soyabean Oil</h1>
                    <p className='text-gray-400'>1l </p>

                </div>
                <div>
                    {/* price */}
                    <h1>₹156</h1>
                    <div className='flex text-right text-3xl mx-20 cursor-pointer'>

                        <button onClick={add} className='mx-5'>+</button>
                        <h1 className=''>{count}</h1>
                        <button className='mx-8' onClick={sub} >-</button>
                    </div>


                </div>
            </div>

            


        </>
    )
}

export default Item1