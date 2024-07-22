"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Home = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [passwordValidator, setPasswordValidator] = useState({
    isNumerical: false,
    hasCapitalLetter: false,
    hasSymbol: false,
    greaterThanSixChar: false,
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const handleInput = (e) => {
    const value = e.target.value;

    setPasswordValidator({
      isNumerical: /[0-9]/.test(value),
      hasCapitalLetter: /[A-Z]/.test(value),
      hasSymbol: /[!@#$%^&*(),.?":{}|<>]/.test(value),
      greaterThanSixChar: value.length >= 6,
    });

    console.log({
      isNumerical: /[0-9]/.test(value),
      hasCapitalLetter: /[A-Z]/.test(value),
      hasSymbol: /[!@#$%^&*(),.?":{}|<>]/.test(value),
      greaterThanSixChar: value.length > 6,
    });
  };

  const calculatePasswordStrength = () => {
    const { isNumerical, hasCapitalLetter, hasSymbol, greaterThanSixChar } =
      passwordValidator;
    const conditionsMet = [
      isNumerical,
      hasCapitalLetter,
      hasSymbol,
      greaterThanSixChar,
    ].filter(Boolean).length;

    if (conditionsMet === 4) return "Strong";
    if (conditionsMet === 3) return "Medium";
    return "Weak";
  };

  const passwordStrength = calculatePasswordStrength();

  return (
    <section className="py-[90px]">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl mb-4 font-bold">Registration</h2>
          <p>Register now to improve your cashflow.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <div className="flex flex-col">
              <label className="text-sm py-2">Email</label>
              <input
                type="text"
                {...register("email", {
                  required: "The email field is required.",
                })}
                className={`order-2 border-2 rounded-md py-[6px] px-[12px]  ${
                  errors.email ? " border-[#dc3545]" : "border-[#c0c0c0]"
                }`}
                placeholder="Email"
              />
            </div>

            {errors.email && (
              <p className="text-red-500 text-[10px] mt-1">
                <strong> {errors.email.message} </strong>
              </p>
            )}
          </div>
          <div className="mb-2">
            <div className="flex flex-col">
              <label className="text-sm py-2">Full name (as per MyKad)</label>
              <input
                type="text"
                {...register("name", {
                  required: "The name field is required.",
                })}
                className={`border-2 rounded-md py-[6px] px-[12px] ${
                  errors.name ? "border-[#dc3545]" : "border-[#c0c0c0]"
                }`}
                placeholder="Full Name"
              />
            </div>

            {errors.name && (
              <p className="text-red-500 text-[10px] mt-1">
                <strong> {errors.name.message} </strong>
              </p>
            )}
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-sm py-2">Company name (optional)</label>
            <input
              type="text"
              className="border-2 rounded-md py-[6px] px-[12px] border-[#c0c0c0]"
              placeholder="Company name"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-sm py-2">Phone no.</label>
            <div className="flex">
              <select className="bg-white border-2 border-r-0 rounded-l-md  border-[#c0c0c0] py-[6px] px-[12px]">
                <option>+06</option>
              </select>
              <input
                type="text"
                {...register("phone", {
                  required: "The phone field is required.",
                })}
                className={`w-full border-2 rounded-r-md py-[6px] px-[12px] ${
                  errors.phone ? "border-[#dc3445]" : "border-[#c0c0c0]"
                }`}
                placeholder="Phone no"
              />
            </div>

            {errors.phone && (
              <p className="text-red-500 text-[10px] mt-1">
                <strong> {errors.phone.message} </strong>
              </p>
            )}
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-sm py-2">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "This password field is required.",
                pattern:
                  "(?=^.{6,}$)((?=.*d)(?=.*W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$",
              })}
              className={`border-2 rounded-md py-[6px] px-[12px] ${
                errors.password ? "border-[#dc3445]" : "border-[#c0c0c0]"
              }`}
              placeholder="Password"
              onInput={(e) => handleInput(e)}
            />

            {errors.phone && (
              <p className="text-red-500 text-[10px] mt-1">
                <strong> {errors.phone.message} </strong>
              </p>
            )}

            <div>
              <p className="text-[13px] mt-3 mb-2">
                Your password must contain
              </p>
              <div className="p-checker flex items-center mb-2">
                <input
                  type="checkbox"
                  id="digit"
                  className="hidden"
                  disabled
                  checked={passwordValidator.isNumerical}
                />
                <label htmlFor="digit" className="text-[13px] cursor-pointer">
                  Numerical digit
                </label>
              </div>
              <div className="p-checker flex items-center mb-2">
                <input
                  type="checkbox"
                  id="capital"
                  className="hidden"
                  disabled
                  checked={passwordValidator.hasCapitalLetter}
                />
                <label htmlFor="capital" className="text-[13px] cursor-pointer">
                  Capital letter
                </label>
              </div>
              <div className="p-checker flex items-center mb-2">
                <input
                  type="checkbox"
                  id="symbols"
                  className="hidden"
                  disabled
                  checked={passwordValidator.hasSymbol}
                />
                <label htmlFor="symbols" className="text-[13px] cursor-pointer">
                  Symbols
                </label>
              </div>
              <div className="p-checker flex items-center mb-2">
                <input
                  type="checkbox"
                  id="character"
                  className="hidden"
                  disabled
                  checked={passwordValidator.greaterThanSixChar}
                />
                <label
                  htmlFor="character"
                  className="text-[13px] cursor-pointer"
                >
                  Minimum 6 characters
                </label>
              </div>
              <div className="mb-2 text-[13px]">
                Password strength:{" "}
                <span
                  className={`text-bold ${
                    passwordStrength === "Strong"
                      ? "text-green-600"
                      : passwordStrength === "Medium"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {passwordStrength}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-sm py-2">Confirm password</label>
            <input
              type="password"
              {...register("password_confirmation", {
                validate: (value) =>
                  value === watch("password") || "Password do not match",
              })}
              className={`border-2 rounded-md py-[6px] px-[12px] ${
                errors.password_confirmation
                  ? "border-[#dc3445]"
                  : "border-[#c0c0c0]"
              }`}
              placeholder="Confirm password"
            />

            {errors.password_confirmation && (
              <p className="text-red-500 text-[10px] mt-1">
                <strong> {errors.password_confirmation.message} </strong>
              </p>
            )}
          </div>

          <div className="w-full h-[2px] my-6 bg-gray-200"></div>

          <div className="p-checker flex items-center">
            <input
              type="checkbox"
              {...register("agree", {
                required: "Please check terms & conditions and privacy policy",
              })}
              id="tc_pp"
              className="hidden"
            />
            <label
              htmlFor="tc_pp"
              className={`text-[13px] cursor-pointer ${
                errors.agree && "text-red-500"
              }`}
            >
              I agree with the terms & conditions and privacy policy, as stated
              by Orpheus Capital
            </label>
          </div>

          <div className="mb-6 my-2">
            {errors.agree && (
              <p className="text-red-500 text-[10px] mt-1">
                <strong> {errors.agree.message} </strong>
              </p>
            )}
          </div>

          <div className="flex items-center gap-6">
            <div className="w-6/12">
              <a
                href="#"
                className="w-full block text-center text-[#616161] bg-[#efefef] py-[6px] px-[12px] rounded-[8px] text-md"
              >
                Back to login
              </a>
            </div>
            <div className="w-6/12">
              <button
                type="submit"
                className="w-full text-white bg-[#1c6dbb] py-[6px] px-[12px] rounded-[8px] text-md hover:text-black"
              >
                Create Account
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Home;
