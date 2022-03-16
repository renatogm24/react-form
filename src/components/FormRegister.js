import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

const FormRegister = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "firstName" || e.target.name === "lastName") {
      const label = e.target.name === "firstName" ? "First Name" : "Last Name";
      if (e.target.value.length <= 2 && e.target.value !== "") {
        setErrors({
          ...errors,
          [e.target.name]: `${label} must be at least 2 characters`,
        });
      } else {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      }
    }

    if (e.target.name === "email") {
      if (e.target.value.length <= 5 && e.target.value !== "") {
        setErrors({
          ...errors,
          [e.target.name]: `Email must be at least 5 characters`,
        });
      } else {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      }
    }

    if (e.target.name === "password") {
      if (e.target.value.length <= 8 && e.target.value !== "") {
        setErrors({
          ...errors,
          [e.target.name]: `Password must be at least 8 characters`,
        });
      } else {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      }
    }

    if (e.target.name === "confirmPassword") {
      if (e.target.value !== inputs.password && e.target.value !== "") {
        setErrors({
          ...errors,
          [e.target.name]: `Password does not match`,
        });
      } else {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      }
    }
  };

  useEffect(() => {
    console.log(inputs);
  }, [inputs]);

  return (
    <form className="flex flex-col gap-4">
      <div className="flex gap-3 w-full">
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          name="firstName"
          className="w-full"
          onChange={onChange}
          value={inputs.firstName}
          error={errors.firstName !== ""}
          helperText={errors.firstName}
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          name="lastName"
          className="w-full"
          onChange={onChange}
          value={inputs.lastName}
          error={errors.lastName !== ""}
          helperText={errors.lastName}
        />
      </div>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        name="email"
        onChange={onChange}
        value={inputs.email}
        error={errors.email !== ""}
        helperText={errors.email}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        name="password"
        type={"password"}
        onChange={onChange}
        value={inputs.password}
        error={errors.password !== ""}
        helperText={errors.password}
      />
      <TextField
        id="outlined-basic"
        label="Confirm Password"
        variant="outlined"
        name="confirmPassword"
        type={"password"}
        onChange={onChange}
        value={inputs.confirmPassword}
        error={errors.confirmPassword !== ""}
        helperText={errors.confirmPassword}
      />
    </form>
  );
};

export default FormRegister;
