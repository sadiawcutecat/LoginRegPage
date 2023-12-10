import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("/src/assets/image/orange.jpg")` }}>
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className="hero-content text-center ">
                <div className="max-w-md">
                    <div className="hero min-h-screen ">
                        <div className="hero-content flex-col font-bold font-serif ">
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl font-bold text-white">Login now!</h1>
                            {/* <img src="/src/assets/image/gradient-connection-background_52683-116652.jpg" alt="" />     */}
                            </div>
                            <div className="card flex-shrink-0 w-full  ">
                                <div className="card-body w-[600px] ">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                    <div>
                                    <p className='text-center mt-6'>Don't have an account? Please <Link  className='text-primary font-bold font-serif' to="/signup">Sign Up</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;