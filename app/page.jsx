import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <header>
        <nav className="flex justify-around items-center bg-black">
          <div className="w-40 h-24 bg-blue content-center">
           <img src="favicon.ico" className="w-10 h-10"></img>
          </div>
          <div>
            <ul className="flex gap-8">
              <li className="text-purple-20"><a href="#" className="no-underline p-3 hover:bg-white hover:text-black">Home</a></li>
              <li className="list-none"><a href="#" className="no-underline p-3 hover:bg-white hover:text-black">About</a></li>
              <li className="list-none"><a href="#" className="no-underline p-3 hover:bg-white hover:text-black">Contact</a></li>
              <li className="list-none"><a href="#" className="no-underline p-3 hover:bg-white hover:text-black rounded-[20px]">Sign Up</a></li>
              <li className="list-none"><a href="#" className="no-underline pr-5 pl-5 pt-3 pb-3 hover:bg-white hover:text-black rounded-[20px]">Login</a></li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="flex items-center justify-center">
        <Image src="/house.jpg" width={1000} height={350}/>
      </main>
    </div>
  );
}
