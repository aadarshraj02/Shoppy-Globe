const Header = (): JSX.Element => {
  return (
    <header>
      <nav className="flex justify-between items-center px-4 py-2 bg-[#1995AD] text-zinc-100">
        <div className="">
          <h1 className="text-2xl font-bold">
            Shoppy <span className="text-zinc-700 font-normal">Globe </span>{" "}
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <ul className="flex gap-6">
            <li>About</li>
            <li>Contact Us</li>
            <li>Login</li>
          </ul>
          <button>Cart</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
