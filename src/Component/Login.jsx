import { Link } from "react-router-dom";


const Login = () => {


    const handleLogin = (e) => {
        e.preventDefault();
        const LoginData = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        fetch('http://localhost:8081/login', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(LoginData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.message === "Login successful") {
                    window.location.href = '/home';
                } else {
                    console.log("Invalid credentials");
                }
            });
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("/src/assets/image/orange.jpg")` }}>
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className="hero-content text-center ">
                <div className="max-w-md">
                    <div className="hero min-h-screen ">
                        <div className="hero-content flex-col font-bold font-serif ">
                            <div className="text-center ps-10 ">
                                <h1 className="text-5xl font-bold text-white mb-6 ">Login now!</h1>
                                {/* <img src="/src/assets/image/gradient-connection-background_52683-116652.jpg" alt="" />     */}
                            </div>
                            <form onSubmit={handleLogin}>
                                <div className="ps-40">
                                    <div className="card flex-shrink-0 w-full border-white border-4 ">
                                        <div className="card-body w-[600px] ">
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text text-white">Email</span>
                                                </label>
                                                <input type="email" placeholder="email" name="email" className="input input-bordered" />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text text-white">Password</span>
                                                </label>
                                                <input type="password" placeholder="password" name="password" className="input input-bordered" />
                                                <label className="label">
                                                    <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                                </label>
                                            </div>
                                            <div className="form-control mt-6">
                                                <button type='submit' className="btn btn-primary">Login</button>
                                            </div>
                                            <div>
                                                <p className='text-center mt-6'>Don't have an account? Please <Link className='text-primary font-bold font-serif' to="/signup">Sign Up</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;