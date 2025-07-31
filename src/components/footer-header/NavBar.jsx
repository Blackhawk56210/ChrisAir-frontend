import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo-white.png";

function NavBar() {
  return (
    <div className="text-white border-b w-full bg-black h-20 sticky md:flex md:w-auto">
      {/* adjust to work on mobile 
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <h5 class="text-white h4">Collapsed content</h5>
          <span class="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav> */}
      <nav className="flex items-center justify-between h-full md:shrink-0 md:h-full md: w-full ">
        <img src={Logo} alt="Logo" className="h-30" />
        {/* Left Links */}
        <div className="flex gap-8 text-xl">
          <NavLink to="/" className="hover:text-blue-300">
            Home
          </NavLink>
          <NavLink to="/inventory" className="hover:text-blue-300">
            Inventory
          </NavLink>
          <NavLink to="/support" className="hover:text-blue-300">
            Support
          </NavLink>
        </div>

        {/* Right Link */}
        <div className="px-5">
          <a href="tel: +1 850 9-12345678" className="px-5">
            +1 (850) 9-CHRISAIR
          </a>
          <NavLink
            to="/inventory"
            className="hover:bg-blue-300 border text-black rounded-br-xl rounded-tl-xl p-2 bg-white"
          >
            Book Charter
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
