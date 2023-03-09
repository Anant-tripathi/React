import "./Header.css";
import Logo from "../assets/icon.png";
import "../App.css";

export const Header = () => {
  return (
    <header>
      <img className="logo" src={Logo} alt="" />
      <a href="/">Home</a>
    </header>
  );
};
