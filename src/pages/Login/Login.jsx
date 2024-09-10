import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/Animation - 1699173214156.json";
import Lottie from "lottie-react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Login",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left"></div>
          <div className="flex lg:flex-row gap-12 flex-shrink-0 rounded-2xl lg:w-4/5 md:h-[700px]  items-center justify-center shadow-2xl bg-base-100">
            <div className="flex-1">
              <Lottie animationData={loginImg}> </Lottie>
            </div>
            <div className="flex-1">
              <form className="card-body" onSubmit={handleLogin}>
                <h1 className="text-5xl font-bold text-center mb-8">Login</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn btn-primary bg-[#FF3811] border-none text-white"
                  >
                    Login
                  </button>
                </div>
                <p className="text-center mt-4">
                  New to here? Please{" "}
                  <Link
                    to="/register"
                    className="text-blue-600 hover:border-b hover:border-black"
                  >
                    Register
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
