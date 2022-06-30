import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import styles from '../signUpComponent/signup.module.css'
import Input from "../../common/inputComponent/input";
const inputValue = [
  { label: "Email", type: "email", name: "email" },
  { label: "Phone Number", type: "phoneNumber", name: "phoneNumber" },
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

const Login = () => {
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm({ values: "" });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.container}>
      <Input inputValue={inputValue} formik={formik} />
      <div>
        <button type='submit' className={styles.btn}>
          Submit
        </button>
      </div>
      <footer className={styles.signupFooter}>
        <p> don't have an account ? </p>
        <Link to='/signup'> sign up </Link>
      </footer>
    </form>
  );
};

export default Login;
