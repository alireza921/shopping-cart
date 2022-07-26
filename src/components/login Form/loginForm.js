import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import styles from "../signUp Form/signupForm.module.css";
import Input from "../../common/inputComponent/input";
import { loginRequest } from "../../services/loginrequest";
import { useState } from "react";
import { useAuth, useAuthAction } from "../../context/auth/authProvider";
const inputValue = [
  { label: "Email", type: "email", name: "email" },
  { label: "Password", type: "password", name: "password" },
];
const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup.string().email("Email Is Invalid !").required("Email is Required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Minimum 8 character"),
});

const LoginForm = () => {
  const [error, setError] = useState(false);
  const auth = useAuth();
  const setAuth = useAuthAction();

  const onSubmit = (values, { resetForm }) => {
    // console.log(values);
    loginRequest(values)
      .then((res) => setError(false))
      .catch((error) => {
        if (error.response && error.response.data.message) {
          setError(error.response.data.message);
          console.log(error);
        }
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
          Login
        </button>
      </div>
      <div className={styles.error}>{error && <p> {error} </p>}</div>

      <footer className={styles.signupFooter}>
        <Link to='/signup'>don't have an account ?</Link>
      </footer>
    </form>
  );
};

export default LoginForm;
