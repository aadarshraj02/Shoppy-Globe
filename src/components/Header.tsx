const Header = (): JSX.Element => {
  const greeting = (): string => {
    const currHour = new Date().getHours();
    if (currHour < 12) return "Good Morning,";
    if (currHour < 16) return "Good Afternoon,";
    return "Good Evening,";
  };

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
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          {greeting()} Welcome to Shoppy Globe
        </h1>
        <p className="text-center">
          ~An E-Commerce platform to buy your wishlist
        </p>
      </div>
    </header>
  );
};

export default Header;
