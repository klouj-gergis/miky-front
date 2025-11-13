

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
            <ul className={`flex gap-5`}>
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
            <a href="#" className="h-fit px-5 py-3 bg-white hover:bg-[#d0ff71] text-black rounded-3xl">
                Contact
            </a>
            </div>
        </nav>
    )
}
export default Navbar
