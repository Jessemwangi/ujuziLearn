import React from "react";
import SignOut from "../components/sign-in/sign-out";
import { Wrapper } from "../layout";
import SEO from "../components/seo";

const SigningOut = () => {
  return (
    <div className="sticky-header">
    
        <Wrapper>
          <SEO pageTitle={"Signing Out ..."} />

          <section className="account-page-area section-gap-equal">
            <div className="container position-relative">
              <div className="row g-5 justify-content-center">
                <div className="col-lg-5">
                  <div className="login-form-box">
                    <SignOut />
                  </div>
                </div>
              </div>
              {/* // add a goodbye waving hand emoji */}

              {/* <ul className="shape-group">
                    <li className="shape-1 scene">
                        <img src="/assets/images/about/shape-07.png" alt="Shape" />
                    </li>
                    <li className="shape-2 scene">
                        <img src="/assets/images/about/shape-13.png" alt="Shape" />
                    </li>
                    <li className="shape-3 scene">
                        <img src="/assets/images/counterup/shape-02.png" alt="Shape" />
                    </li>
                </ul> */}
            </div>
          </section>
        </Wrapper>
     
    </div>
  );
};

export default SigningOut;
