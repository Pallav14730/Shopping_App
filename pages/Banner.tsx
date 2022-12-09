import Image from "next/image"
import banner from "../Images/banner.jpeg"

function Banner() {
  return (
    <div>
        <Image src={banner} alt="logo" width={1200} height={700} className=" mx-20 my-10 py-10  rounded-2xl shadow-xl hover:shadow-2xl" />
    </div>
  )
}

export default Banner