import React from "react";
import { authenticate } from "../actions";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export const LoginForm = ({ useDispatchHook = useDispatch }) => {
  const dispatch = useDispatchHook();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    dispatch(authenticate(email, password));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email:</label>
      <input id="email" ref={register} type="email" name="email" size="28" />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        ref={register}
        type="password"
        name="password"
        size="28"
      />
      <button type="submit">Log in</button>
    </form>
  );
};
