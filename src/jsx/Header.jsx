import Avatar from "./Avatar";
import MyName from "./MyName";
import Navigation from "./Navigation";

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
