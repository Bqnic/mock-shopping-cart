import { Link } from "react-router-dom";
import { NavigationProps } from "./assets/interfaces";

export default function Navigation({ closeCart }: NavigationProps) {
  return (
    <nav className="flex gap-10 fixed w-screen justify-center text-xl p-3 transition-all duration-500 border-b border-black bg-neutral-100">
      <Link
        onClick={() => closeCart()}
        to="/"
        className="hover:text-2xl transition-all duration-500"
      >
        Home
      </Link>
      <Link
        onClick={() => closeCart()}
        to="/store"
        className="hover:text-2xl transition-all duration-500"
      >
        Store
      </Link>
    </nav>
  );
}
