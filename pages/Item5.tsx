import { useState } from "react"
import Image from "next/image"
import image7 from '../Images/image7.jpeg'

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
            <div className='w-1/6 inline-block  px-4 py-4 my-5 mx-12 rounded-xl shadow-xl hover:shadow-green-300'>
                <div className=''>
                    {/* image */}
                    <Image src={image7} alt="vegetables" className='w-3/5 h-1/2' />
                </div>
                <div>
                    {/* description */}
                    <h1 className='text-left'>Cadbury Bournvita Chocolate Health Drink (500 g)</h1>
                    <p className='text-gray-400'>500kg </p>

                </div>
                <div>
                    {/* price */}
                    <h1>₹213</h1>
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