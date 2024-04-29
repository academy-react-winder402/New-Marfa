import { NavLink } from "react-router-dom";
import logo from "../../assets/image/MARFApic_prev_ui.png";
export const Logo = () => {
    return (
        <NavLink to="/" className="w-full">
        <img className="h-24 text-white" src={logo} alt="" />
      </NavLink>
    );
  };
  