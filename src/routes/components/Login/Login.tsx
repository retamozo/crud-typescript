import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormGroup, Input, Container } from './styles'

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
    <FormGroup>


      <form onSubmit={handleAuthUser}>
        <Container>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            placeholder="Please, enter your email"
            name="email"
            onChange={(e: { target: { value: any; }; }) => setUserData({ ...userData, email: e.target.value })}
          />
        </Container>
        <Container>
          <label htmlFor="password">  Password</label>
          <Input
            type="password"
            id="password"
            placeholder="Please, enter your password"
            name="password"
            onChange={(e: { target: { value: any; }; }) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </Container>


      </form>

      <div className="new-account-container">
        <Link to={"/signin"} />
      </div>
    </FormGroup>
  );
};
export default Login;
