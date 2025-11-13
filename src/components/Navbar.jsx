import { Menu, Dot} from "lucide-react";

const Navbar = () => {
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
    return (
        <nav className={`bg-transparent mt-5 flex justify-center`}>
            <div className={`flex bg-[#0f0f0f] border border-black w-fit py-2 justify-between gap-10 px-2 rounded-4xl items-center`}>
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
                <div className={`flex items-center gap-5 justify-center md:hidden`}>
                    <p>Available for work</p>
                    <div className={`relative`}>
                        <div className={`w-2 h-2 rounded-full bg-green-400 absolute left-1/2 top-1/2 -translate-1/2`}></div>
                        <div className={`w-2 h-2 rounded-full bg-green-400 absolute  left-1/2 top-1/2 -translate-1/2 blib-dot`}></div>
                    </div>
                </div>



                <button className={`md:hidden p-3 bg-[#d0ff71] rounded-full`}>
                    <Menu color={`black`}/>
                </button>
            </div>
        </nav>
    )
}
export default Navbar
