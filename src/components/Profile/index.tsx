import React from "react";
import { css } from "@emotion/css/macro";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import profileImg from "images/profile-pic.jpg";
import bg from "images/testimonials-bg.jpg";
import wave from "images/wave-small-reversed.png";

//? CSS
class ProfileCSS {
  readonly profiles = css`
    height: 80vh;
    background: linear-gradient(
        135deg,
        rgba(50, 24, 131, 0.9) 10%,
        rgba(72, 56, 150, 0.9)
      ),
      url(${bg}) center no-repeat;

    background-size: cover;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4.7rem;
      background: url(${wave}) center no-repeat;
      background-size: cover;
    }
  `;
  readonly profile = css`
    /* width: 100%;
    color: #fafafa;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center; */
    width: 100%;
    color: #fafafa;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  readonly textBox = css``;
  readonly customer = css``;
}

const profileCSS = new ProfileCSS();
const { profiles, profile, textBox, customer } = profileCSS;

//! component
function Profile() {
  return (
    <section className={profiles}>
      <div className="container">
        <div className={profile}>
          <div className={textBox}>
            <p>This is really great homepage!! I love it!</p>
            <AccountBalanceIcon />
          </div>

          <div className={customer}>
            <img src={profileImg} alt="" />
            <h1>Anderson Choi</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
