import PrimaryButton from "@components/Button/Button";
import Input from "@components/Input/Input";
import { FcGoogle } from "react-icons/fc";

type Props = {};

function Login({}: Props) {
  return (
    <div className="flex items-center justify-center w-full h-full sm:p-8">
      <div className="flex flex-col w-full h-full gap-4 p-4 sm:min-w-[375px] lg:min-w-[500px] rounded-md sm:p-8 sm:w-max sm:h-max">
        <div className="flex items-center justify-center w-full sm:hidden">
          <img src="/logo.svg" className="w-24 h-auto" />
        </div>
        <div className="space-y-4">
          <h1 className="w-full text-2xl font-semibold text-center text-mauve12 sm:text-left sm:text-3xl">
            Welcome Back
          </h1>
          <p className="text-sm text-mauve10">
            Welcome back! Please enter your details.{" "}
          </p>
        </div>
        <div className="space-y-1">
          <Input label="Email" placeholder="Enter your email" />
          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <PrimaryButton>Sign in</PrimaryButton>
        <PrimaryButton
          className="flex justify-center gap-4 item-center"
          variant={{ intent: "outline" }}
        >
          <FcGoogle className="w-5 h-auto" />
          Sign in with Google
        </PrimaryButton>
        <div className="w-full"></div>
        <span className="w-full text-sm text-center">
          Don't have an account?{" "}
          <span className="font-semibold text-violet11">Sign up</span>
        </span>
      </div>
    </div>
  );
}

export default Login;
