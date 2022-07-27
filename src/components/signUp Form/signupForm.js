import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import Input from "../../common/inputComponent/input";
import { useAuthAction } from "../../context/auth/authProvider";
import { useQuery } from "../../hooks/useQuery";
import { signupRequest } from "../../services/signupRequest";
import styles from "./signupForm.module.css";

const inputValue = [
  { label: "Name", type: "text", name: "name" },
  { label: "Email", type: "email", name: "email" },
  { label: "Phone Number", type: "phoneNumber", name: "phoneNumber" },
  { label: "Password", type: "password", name: "password" },
  {
    label: "PasswordConfirmation",
    type: "password",
    name: "passwordConfirmation",
  },
];

const initialValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  phoneNumber: "",
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Name is Required !")
    .min(6, "Minimum 6 charachter "),
  email: yup.string().email("Email Is Invalid !").required("Email is Required"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Minimum 8 character"),

  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("password confirm is required"),

  phoneNumber: yup
    .string()
    .min(11, "minimum 11 number")
    .required("phone Number is required")
    .matches(phoneRegExp, "Phone number is not valid"),
});

const SignUpForm = () => {
  const [error, setError] = useState(false);
  const setAuth = useAuthAction();
  const navigate = useNavigate();
  const query = useQuery();
  const redirect = query.get("redirect") || "/";
  console.log(query.get("redirect"));

  const onSubmit = (values, { resetForm }) => {
    const { name, email, password, phoneNumber } = values;
    const userData = {
      name,
      email,
      password,
      phoneNumber,
    };
    signupRequest(userData)
      .then((res) => {
        setAuth(res.data);
        localStorage.setItem("authState", JSON.stringify(res.data));
        setError(false);
        navigate(redirect);
      })
      .catch((err) => {
        setError(err.response.data.message);
        console.log(err);
      });
    resetForm({ values: "" });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.container}>
      <Input inputValue={inputValue} formik={formik} />
      <div>
        <button
          type='submit'
          className={`${styles.btn} ${!formik.isValid && styles.disabled} `}
          disabled={!formik.isValid}>
          Signup
        </button>
      </div>
      <div className={styles.error}>{error && <p> {error} </p>}</div>
      <footer className={styles.signupFooter}>
        <Link to={`/login?redirect=${redirect}`}>don't have an account ?</Link>
      </footer>
    </form>
  );
};

export default SignUpForm;
