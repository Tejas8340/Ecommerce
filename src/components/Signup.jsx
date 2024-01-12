import React, { useContext, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const title = "Register";
const socialTitle = "Login with Social Media";
const btntext = "Sign Up";
const Signup = () => {
  const [errorMessage, seterrorMessage] = useState("");
  const { signUpWithGmail, createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = () => {
    signUpWithGmail().then((result) => {
      const user = result.user;
      // Redirect to the home page or any other desired page
      navigate("/", { replace: true });
    }).catch((error) => {
      const errorMsg = error.message;
      seterrorMessage("Please provide valid email & password");
    });
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      seterrorMessage("Password doesn't match! Please, provide a correct password!");
    } else {
      seterrorMessage("");
      try {
        await createUser(email, password);
        alert("Account created successfully!");
        navigate("/", { replace: true }); // Redirect to the home page or any other desired page
      } catch (error) {
        console.log(error.message);
        alert(`${error.message}`);
      }
    }
  };
  return (
    <div className='login-section padding-tb section-bg'>
      <div className="container">
        <div className="account-wrapper">
          <h3 className="title">{title}</h3>
          <form className='account-form' onSubmit={handleSignup}>
            <div className="form-group">
              <input type="text" name="name" id="name" placeholder='Full Name *' required />
            </div>
            <div className="form-group">
              <input type="email" name="email" id="email" placeholder='Email Address *' required />
            </div>
            <div className="form-group">
              <input type="password" name="password" id="password" placeholder='Password *' required />
            </div>
            <div className="form-group">
              <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password *' required />
            </div>

            <div>
              {errorMessage && (
                <div className='error-message text-danger mb-1'>{errorMessage}</div>
              )}
            </div>

            <div className='form-group'>
              <button type='submit' className='d-block lab-btn'>
                <span>{btntext}</span>
              </button>
            </div>
          </form>

          <div className="account-bottom">
            <span className='d-block cate pt-10'>
              Have an Account? <Link to="/login">Login</Link>
            </span>
            <span className='or'>
              <span>or</span>
            </span>

            <h5 className='subtitle'>{socialTitle}</h5>
            <ul className='lab-ul social-icons justify-content-center'>
              <li>
                <button className='github' onClick={handleRegister}>
                  <i className='icofont-github'></i>
                </button>
              </li>
              <li>
                <a href="" className='facebook'>
                  <i className='icofont-facebook'></i>
                </a>
              </li>
              <li>
                <a href="" className='twitter'>
                  <i className='icofont-twitter'></i>
                </a>
              </li>
              <li>
                <a href="" className='linkedin'>
                  <i className='icofont-linkedin'></i>
                </a>
              </li>
              <li>
                <a href="" className='instagram'>
                  <i className='icofont-instagram'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
