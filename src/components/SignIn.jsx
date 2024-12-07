import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const SignIn = () => {


    const { loginUser } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        const user = { email, password }

        console.log(user);

        loginUser(email, password)
            .then((result) => {
                console.log(result.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login succeessfully",
                    showConfirmButton: false,
                    timer: 2000
                });
            })
            .catch((error) => {
                console.log(error);
            })

    }

    return (
        <div>
            <div className="hero bg-base-200 ">
                <div className=" flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl text-center font-bold">Login now!</h1>
                    </div>
                    <div className=" bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <Link to='/signUp' className="text-red-500 font-bold">REGISTER</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;