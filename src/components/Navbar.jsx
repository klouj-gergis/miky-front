import { Menu, Dot} from "lucide-react";
import { useState} from "react";

const Navbar = () => {
    const [isShown, setIsShown] = useState(false);
    const links = [
        {
            href: '/',
            title: "Home"
        },
        {
            href: '/about',
            title: "About"
        },
        {
            href: '/projects',
            title: "Projects"
        },
        {
            href: '/reviews',
            title: "Reviews"
        }
    ]

    const toggleDropdown = () => {
        setIsShown(!isShown)
    }

    return (
        <nav className={`bg-transparent fixed z-100 `}>
            <div className={`flex flex-col bg-[#0f0f0f]/50 border border-black rounded-4xl min-w-4/5 md:min-w-2/5 mt-5 fixed left-1/2 -translate-x-1/2 transition-all duration-1000`}>
                <div className={`flex w-full py-2 justify-between  px-2  items-center transition-all duration-1000`}>

                <div className={`max-w-12 h-12 rounded-full overflow-hidden`}>
                <img src="/miky-profile.jpg" alt="profile image" className="w-20" />
            </div>
            <ul className={`md:flex gap-5 hidden`}>
                {
                    links.map((link, index) => {
                        return (
                            <li key={index} className={`hover:text-[#d0ff71]`}>
                                <a href={link.href}>{link.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
            <a href="#" className="hidden md:block contact-btn  relative h-fit px-5 py-3 bg-white overflow-hidden hover:text-black z-10 text-black rounded-3xl ">
                Contact
            </a>
                <div className={`flex items-center gap-4  justify-center md:hidden ${isShown && "hidden"}`}>
                    <p>Available for work</p>
                    <div className={`relative`}>
                        <div className={`w-2 h-2 rounded-full bg-green-400 absolute left-1/2 top-1/2 -translate-1/2`}></div>
                        <div className={`w-2 h-2 rounded-full bg-green-400 absolute  left-1/2 top-1/2 -translate-1/2 blib-dot`}></div>
                    </div>
                </div>



                    <button className={`md:hidden p-3 bg-[#d0ff71] rounded-full`} onClick={toggleDropdown}>
                        <Menu color={`black`}/>
                    </button>
                </div>
                <ul className={isShown ? 'flex flex-col w-full items-center mb-5 gap-5' : 'hidden'}>
                {
                    links.map((link, index) => {
                        return (
                            <li key={index} className={`hover:text-[#d0ff71] text-2xl`}>
                                <a href={link.href}>{link.title}</a>
                            </li>
                        )
                    })

                }
                    <a href="#" className="relative h-fit px-5 text-xl py-3 bg-[#d0ff71] overflow-hidden hover:text-black z-10 text-black rounded-3xl ">
                        Contact
                    </a>
            </ul>
            </div>

        </nav>
    )
}
export default Navbar
