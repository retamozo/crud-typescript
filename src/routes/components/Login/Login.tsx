import React, { useState } from "react";
import { Link } from "react-router-dom";

interface IUserData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [userData, setUserData] = useState<IUserData>({
    email: "",
    password: ""
  });

  const handleAuthUser = () => {
    console.log("asd");
  };
  return (
    <div className="form-container">
      <div className="form-login">
        <form onSubmit={handleAuthUser}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Please, enter your email"
            name="email"
            onChange={e => setUserData({ ...userData, email: e.target.value })}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Please, enter your password"
            name="password"
            onChange={e =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </form>
      </div>
      <div className="new-account-container">
        <Link to={"/signin"} />
      </div>
    </div>
  );
};
export default Login;
