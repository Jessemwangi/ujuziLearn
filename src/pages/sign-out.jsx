import React from "react";
import SignOut from "../components/sign-in/sign-out";
import { Wrapper } from "../layout";
import SEO from "../components/seo";

const SigningOut = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Signing Out ..."} />
      <SignOut />
    </Wrapper>
  );
};

export default SigningOut;
