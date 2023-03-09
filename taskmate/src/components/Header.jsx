import "./Header.css";
import Logo from "../assets/icon.png";

export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="" />
      <a href="/">Home</a>
    </header>
  );
};
