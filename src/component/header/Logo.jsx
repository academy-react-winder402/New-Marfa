import { NavLink } from "react-router-dom";
import logo from "../../assets/image/Logo/logo.png";
import logoDark from "../../assets/image/Logo/logoDark2.png"
import { useLocation } from "react-router-dom";
export const Logo = () => {
    const logoLocation = useLocation();
    const LogoLitgh = location.pathname=='/' ? `visible` : `invisible`;

    
    const LogoDark = location.pathname !=='/' ? `visible` : `invisible`;
    return (
        <NavLink to="/" className="w-full relative">
        <img className={`object-contain relative top-16 ${LogoLitgh}`} src={logo} alt="" />
        <img className={`object-contain relative -top-16  ${LogoDark}`} src={logoDark} alt="" />
        </NavLink>
    );
  };
  