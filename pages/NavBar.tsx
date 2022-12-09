import Image from "next/image"
import Link from "next/link"
import favicon from "../public/favicon/favicon.ico"

function NavBar() {
    return (
        <div className="flex bg-white-300 text-black cursor-pointer py-3 shadow-xl   px-96 fixed">
        <Image src={favicon} alt="logo" width={50} height={100} className="rounded-full" />
        <Link href="/" >
        <h1 className="text-black text-2xl px-8 ">Shopping</h1>
        </Link>
        <Link href="/home">
        <h1 className="px-8 text-xl hover:animate-bounce text-black">Home</h1>
        </Link>
        <h1 className="text-xl px-8 md: hover:animate-bounce">About</h1>
        <Link href="/login">
        <h1 className="text-2xl px-10 mx-50  hover:animate-bounce">Login</h1>
        </Link>
        <Link href="/cart">
        <h1 className="text-3xl px-3 mx-5   shadow-xl rounded bg-gray-100 hover:outline">Cart</h1>
        </Link>
        {/* <Image src={logo} alt="logo" width={500} height={500}  /> */}

        

    </div>
    )
}

export default NavBar