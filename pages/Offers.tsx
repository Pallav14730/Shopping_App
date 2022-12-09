import Image from "next/image"
import Link from "next/link"
import offer1 from "../Images/offer1.jpeg";
import offer2 from "../Images/offer2.jpeg";
import offer3 from "../Images/offer3.jpeg";
import offer4 from "../Images/offer4.jpeg";
function Offers() {
  return (
    <>
    <div>
        <h1 className="text-center text-gray-500 text-2xl">Top Offers</h1>
        <hr className="mx-7 text-gray-500" />
       

        <div className="mx-20 py-9">
                <Link href="/discount" className="inline-block">
                    <Image src={offer1} alt="logo" width={300} height={200} className=" mx-2 rounded-xl shadow-xl hover:shadow-red-400 " />
                </Link>

                <Link href="/discount" className="inline-block">
                    <Image src={offer2} alt="logo" width={300} height={200} className=" mx-2 rounded-xl shadow-xl hover:shadow-red-400 " />
                </Link>

                <Link href="/discount" className="inline-block">
                    <Image src={offer3} alt="logo" width={300} height={200} className=" mx-2 rounded-xl shadow-xl hover:shadow-red-400 " />
                </Link>

                <Link href="/discount" className="inline-block">
                    <Image src={offer4} alt="logo" width={300} height={200} className=" mx-2 rounded-xl shadow-xl hover:shadow-red-400 " />
                </Link>


                
        </div>
    </div>
    </>
  )
}

export default Offers