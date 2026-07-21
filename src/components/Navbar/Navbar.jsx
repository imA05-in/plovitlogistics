import { NavLink } from "react-router";
import logo from "../../assets/logo/logo.png";
import { useState } from "react";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import { menuOpen, menuClose } from "../../assets/icons/icons";
import AnchorBtn from "../Button/AnchorBtn";

export default function Navbar() {
  const navItems = [
    {
      label: "About Us",
      path: "/",
    },
    {
      label: "Our Services",
      path: "our-services",
    },
    {
      label: "Contact Us",
      path: "3",
    },
  ];

  const [mobMenu, setMobMenu] = useState(false);
  const ShowMobMenu = () => {
    setMobMenu((prev) => !prev);
    console.log(mobMenu);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="border-b border-[#fffdfb]  flex justify-between items-center px-2">
        <NavLink className="" to={`/`}>
          <img src={logo} alt="" className="h-20" />
        </NavLink>

        {/* Desktop Nav */}
        <div className="gap-15 font-medium hidden md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) => `${isActive ? "border-b" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
          <div>
            <AnchorBtn label={'Get a Quote'} href={`tel:9315111174`}/>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex" onClick={ShowMobMenu}>
          {mobMenu === false ? <div> <img className="w-10" src={menuOpen} /> </div> : <div> <img className="w-6" src={menuClose} /> </div>
          }
          <div>
            <AnchorBtn label={'Get a Quote'}/>
          </div>
        </div>

          

      </div>

      <div>
        {mobMenu === true ? (
          <div className="flex flex-col gap-3 items-end px-1">
            {navItems.map((item) => (
              <NavLink key={item.label} to={item.path}
              onClick={()=>setMobMenu(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}
