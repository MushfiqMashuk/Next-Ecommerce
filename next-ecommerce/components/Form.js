import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import styles from "../styles/Form.module.css";
import getDate from "../utility/getDate";

export default function Form() {
  const initialValues = { username: "", email: "", phone: "", address: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const router = useRouter();

  const {
    state: { userid, cart },
    dispatch,
  } = CartContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const id = Math.floor(Math.random() * Date.now());

      const date = getDate();

      const body = { ...formValues, id, userid, cart, date };

      // Posting User Order
      async function postData() {
        const response = await fetch("http://localhost:4000/orders", {
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });

        const data = await response.json();
      }

      postData();

      // set the cookie

      document.cookie = `userid=${userid}`;

      // clear cart

      dispatch({ type: "CLEAR_CART" });

      router.push({
        pathname: "myorders/[orderId]",
        query: { orderId: id },
      });
    }
  }, [formErrors]);

  // Validate the form

  const validate = (values) => {
    const errors = {};
    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneRegex = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;

    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!mailRegex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.phone) {
      errors.phone = "Phone number is required";
    } else if (!phoneRegex.test(values.phone)) {
      errors.phone = "Please enter a valid phone number";
    }
    if (!values.address) {
      errors.address = "Address is required!";
    }
    return errors;
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <pre className={styles.pre}>
          {JSON.stringify(formValues, undefined, 5)}
        </pre>

        <form onSubmit={handleSubmit}>
          <h1>Customer Information</h1>

          <div>
            <label>Username</label>
            <input
              className={styles.input}
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p className={styles.p}>{formErrors.username}</p>
          <div>
            <label>Email</label>
            <input
              className={styles.input}
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p className={styles.p}>{formErrors.email}</p>
          <div>
            <label>Phone</label>
            <input
              className={styles.input}
              type="text"
              name="phone"
              placeholder="Phone"
              value={formValues.phone}
              onChange={handleChange}
            />
          </div>
          <p className={styles.p}>{formErrors.phone}</p>

          <div>
            <label>Address</label>
            <input
              className={styles.input}
              type="text"
              name="address"
              placeholder="Address"
              value={formValues.address}
              onChange={handleChange}
            />
          </div>
          <p className={styles.p}>{formErrors.address}</p>
          <button className={styles.button}>Place Order</button>
        </form>
      </div>
    </div>
  );
}
