import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/authProvider";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  useEffect(() => {
    if (!auth) navigate("/login?redirect=/checkout");
  }, []);
  return <div>Check OUt</div>;
};

export default CheckoutPage;
