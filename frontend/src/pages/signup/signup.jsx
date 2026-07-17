
import { useState } from "react";
import GenderCheckbox from "../GenderCheckbox.jsx";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    });

    const { loading, signup } = useSignup();

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle gender
    const handleGenderChange = (gender) => {
        setInputs((prev) => ({
            ...prev,
            gender
        }));
    };

    // Submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

    const passwordMatch =
        inputs.confirmPassword &&
        inputs.password === inputs.confirmPassword;

    const passwordNotMatch =
        inputs.confirmPassword &&
        inputs.password !== inputs.confirmPassword;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen mx-auto">
            <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-gray-400 bg-opacity-10 backdrop-blur">

                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Signup <span className="text-blue-500">ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={inputs.fullName}
                        onChange={handleChange}
                        className="w-full p-2 rounded-lg"
                    />

                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={inputs.username}
                        onChange={handleChange}
                        className="w-full p-2 rounded-lg"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={inputs.password}
                        onChange={handleChange}
                        className="w-full p-2 rounded-lg"
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={inputs.confirmPassword}
                        onChange={handleChange}
                        className={`w-full p-2 rounded-lg
                            ${passwordNotMatch ? "border border-red-400" : ""}
                            ${passwordMatch ? "border border-green-400" : ""}
                        `}
                    />

                    {passwordNotMatch && (
                        <p className="text-red-500 text-sm">
                            Passwords do not match
                        </p>
                    )}

                    <GenderCheckbox onCheckboxChange={handleGenderChange} />

                    <button
                        type="submit"
                        disabled={loading || passwordNotMatch}
                        className="w-full py-2 bg-blue-500 text-white rounded-lg"
                    >
                        {loading ? "Loading..." : "Sign Up"}
                    </button>

                    <p className="text-center text-sm">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-500">
                            Login
                        </Link>
                    </p>

                </form>
            </div>
        </div>
    );
};

export default Signup;