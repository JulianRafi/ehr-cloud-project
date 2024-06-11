import { useState } from "react";
import "./signup.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="signup">
      <img className="wave" src="LeftWaveIllustration.png" alt="Wave Illustration" />
      <div className="container">
        <div className="img">
          <img className="doctors" src="MedicineIllustration.png" alt="Medicine Illustration" />
        </div>
        <div className="signup-container">
          <form onSubmit={handleSignUp}>
            <h2>Sign Up</h2>
            <div className="input-email">
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="input"
              />
            </div>
            <div className="input-password">
              <input
                type="password"
                placeholder="New Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="input"
              />
            </div>
            <button className="submit" type="submit">Sign Up</button>
            {error && <span className="errorMessage">Could not create account. Please try again.</span>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
