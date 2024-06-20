import { useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");  
      })
      .catch((error) => {
        setError(true);
      });
  };

  const handleNavigateToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="login">
      <img className="wave" src="LeftWaveIllustration.png" alt="Wave Illustration" />
      <div className="container">
        <div className="img">
          <img className="doctors" src="MedicineIllustration.png" alt="Medicine Illustration" />
        </div>
        <div className="login-container">
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
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
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="input"
              />
            </div>
            <button className="submit" type="submit">Login</button>
            {error && <span>Wrong email or password!</span>}
            <div className="signup">Not a Member?
              <span></span>
              <a href="#" onClick={handleNavigateToSignUp}>Sign Up Now</a></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;