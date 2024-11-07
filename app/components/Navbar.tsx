export default function Navbar() {
    return <nav className="w-full bg-transparent flex items-center absolute justify-between mt-9">
        <div className="flex items-center">

<div id="logo" className=" rounded-full bg-white w-16 h-16  flex justify-center items-center ml-10">
   
   <span className="text-black font-extrabold text-5xl text-center ">
    TV
   </span>
</div>
<ul id="pages" className="flex w-72 text-2xl justify-between ml-8 text-white">
<li>MOVIES</li>
<li>SERIES</li>
<li>SHOWS</li>
</ul>
        </div>
<ul id="authentication" className="flex justify-between w-60 text-2xl mr-10">
<li><button className="bg-black text-white w-28 rounded-lg">LOGIN</button></li>
<li><button className="bg-black text-white w-28 rounded-lg">REGISTER</button></li>
</ul>
    </nav>
}