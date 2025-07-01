import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import GoogleLoginButton from "../../components/GoogleLoginButton";
import signInIMG from "../../assets/sign-in-image.png"

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
<div className="relative">
        <img src={signInIMG} className="absolute w-[50rem] h-[50rem] top-0 right-0"  alt="sign-in-image" />
      <div className="absolute left-0 min-h-screen flex items-center container mx-auto">
      <div className="bg-white mt-[1rem] ml-[15rem] p-8 py-20 rounded-2xl shadow-md w-full max-w-md min-h-[40rem] flex flex-col justify-center">
<h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
<p className="text-sm text-gray-600 mt-2">
  Enter your email and password to sign in
</p>



<form onSubmit={handleLogin} className="space-y-6">
  <div>
    <label className="block text-sm font-medium text-gray-700">Email</label>
    <input
      type="email"
      name="email"
      required
      ref={emailRef}
      placeholder="Your email address"
      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-700">Password</label>
    <input
      type="password"
      name="password"
      required
      placeholder="Your password"
      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
    <div className="flex justify-between items-center mt-2 text-sm">
      <label className="flex items-center cursor-pointer">
        {/* Toggle Switch */}
        <div className="relative">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-10 h-4 bg-gray-300 rounded-full peer-checked:bg-orange-500 transition" />
          <div className="absolute w-6 h-6 bg-white rounded-full -top-1 left-0 peer-checked:translate-x-full transition shadow" />
        </div>
        <span className="ml-3">Remember me</span>
      </label>
      <span
        onClick={handleForgotPassword}
        className="cursor-pointer hover:underline"
      >
        Forgot password?
      </span>
    </div>
  </div>
  <button
    type="submit"
    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition"
  >
    Sign In
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
</div>
  );
};

export default Login;
