import { useState } from "react";
import GenderCheckbox from "../GenderCheckbox";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const passwordMatch = confirmPassword.length > 0 && password === confirmPassword;
    const passwordNotMatch = confirmPassword.length > 0 && password !== confirmPassword;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen mx-auto">
            <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">

                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Signup
                    <span className="text-blue-500"> ChatApp</span>
                </h1>

                <form>
                    {/* Full Name */}
                    <div className="mt-4">
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Full Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Full Name"
                            className="w-full h-10 px-3 rounded-lg bg-white/20
                                       text-white placeholder-white/60 border border-white/30
                                       focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Username */}
                    <div className="mt-4">
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            className="w-full h-10 px-3 rounded-lg bg-white/20
                                       text-white placeholder-white/60 border border-white/30
                                       focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Password */}
                    <div className="mt-4">
                        <label className="label">
                            <span className="text-base label-text text-white">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full h-10 px-3 rounded-lg bg-white/20
                                           text-white placeholder-white/60 border border-white/30
                                           focus:outline-none focus:ring-2 focus:ring-blue-400 pr-16"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2
                                           text-white/70 hover:text-white text-sm"
                            >
                                {showPassword ? "🙈 Hide" : "👁 Show"}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="mt-4">
                        <label className="label">
                            <span className="text-base label-text text-white">Confirm Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Re-enter Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className={`w-full h-10 px-3 rounded-lg bg-white/20
                                           text-white placeholder-white/60 border 
                                           focus:outline-none focus:ring-2 pr-16
                                           ${passwordNotMatch
                                               ? "border-red-400 focus:ring-red-400"
                                               : passwordMatch
                                               ? "border-green-400 focus:ring-green-400"
                                               : "border-white/30 focus:ring-blue-400"
                                           }`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2
                                           text-white/70 hover:text-white text-sm"
                            >
                                {showConfirmPassword ? "🙈 Hide" : "👁 Show"}
                            </button>
                        </div>

                        {/* Match / Not Match Message */}
                        {passwordNotMatch && (
                            <p className="text-red-400 text-xs mt-1 ml-1">
                                ❌ Passwords do not match
                            </p>
                        )}
                        {passwordMatch && (
                            <p className="text-green-400 text-xs mt-1 ml-1">
                                ✅ Passwords match!
                            </p>
                        )}
                    </div>

                    {/* Gender Checkbox */}
                    <GenderCheckbox />

                    {/* Signup Button */}
                    <button
                        type="submit"
                        disabled={passwordNotMatch || password.length === 0}
                        className="w-full py-2 mt-6 rounded-lg bg-blue-500 hover:bg-blue-600
                                   text-white font-semibold transition duration-300
                                   disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Sign Up
                    </button>

                    {/* Already have an account? */}
                    <p className="text-center text-white/70 text-sm mt-4">
                        Already have an account?{" "}
                        <a href="/login" className="text-blue-400 hover:underline font-medium">
                            Login
                        </a>
                    </p>

                </form>
            </div>
        </div>
    );
}

export default Signup;