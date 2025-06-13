import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import GoogleLoginButton from "../../components/GoogleLoginButton";

const Login = () => {
  const { signIn, signInGoogle, ForgotPassword } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then(() => {
        setError(""); 
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleForgotPassword = () => {
    ForgotPassword(emailRef);
    navigate("/forgotpass");
  };

  return (
    <div className="bg-[#d0d9d0] min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 py-20 rounded-2xl shadow-md w-full max-w-md min-h-[40rem] flex flex-col justify-center">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Login to Account</h2>
        <p className="text-sm text-gray-900 text-center mt-4 mb-14">
          Please enter your email and password to continue
        </p>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              name="email"
              required
              ref={emailRef}
              placeholder="your@email.com"
              className="mt-1 w-full px-4 py-2 border border-green-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mt-8">Password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              className="mt-1 mb-3 w-full px-4 py-2 border border-green-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
<div className="flex justify-between items-center mt-2 text-sm">
  <label className="flex items-center space-x-2">
  <input
  type="checkbox"
  className="checkbox checkbox-sm rounded-sm checked:bg-green-600 "
/>
    <span>Remember Password</span>
  </label>
  <span
    onClick={handleForgotPassword}
    className="font-normal cursor-pointer hover:underline"
  >
    Forgot Password?
  </span>
</div>

          </div>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-md transition"
          >
            Sign in
          </button>
        </form>

        {error && <p className="text-red-600 text-center text-sm mt-3">{error}</p>}

        <p className="text-sm text-center mt-4 hidden">
          Do not have an account?{" "}
          <Link to="/register" className="text-blue-600 font-semibold hover:underline">
            Register
          </Link>
        </p>

        <div className="mt-4 hidden">
          <GoogleLoginButton signInGoogle={signInGoogle} />
        </div>
      </div>
    </div>
  );
};

export default Login;
