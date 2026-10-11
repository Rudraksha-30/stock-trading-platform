
import React, { useState } from "react";

function Signup() {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    setError("");

    // This clone does not create real trading accounts.
    // Continue to Zerodha's official account-opening page.
    window.open(
      "https://signup.zerodha.com/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="container py-5">
      <div className="row align-items-center justify-content-center g-5">
        <div className="col-md-6 text-center">
          <img
            src="/media/images/signup.png"
            alt="Open a trading account"
            className="img-fluid"
            style={{ maxHeight: "360px" }}
          />
        </div>

        <div className="col-md-5">
          <h1 className="mb-3">Open a free demat account</h1>

          <p className="text-muted mb-4">
            Invest in stocks, mutual funds, and more with Zerodha.
          </p>

          <form onSubmit={handleSignup}>
            <label htmlFor="mobile" className="form-label">
              Mobile number
            </label>

            <div className="input-group mb-2">
              <span className="input-group-text">+91</span>

              <input
                id="mobile"
                type="tel"
                className="form-control"
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={(e) => {
                  setMobile(e.target.value.replace(/\D/g, "").slice(0, 10));
                  setError("");
                }}
                maxLength={10}
                inputMode="numeric"
                autoComplete="tel-national"
                required
              />
            </div>

            {error && (
              <p className="text-danger small" role="alert">
                {error}
              </p>
            )}

            <button type="submit" className="btn btn-primary w-100 mt-3">
              Sign up now
            </button>
          </form>

          <p className="text-muted small mt-3">
            By continuing, you will be redirected to Zerodha's official
            account-opening website.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
