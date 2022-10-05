import { Button } from "./Button";
import { InputBox } from "./input";
import { useFormik } from "formik";
import { Map } from "./google-maps";
import axios from "axios";

import * as Yup from "yup";
export const SignupForm = () => {
	const validationSchema = Yup.object({
		fname: Yup.string().required("Name is required"),
		email: Yup.string()
			.required("Email is required")
			.email("Invalid Email address"),
		mono: Yup.string().required("Mono is required"),
		password: Yup.string()
			.required("Password is required")
			.min(6, "password mustbe at least 6 characters"),
		confirmPassword: Yup.string()
			.required("Confirm Password is required")
			.oneOf(
				[Yup.ref("password"), null],
				"confirmpassword password doesn't match "
			),
	});

	const formik = useFormik({
		initialValues: {
			fname: "",
			email: "",
			mono: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema,

		// onSubmit,
		onSubmit: async (values, { resetForm }) => {
			console.log({ values });
			await axios({
				method: "POST",
				url: "http://localhost:7777/vendor/register",
				data: values,
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((res) => {
					console.log(res);
					alert(res.data.message);
				})
				.catch((error) => {
					console.log(error);
				});
			resetForm((values = ""));
		},
	});

	return (
		<div className="">
			<div className=" m-auto w-1/3 center h-screen border-grey-500 p-8">
				<form onSubmit={formik.handleSubmit}>
					<InputBox
						type="text"
						placeholder="Fname"
						name="fname"
						value={formik.values.fname}
						handleChange={formik.handleChange}
						handleBlur={formik.handleBlur}
						label="Name"
					/>
					{formik.touched.fname && formik.errors.fname ? (
						<div className="text-red-600">{formik.errors.fname}</div>
					) : null}

					<InputBox
						type="email"
						placeholder="Email"
						name="email"
						value={formik.values.email}
						handleChange={formik.handleChange}
						handleBlur={formik.handleBlur}
						label="Email Id"
					/>
					{formik.touched.email && formik.errors.email ? (
						<div className="text-red-600">{formik.errors.email}</div>
					) : null}

					<InputBox
						type="email"
						placeholder="0024665860"
						name="mono"
						value={formik.values.mono}
						handleChange={formik.handleChange}
						handleBlur={formik.handleBlur}
						label="Mobile No"
					/>
					{formik.touched.mono && formik.errors.mono ? (
						<div className="text-red-600">{formik.errors.mono}</div>
					) : null}

					<InputBox
						type="password"
						placeholder="password"
						name="password"
						value={formik.values.password}
						handleChange={formik.handleChange}
						handleBlur={formik.handleBlur}
						label="Password"
					/>
					{formik.touched.password && formik.errors.password ? (
						<div className="text-red-600">{formik.errors.password}</div>
					) : null}

					<InputBox
						type="password"
						placeholder="confirm password"
						name="confirmPassword"
						value={formik.values.confirmPassword}
						handleChange={formik.handleChange}
						handleBlur={formik.handleBlur}
						label="Confirm Password"
					/>
					{formik.touched.confirmPassword && formik.errors.confirmPassword ? (
						<div className="text-red-600">{formik.errors.confirmPassword}</div>
					) : null}

					<Map />

					<Button
						btnLabel="Signup"
						type="submit"
						handleClick={formik.handleSubmit}
					/>
				</form>
			</div>
		</div>
	);
};
