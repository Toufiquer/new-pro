import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../../Share/Loading";
const AddDoctor = () => {
    // Use Form for design and validate
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    // --- -- -- -- -- -- -- - - - -  -  -  -  -   -    -
    const {
        data: doctorServices,
        isLoading,
        refetch,
    } = useQuery("doctorServices", () =>
        fetch(`http://localhost:3500/doctorService`).then(res => res.json())
    );
    if (isLoading) {
        return <Loading />;
    }
    const img_API_key = `e52161006b3728387b2244bd65d42123`;
    const onSubmit = async e => {
        console.log(e);
        const img = e.img[0];
        const formData = new FormData();
        formData.append("image", img);
        const url = `https://api.imgbb.com/1/upload?key=${img_API_key}`;
        fetch(url, { method: "POST", body: formData })
            .then(res => res.json())
            .then(r => {
                if (r.success) {
                    const imgUrl = r.data.url;
                    const doctor = {
                        name: e.name,
                        email: e.email,
                        specialist: e.specialist,
                        img: imgUrl,
                    };
                    // Send to server
                    console.log(doctor);
                }
            })
            .catch(err => console.error(err));
    };

    // Handle Submit
    return (
        <div>
            <div>
                <input
                    type="checkbox"
                    id={`add-a-doctor`}
                    className="modal-toggle"
                />
                <div className="modal">
                    <div className="modal-box relative">
                        <div className="text-center text-xl my-2 text-bold">
                            Add a New Doctor
                        </div>
                        <label
                            htmlFor={`add-a-doctor`}
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                            ✕
                        </label>

                        {/* Form Start */}
                        <form
                            className="flex flex-col w-full lg:w-full mx-auto gap-4"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            {/* Input Name */}
                            <input
                                type="text"
                                autoComplete="name"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is Required.",
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: "Provide a valid Name.",
                                    },
                                })}
                                placeholder="Doctor's Name"
                                className="input input-bordered input-accent w-full"
                            />
                            {errors.name?.type === "required" && (
                                <span className="label-text-alt text-lg text-red-500">
                                    {errors.name.message}{" "}
                                </span>
                            )}
                            {errors.name?.type === "pattern" && (
                                <span className="label-text-alt text-lg text-red-500">
                                    {errors.name.message}{" "}
                                </span>
                            )}
                            {/* --- --- --- */}

                            {/* Input Email */}
                            <input
                                type="email"
                                autoComplete="email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required.",
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "Provide a valid Email.",
                                    },
                                })}
                                placeholder="Your Email"
                                className="input input-bordered input-accent w-full"
                            />
                            {errors.email?.type === "required" && (
                                <span className="label-text-alt text-lg text-red-500">
                                    {errors.email.message}{" "}
                                </span>
                            )}
                            {errors.email?.type === "pattern" && (
                                <span className="label-text-alt text-lg text-red-500">
                                    {errors.email.message}{" "}
                                </span>
                            )}
                            {/* --- --- --- */}

                            {/* Input Specialist */}
                            <select
                                type="text"
                                autoComplete="specialist"
                                {...register("specialist", {
                                    required: {
                                        value: true,
                                        message: "Specialist is Required.",
                                    },
                                })}
                                placeholder="Specialist"
                                className="select select-accent select-bordered w-full"
                            >
                                {doctorServices?.map(s => (
                                    <option key={s._id} value={s.name}>
                                        {s.name}
                                    </option>
                                ))}
                            </select>
                            {errors.email?.type === "required" && (
                                <span className="label-text-alt text-lg text-red-500">
                                    {errors.email.message}{" "}
                                </span>
                            )}
                            {/* --- --- --- */}

                            {/* Input Email */}
                            <input
                                type="file"
                                autoComplete="file"
                                {...register("img", {
                                    required: {
                                        value: true,
                                        message: "Image is Required.",
                                    },
                                })}
                                placeholder="Your Image"
                                className="input input-bordered input-accent w-full"
                            />
                            {errors.email?.type === "required" && (
                                <span className="label-text-alt text-lg text-red-500">
                                    {errors.email.message}{" "}
                                </span>
                            )}
                            {/* --- --- --- */}

                            <input
                                type="submit"
                                value="Add a Doctor"
                                className="btn btn-primary w-full"
                            />
                        </form>

                        {/* Form End */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;
