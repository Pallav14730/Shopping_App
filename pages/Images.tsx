import vegetables from "../Images/vegetables.jpeg";
import aata from "../Images/aata.jpeg";
import rice from "../Images/rice.jpeg";
import dal from "../Images/dal.jpeg";
import oil from "../Images/oil.jpeg";
// import fruits from "../Images/fruits.jpeg";
import Link from "next/link";
import Image from "next/image";
import Banner from "./Banner";
function Images() {
  return (
    <div>
        <Banner />
        <div className="mx-12 py-6 my-3">
        
        <Link href="/Vegetables" className="inline-block">
            <Image src={vegetables} alt="logo" width={250} height={200} className=" mx-1 rounded-xl shadow-xl hover:shadow-2xl" />
        </Link>

        <Link href="/aata" className="inline-block  ">
            <Image src={aata} alt="logo" width={250} height={200} className=" mx-1 rounded-xl shadow-xl hover:shadow-2xl" />
        </Link>

        <Link href="/rice" className="inline-block">
            <Image src={rice} alt="logo" width={250} height={200} className=" mx-1 rounded-xl shadow-xl hover:shadow-2xl" />
        </Link>


        <Link href="/dal" className="inline-block">
            <Image src={dal} alt="logo" width={250} height={200} className=" mx-1 rounded-xl shadow-xl hover:shadow-2xl" />
        </Link>

        <Link href="/oil" className="inline-block">
            <Image src={oil} alt="logo" width={250} height={200} className=" mx-1 rounded-xl shadow-xl hover:shadow-2xl" />
        </Link>
       

        


        </div>

        


       


        
        </div>
  )
}

export default Images;