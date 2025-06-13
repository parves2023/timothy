import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();
  const { createUser,auth } = useContext(AuthContext);

  const [passwordError, setPasswordError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    if (password.length < 6 || !/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
      setPasswordError("Password must be at least 6 characters long, must include at least one Uppercase and Lowercase");
      return;
    } else {
      setPasswordError("");
    }

    // Create user
    createUser(email, password, name, photo)
    .then((result) => {
      // Update the user's profile with the name and photo URL
      updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      }).then(() => {
          toast.success("Registration successful!", {
            position: "top-center",
            autoClose: 2000,
          });
          setTimeout(() => navigate("/"), 2000); // Delay navigation to show toast
        })
        .catch((error) => {
          toast.error(`error ${error.message}`, {
            position: "top-center",
            autoClose: 2000,
          });
        });
    })
    .catch((error) => {
      toast.error(`error ${error.message}`, {
        position: "top-center",
        autoClose: 2000,
      });
    });

  };

  return (
    <div className="my-7">
      <div>
      <h1 className="text-3xl mt-7 ralewayfont font-bold text-center mb-6">
        Please <span className="text-[#309255]">Register</span>
      </h1>
        <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto relative">
          <ToastContainer
            position="top-center"
            hideProgressBar
            newestOnTop
            closeOnClick
            className="absolute"
          />
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              required
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              required
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              required
              name="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              required
              name="password"
              placeholder="Password"
              className="input input-bordered"
            />
            {passwordError && (
              <p className="text-red-600 text-sm mt-2">{passwordError}</p>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-green-50 px-10 hover:bg-green-800 hover:text-white font-medium border border-green-500">Register</button>
          </div>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link className="text-blue-600 font-bold" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
