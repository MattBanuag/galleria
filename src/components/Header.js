import { Link } from "react-router-dom";

function Header() {
  return (
    <>
        <div className="py-2 flex justify-center items-center
        bg-black">
            <h2 className="text-white cursor-pointer 
            hover:underline">
                BOGO Sale on now! Huge deals and savings!
            </h2>
        </div>

        <header className="border-b-2 border-gray-200">
            <nav className="px-12 py-6 flex justify-between items-center">
                <div className="flex gap-24">
                    <article>
                        <h1 className="text-4xl">Galleria.com</h1>
                    </article>

                    <ul className="flex items-center gap-12">
                        <li><Link to="/galleria" className="text-sm 
                        hover:text-slate-600 duration-200">HOME</Link></li>
                        <li><a href="" className="text-sm
                        hover:text-slate-600 duration-200">SHOP</a></li>
                        <li><a href="" className="text-sm
                        hover:text-slate-600 duration-200">DEALS</a></li>
                        <li><a href="" className="text-sm
                        hover:text-slate-600 duration-200">ABOUT</a></li>
                        <li><a href="" className="text-sm
                        hover:text-slate-600 duration-200">CONTACT</a></li>
                    </ul>
                </div>
                
                <div className="flex gap-6">
                    <Link><i className="fa-solid fa-magnifying-glass
                    hover:text-slate-600 duration-200 cursor-pointer">
                    </i></Link>

                    <Link to="account/register"><i className="fa-regular fa-circle-user
                    hover:text-slate-600 duration-200 cursor-pointer">
                    </i></Link>

                    <Link to="account/register"><i className="fa-solid fa-cart-shopping
                    hover:text-slate-600 duration-200 cursor-pointer">
                    </i> (0)</Link>

                    <Link><h2>CAD</h2></Link>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Header;