import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Form.module.css";

export default function App() {
  const initialValues = { username: "", email: "", phone: "", address: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    // if (Object.keys(formErrors).length === 0 && isSubmit) {
    //   router.push("/orderdetails");
    // }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      router.push("/orderdetails");
    }
  }, [formErrors]);

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
              type="text"
              name="address"
              placeholder="Address"
              value={formValues.address}
              onChange={handleChange}
            />
          </div>
          <p className={styles.p}>{formErrors.address}</p>
          <button className={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
}
