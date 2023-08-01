import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="fixed bg-white shadow-sm w-full z-10">
      <div className="border-b-[1px] p-2">
        <Container>
          <div className="flex flex-row items-center justify-between gap-1 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
