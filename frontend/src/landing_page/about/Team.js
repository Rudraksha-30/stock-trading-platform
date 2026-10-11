import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="/media/images/WhatsApp Image 2026-08-26 at 18.26.55.jpeg"
            style={{ borderRadius: "100%", width: "50%" }}
            alt="Nithin Kamath"
          />

          <h4 className="mt-5">Rudraksha Chouhan</h4>
          <h6>Founder, CEO</h6>
        </div>

        <div className="col-6 p-3">
          <p>
            Rudraksha built this platform in 2026 to overcome the
            hurdles he faced during his long stint as a software developer. Today,
            its has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a student of Computer Science and engineering in Manipal University Jaipur. He has his roots from a small town called Dehri-on-son in Bihar.
          </p>

          <p>Playing cricket is his zen.</p>

          <p>
            Connect on <a href="">Homepage</a> /{" "}
            <a href="">TradingQnA</a> / <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;