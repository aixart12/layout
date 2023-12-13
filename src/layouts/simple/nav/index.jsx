const Nav = () => {
  return (
    <nav className=" fixed w-full mt-0 h-[30px] z-10 flex flex-row justify-between px-10 ring-slate-500 border ">
      <h1>Logo</h1>
      <ul className="flex flex-row  mx-10 gap-5">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
