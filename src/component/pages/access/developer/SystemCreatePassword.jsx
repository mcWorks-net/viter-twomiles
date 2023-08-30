import React, { useState } from "react";
import Logo from "../../../svg/Logo";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SpinnerButton from "../../../partials/spinners/SpinnerButton";
import { Link } from "react-router-dom";
import ModalValidate from "../../../partials/modals/ModalValidate";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";

const SystemCreatePassword = () => {
  const [isPasswordShow, setIsPasswordShow] = React.useState(false);
  const [isConfirmPasswordShow, setIsConfirmPasswordShow] =
    React.useState(false);
  const [isValid, setIsValid] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [isSuccess, setSuccess] = React.useState(false);
  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2500);
  };
  const handleShowPassword = () => setIsPasswordShow(!isPasswordShow);
  const handleShowConfirmPassword = () =>
    setIsConfirmPasswordShow(!isConfirmPasswordShow);

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="login w-full max-w-[380px] border border-gray-200 py-8 px-4 rounded-md shadow-sm">
          <div className="flex justify-center">
            <Logo className="mx-auto" />
          </div>
          {isSuccess ? (
            <>
              <AiFillCheckCircle className="text-5xl fill-primary mx-auto mt-10 mb-2" />
              <h2 className="mb-4 mt-2 text-lg text-center">Password Reset</h2>
              <p className="text-sm mb-6">
                We have successfully sent an instruction to reset your password.
                If you haven't received any email, please also check your
                spam/junk folder.
              </p>
              <a
                className="text-primary text-xs block text-center mt-6"
                href="/system/login"
              >
                Back to Login
              </a>
            </>
          ) : (
            <>
              <h2 className="mb-0 my-5 text-center text-lg">
                Recover Password
              </h2>
              <p className="text-center">
                Enter the email address associated with your account
              </p>
              <form action="">
                <div className="form__wrap">
                  <label htmlFor="">New Password</label>
                  <input
                    type={isPasswordShow ? "text" : "password"}
                    disabled={isLoading ? true : false}
                  />
                  <button
                    type="button"
                    className="absolute top-9 right-3"
                    onClick={handleShowPassword}
                  >
                    {isPasswordShow ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div className="form__wrap">
                  <label htmlFor="">Confirm Password</label>
                  <input
                    type={isConfirmPasswordShow ? "text" : "password"}
                    disabled={isLoading ? true : false}
                  />
                  <button
                    type="button"
                    className="absolute top-9 right-3"
                    onClick={handleShowConfirmPassword}
                  >
                    {isPasswordShow ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div className="p-3 rounded-sm bg-gray-50 mb-6 border border-solid border-gray-200">
                  <h5 className="text-[12px] text-body mb-2">
                    Password Requirement
                  </h5>
                  <ul className="text-sm">
                    <li className="text-body text-[12px] flex gap-2 items-center mb-1">
                      <BsCheckCircleFill className="opacity-50" /> Must have 8
                      characters
                    </li>
                    <li className="text-body text-[12px] flex gap-2 items-center mb-1">
                      <BsCheckCircleFill className="opacity-50" /> At least 1
                      uppercase
                    </li>
                    <li className="text-body text-[12px] flex gap-2 items-center mb-1">
                      <BsCheckCircleFill className="opacity-50" /> At least 1
                      lowercase
                    </li>
                    <li className="text-body text-[12px] flex gap-2 items-center mb-1">
                      <BsCheckCircleFill className="opacity-50" /> At least 1
                      number
                    </li>
                    <li className="text-body text-[12px] flex gap-2 items-center mb-1">
                      <BsCheckCircleFill className="opacity-50" /> At least 1
                      symbol
                    </li>
                  </ul>
                </div>
                <button
                  className="btn btn--primary w-full"
                  onClick={handleSubmit}
                  type="button"
                  disabled={isLoading ? true : false}
                >
                  Set Password {isLoading ? <SpinnerButton /> : ""}
                </button>
                <Link
                  to="/system/login"
                  className="text-primary text-center block mt-6 text-xs"
                >
                  Back to Login
                </Link>
              </form>
            </>
          )}
        </div>
      </div>
      {isValid && <ModalValidate setIsValid={setIsValid} />}
    </>
  );
};

export default SystemCreatePassword;
