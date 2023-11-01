import Avatar from "./Avatar/Avatar";
import MyName from "./MyName/MyName";
import Navigation from "./Navigator/Navigation";

function Header() {
  return (
    <header>
        <div className="container_about_my">
            <Avatar />
            <MyName />
        </div>
        <Navigation />
    </header>
  );
}

export default Header;
