import { useState } from "react";
import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash, FaExclamationTriangle, FaExclamation, FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Registration = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const [seePass, setSeePass] = useState(false)

    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            return
        }
        console.log(data);

    };

    return (
        <section className="min-h-screen  bg-gradient-to-br from-sky-900 to-indigo-900">

            {/*  */}
            <div className="max-w-6xl py-20 mx-auto px-5">
                <div className="flex flex-row justify-center items-center ">
                    {/* form section */}
                    <div className="p-4 max-h-[1500px] flex flex-col max-w-lg rounded-lg bg-gray-100 text-gray-900">
                        <h3 className="text-center text-2xl font-bold text-sky-700">Registration</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    name="name"
                                    placeholder="Name"
                                    className={`input input-bordered w-full px-3 py-2 border rounded-md border-gray-300 ${errors.name ? 'focus:outline-rose-600 bg-rose-100' : 'focus:outline-lime-600'} bg-gray-200 text-gray-900`}
                                />
                                {errors.name && (
                                    <span className="text-red-600 flex justify-start items-center mt-1">
                                        <FaExclamation /> Name is required
                                    </span>
                                )}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    name="email"
                                    placeholder="email"
                                    className={`input input-bordered w-full px-3 py-2 border rounded-md border-gray-300 ${errors.email ? 'focus:outline-rose-600 bg-rose-100' : 'focus:outline-lime-600'} bg-gray-200 text-gray-900`} />
                                {errors.email && <span className="text-red-600 flex justify-start items-center mt-1">
                                    <FaExclamationCircle /> Email is required
                                </span>}
                            </div>

                            {/* role */}
                            <div className="form-control relative">
                                <label >
                                    <span className="font-semibold text-sm pl-1">Role</span>
                                    <select {...register('role', { required: true })} className="select select-info w-full max-w-xs">
                                        <option value="">-- Select Role --</option>
                                        <option value="owner">House Owner</option>
                                        <option value="renter">House Renter</option>
                                    </select>
                                    {errors.role && <span className="text-red-600 flex justify-start items-center mt-1"> <FaExclamationCircle />This field is required</span>}
                                </label>
                            </div>

                            {/* password */}
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input
                                    type={`${seePass ? 'text' : 'password'}`}
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                    })} placeholder="password" className={`input input-bordered w-full px-3 py-2 border rounded-md border-gray-300 ${errors.password ? 'focus:outline-rose-600 bg-rose-100' : 'focus:outline-lime-600'} bg-gray-200 text-gray-900`}
                                />

                                {seePass ? (
                                    <FaEye
                                        className="absolute right-3 top-[60px] transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                        onClick={() => setSeePass(false)}
                                    />
                                ) : (
                                    <FaEyeSlash
                                        className="absolute right-3 top-[60px] transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                        onClick={() => setSeePass(true)}
                                    />
                                )}

                                {errors.password?.type === 'required' && <span className="text-red-600 flex justify-start items-center mt-1">
                                    <FaExclamationTriangle /> Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600 flex justify-start items-center mt-1">
                                    <FaExclamationTriangle /> Password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-600 flex justify-start items-center mt-1">
                                    <FaExclamationTriangle /> Password must be less than 20 characters</span>}

                            </div>

                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Submit</button>
                            </div>
                            <p className='px-6 text-sm text-center text-gray-400'>
                                Already have an account?{' '}
                                <Link
                                    to='/login'
                                    className='hover:underline text-blue-500'
                                >
                                    Login
                                </Link>
                                .
                            </p>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Registration;