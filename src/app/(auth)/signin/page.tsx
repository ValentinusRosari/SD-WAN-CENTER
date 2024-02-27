"use client";

import AuthWrapperFour from "@/app/shared/auth-layout/auth-wrapper-four";
import SignInForm from "./sign-in-form";
import { metaObject } from "@/config/site.config";

export default function SignInPage() {
  return (
    <AuthWrapperFour
      title={
        <>
          Welcome Back! <br /> Sign in to your SD-WAN.
        </>
      }
      isSignIn
      isSocialLoginActive={true}
    >
      <SignInForm />
    </AuthWrapperFour>
  );
}
