import Image from "next/image"
import Link from "next/link"
import clean1 from "../Images/clean1.jpeg"
import clean2 from "../Images/clean2.jpeg"
import clean3 from "../Images/clean3.jpeg"
import clean4 from "../Images/clean4.jpeg"
function Cleaning() {
    return (
        <>
            <div>
                <h1 className="text-center text-gray-500 text-2xl">Cleaning & Household</h1>
                <hr className="mx-7 text-gray-500" />
            </div>

            <div className="mx-16 py-9">
                <Link href="/clean" className="inline-block">
                    <Image src={clean1} alt="logo" width={300} height={200} className=" mx-3 rounded-xl shadow-xl hover:shadow-red-400 " />
                </Link>

                <Link href="/Detergents" className="inline-block">
                    <Image src={clean2} alt="logo" width={300} height={200} className=" mx-3 rounded-xl shadow-xl hover:shadow-red-400 " />
                </Link>

                <Link href="/kitchen" className="inline-block">
                    <Image src={clean3} alt="logo" width={300} height={200} className=" mx-3 rounded-xl shadow-xl hover:shadow-red-400 " />
                </Link>

                <Link href="/fresh" className="inline-block">
                    <Image src={clean4} alt="logo" width={300} height={200} className=" mx-2 rounded-xl shadow-xl hover:shadow-red-400 " />
                </Link>
            </div>
        </>
    )
}

export default Cleaning