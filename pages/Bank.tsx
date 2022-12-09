import Image from "next/image"
import Link from "next/link"
import bank1 from "../Images/bank1.jpeg";
import bank2 from "../Images/bank2.jpeg";
import bank3 from "../Images/bank3.jpeg";
import bank5 from "../Images/bank5.jpeg";

function Bank() {
    return (
        <>
            <div>
                <h1 className="text-center text-gray-500 text-2xl">Bank Offers</h1>
                <hr className="mx-7 text-gray-500" />
            </div>

            <div className="mx-44 py-9">
                <Link href="/bob_offer" className="inline-block">
                    <Image src={bank1} alt="logo" width={250} height={200} className=" mx-3 rounded-xl shadow-xl hover:shadow-red-400 " />
                </Link>

                <Link href="/one_offer" className="inline-block">
                    <Image src={bank2} alt="logo" width={250} height={200} className=" mx-3 rounded-xl shadow-xl hover:shadow-gray-400" />
                </Link>


                <Link href="/indusind_offer" className="inline-block">
                    <Image src={bank3} alt="logo" width={250} height={200} className=" mx-3 rounded-xl shadow-xl hover:shadow-red-400" />
                </Link>



                <Link href="/icici_offer" className="inline-block">
                    <Image src={bank5} alt="logo" width={250} height={200} className=" mx-2 rounded-xl shadow-xl hover:shadow-red-400" />
                </Link>


            </div>
        </>
    )
}

export default Bank