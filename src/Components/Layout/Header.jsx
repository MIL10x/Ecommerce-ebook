import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import darkk from "../../assets/dark.png";
import Srch from "../../assets/search.png";
import cart from "../../assets/cart.png";
import account from "../../assets/account.png";
import day from "../../assets/light.png";
import menu from "../../assets/menu.png";
import { Link } from "react-router-dom";
import Search from "../Section/Search";
import DropdownLogout from "../Element/DropdownLogout";
import DropdownLogin from "../Element/DropdownLogin";
import { CartUse } from "../../context";

const Header = () => {
  const { cartlist } = CartUse();
  const [acdropdown, setacdropdown] = useState(false);
  const [open, setopen] = useState(false);
  const [dark, setdark] = useState(
    JSON.parse(localStorage.getItem("dark")) || false
  );
  const [search, setsearch] = useState(false);
  const email = JSON.parse(sessionStorage.getItem("email"));
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      <div className="w-full h-auto p-6 bg-blue-500 dark:bg-slate-900 px-10 flex items-center justify-between flex-wrap">
        <div>
          <Link to="/">
            <img className="size-14 " src={logo} alt="" />
          </Link>
        </div>
        <div className="gap-3 items-center hidden md:flex ">
          <div className="border-2 rounded-xl p-1 justify-center">
            <button onClick={() => setdark(!dark)}>
              <img className="size-8 " src={dark ? darkk : day} alt="" />
            </button>
          </div>
          <div>
            <button onClick={() => setsearch(!search)}>
              <img className="size-8" src={Srch} alt="" />
            </button>
          </div>
          <Link to={email ? "./cartpage" : "/login"}>
            <div className="relative">
              <img className="size-8" src={cart} alt="" />
              <span className="absolute bg-white text-xs text-black rounded-full px-1 -top-1 right-1 ">
                {cartlist.length}
              </span>
            </div>
          </Link>
          <button onClick={() => setacdropdown(!acdropdown)}>
            <img className="size-8" src={account} alt="" />
            {acdropdown && (
              <div>{email ? <DropdownLogin /> : <DropdownLogout />}</div>
            )}
          </button>
        </div>
        <div className="size-8 md:hidden">
          <button onClick={() => setopen(!open)}>
            <img src={menu} alt="" />
          </button>
        </div>
        {open && (
          <div className=" flex flex-col w-full items-center basis-full md:hidden text-white  pt-8">
            <div className=" flex flex-col text-xl gap-2">
              <button onClick={() => setdark(!dark)}>
                <div className="flex gap-5 items-center">
                  <img className="size-10 " src={dark ? darkk : day} alt="" />
                  <p>Dark Mode</p>
                </div>
              </button>
              <div className="flex flex-col gap-2">
                <button
                  className="flex gap-5 items-center"
                  onClick={() => setsearch(!search)}
                >
                  <img className="size-10" src={Srch} alt="" />
                  <p>search</p>
                </button>
              </div>
              <Link to={email ? "./cartpage" : "/login"}>
                <div className="flex gap-5 items-center">
                  <img className="size-10" src={cart} alt="" />
                  <p>cart items </p>
                </div>
              </Link>
              <div>
                <button
                  className="flex gap-5 items-center"
                  onClick={() => setacdropdown(!acdropdown)}
                >
                  <img className="size-10" src={account} alt="" />
                  <p>account</p>
                </button>
                {acdropdown && (
                  <div>{email ? <DropdownLogin /> : <DropdownLogout />}</div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      {search && <Search setsearch={setsearch} search={search} />}
    </>
  );
};

export default Header;
