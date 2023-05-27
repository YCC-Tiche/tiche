import { DefaultSession } from "next-auth";

export function UserCard( { user } : { user:DefaultSession["user"]}) {

  return (
    <div className="card">
      <div className="card-body">
        <p>현재 로그인한 유저</p>
        <h5 className="card-title">{user?.name}</h5>
        <p className="card-text">{user?.email}</p>
      </div>
    </div>
  )
}