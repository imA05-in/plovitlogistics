import { NavLink } from "react-router"
import logo from "../../assets/logo/logo.png"

export default function Navbar(){

    const navItems = [
        {
            label : "About Us",
            path: "/"
        },
        {
            label : "Our Services",
            path: "2"
        },
        {
            label : "Contact Us",
            path: "3"
        },
    ]

    return(
        <header className="border flex justify-between items-center px-2 sticky top-0">
            <NavLink className=""
            to={`/`}
            >
                <img src={logo} alt="" className="h-20"/>
            </NavLink>
            <div className="flex gap-15">
                {navItems.map((item)=>(
                    <NavLink 
                    key={item.label}
                    to={item.path}
                    className={({isActive})=>`${isActive ? "border-b" : ""}`}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </div>
        </header>
    )
}