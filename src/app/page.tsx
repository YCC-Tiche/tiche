import Login from "./Login";

// localhost: 3000

export default function Home() {
  return (
    <div className="max-w-screen-sm flex-col justify-center items-center">
      <h3 className="bg-blue-300 text-center">Login Website</h3>
      <Login />
    </div>
  )
};