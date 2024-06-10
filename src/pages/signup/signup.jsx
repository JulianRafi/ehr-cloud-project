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
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Sign Up</button>
        {error && <span>Could not create account. Please try again.</span>}
      </form>
    </div>
  );
};

export default SignUp;
