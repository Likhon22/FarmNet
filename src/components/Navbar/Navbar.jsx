import { Link, NavLink } from "react-router-dom";
import MainContainer from "../Container/MainContainer";
import PrimaryButton from "../Button/PrimaryButton";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { logout, user } = useContext(AuthContext);
  const navlinks = (
    <div className="flex gap-3">
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-green-500" : "text-black"
        }
        to={"/"}
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "text-green-500" : "text-black"
        }
        to={"/about"}
      >
        About
      </NavLink>
      <details>
        <summary className="text-black">Services</summary>
        <ul className="p-2">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-green-500" : "text-black"
              }
              to={"/workers"}
            >
              Hire Workers
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-green-500" : "text-black"
              }
              to={"/experts"}
            >
              Hire Experts
            </NavLink>
          </li>
        </ul>
      </details>

      <NavLink
        className={({ isActive }) =>
          isActive ? "text-green-500" : "text-black"
        }
        to={"/services"}
      >
        Services
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "text-green-500" : "text-black"
        }
        to={"/contact"}
      >
        Contact
      </NavLink>
    </div>
  );
  const handleLogout = () => {
    logout()
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully logout",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch();
  };
  return (
    <div className="bg-gray-300">
      {" "}
      <MainContainer>
        {" "}
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navlinks}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Farm Net</a>
          </div>
          <div className="navbar-center hidden lg:flex">{navlinks}</div>
          <div className="navbar-end">
            {!user ? (
              <Link to={"/login"}>
                <PrimaryButton btnText={"Login"}></PrimaryButton>
              </Link>
            ) : (
              <div onClick={handleLogout}>
                <PrimaryButton btnText={"Logout"}></PrimaryButton>
              </div>
            )}
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default Navbar;
