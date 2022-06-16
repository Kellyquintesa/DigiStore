import Image from "next/image";
import Menu from "./Menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">
              <Image src="/icon/logo.svg" width={60} height={60} />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <Menu title="Home" active />
              <Menu title="Games" href="/" />
              <Menu title="Rewards" href="/" />
              <Menu title="Discover" href="/" />
              <Menu title="Global Rank" href="/" />

              <li className="nav-item my-auto">
                <Link href="/signIn">
                  <a
                    className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
                    role="button"
                  >
                    Sign In
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
