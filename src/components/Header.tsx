const Header = (): JSX.Element => {
  return (
    <header>
      <nav className="flex justify-between px-4 py-2 bg-[#1995AD] text-zinc-100">
        <div className="">
          <h1 className="">Shoppy Globe</h1>
        </div>
        <div>
          <button>Cart</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
