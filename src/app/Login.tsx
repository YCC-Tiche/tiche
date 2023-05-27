"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import { UserCard } from "./userCard";

export default function Login() {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    return (
      <>
        <button 
          className="w-full border-4 flex-row justify-center text-center"
          onClick={() => signOut()}
          type="button" 
        >
          로그아웃하기
        </button>
        <UserCard user={session?.user} />
      </>
    )
  } else {
    return (
      <>
        <button 
          onClick={() => signIn()}
          type="button" 
          className="text-center bg-blue-300"
        >
          로그인하기
        </button>
      </>
    )
  }

}