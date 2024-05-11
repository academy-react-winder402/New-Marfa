import { NavLink } from "react-router-dom";
import logo from "../../assets/image/Logo/logo.png";
export const Logo = () => {
    return (
        <NavLink to="/" className="w-full">
        <img className=" object-contain  text-white" src={logo} alt="" />
        </NavLink>
    );
  };
  