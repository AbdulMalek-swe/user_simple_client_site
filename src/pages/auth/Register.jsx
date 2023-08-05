import axios from "../../apiService/axios";
import { ErrorMessage, Field, Formik } from "formik";
import { useCookies } from "react-cookie";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
    const [cookie,setCookie] = useCookies(["token"])
    const navigate = useNavigate()
const registerForm = async(values)=>{
    try{
    const result = await axios.post("/register",values)
       const {status,data} = result;
       if(status===200){
        setCookie("token", data?.token, {
            maxAge: 60 * 60 * 24 * 7, // 1 week
          });
          navigate("/note")
       }
    }
    catch(error){
            toast.error(error.response.data.error)
    }
}
return (
<div>
<div className="relative overflow-hidden h-screen flex items-center   ">
<div className="container-sk">
    <div className=" rotate-border  bg-white w-full mx-auto md:w-2/3 lg:w-1/2 xl:w-1/3   p-1  ">
        <div className="z-10 rounded-lg bg-black   w-full h-full">
            <div className="md:p-14 p-5  rounded-lg backdrop-blur-xl bg-gray-900/50">

                <Formik
                    enableReinitialize
                    initialValues={{
                        name:"",
                        email: "",
                        password: "",
                        confirmPassword:""
                    }}
                    validate={(values) => {
                        const error = {};

                        if (!values.email) {
                            error.email = "Please enter your email";
                        }
                        else if (!values.password) {
                            error.password = "Please enter password";
                        }
                        else if (!values.confirmPassword) {
                            error.confirmPassword = "Please enter confirm password";
                        }
                        else if (!values.name) {
                            error.name = "Please enter name";
                        }
                        else if (values.password!==values.confirmPassword) {
                            error.confirmPassword = "password mismatch";
                        }

                        return error;
                    }}
                    onSubmit={(values, { resetForm }) => {
                         registerForm(values)
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,

                        /* and other goodies */
                    }) => (
                        <form
                            onSubmit={handleSubmit}
                            className="mt-5 lg:mt-10 flex flex-col gap-4"
                        >
                            <div className="mb-4">
                            <label htmlFor="name" className="block lg:text-xl text-base font-normal text-white ">
                                    Name<span className="text-red-500">*</span>
                                </label>
                                <Field
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block lg:text-xl text-base font-normal text-white ">
                                    Email<span className="text-red-500">*</span>
                                </label>
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="block lg:text-xl text-base font-normal text-white ">
                                    Password<span className="text-red-500">*</span>
                                </label>
                                <Field
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="confirmPassword" className="block lg:text-xl text-base font-normal text-white ">
                                    Confirm Password<span className="text-red-500">*</span>
                                </label>
                                <Field
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className="mb-4 bg-white text-black p-2 rounded-md">
                                
                                 <button className="uppercase w-full ">Register</button>
                            </div>

                            <div className="text-sm flex flex-col  gap-1 flex-wrap">
                                <Link
                                    to="/"
                                    variant="body2"
                                    className="hover:text-red-700 duration-300 w-fit text-white"
                                >
                                    {"Do have an account? Login"}
                                </Link>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    </div>
</div>
</div>
</div>
);
};

export default Register;