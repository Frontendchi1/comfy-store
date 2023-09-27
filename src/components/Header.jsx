import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="btn-neutral py-2 text-neutral-content">
      <div className="mx-auto max-w-6xl px-8  justify-center flex sm:justify-end">
        <div className="flex gap-x-6 justify-center items-center">
          <Link to="/login" className="link link-hover text-xs sm:text-sm">
            Sign in / Guest
          </Link>
          <Link to="/register" className="link link-hover text-xs sm:text-sm">
            Create Account
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
