import Link from "next/link"
import { signIn, signOut, useSession } from 'next-auth/react'

function Login() {

    const {data:session,status:loading} = useSession()

    return (
        <>
            {
                !session && (
                    <Link href="/api/auth/signin">
                        <h1 onClick={e => { e.preventDefault(), signIn() }} className="text-2xl px-10 mx-50  hover:animate-bounce">SignIn</h1>
                    </Link>
                )
            },
            {
                session && (
                    <Link href="/api/auth/signout">
                        <h1 onClick={e => { e.preventDefault(), signOut() }} className="text-2xl px-10 mx-50  hover:animate-bounce">SignOut</h1>
                    </Link>
                )
            }


        </>
    )
}

export default Login



