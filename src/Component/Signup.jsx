import { Link } from "react-router-dom";

const Signup = () => {
    return (
       
            <div className="hero min-h-screen" style={{ backgroundImage: `url("/src/assets/image/gradient-connection-background_52683-116652.jpg")` }}>
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className="hero-content text-center ">
                <div className="max-w-md">
                    <div className="hero min-h-screen ">
                        <div className="hero-content flex-col font-bold font-serif ">
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl font-bold text-white">Sign Up!</h1>
                            {/* <img src="/src/assets/image/gradient-connection-background_52683-116652.jpg" alt="" />     */}
                            </div>
                            <div className="card flex-shrink-0 w-full  ">
                                <div className="card-body w-[600px] ">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">User Name</span>
                                        </label>
                                        <input type="text" placeholder="name" className="input input-bordered" />
                                    </div>
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
                                        <input type="password" placeholder="Password" className="input input-bordered " />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Confirm Password</span>
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
                                    <p className='text-center mt-6'>
                                      <span className=" text-white"> Already have an account? Please</span> <Link  className='text-orange-500 font-bold font-serif' to="/login">Login</Link></p>
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

export default Signup;