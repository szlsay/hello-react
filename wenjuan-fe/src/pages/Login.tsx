import { FC } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
const Login: FC = () => {
  const nav = useNavigate();
  const result = useSearchParams()
  return (
    <>
      Login 
      {result} 
      <button
        onClick={() => {
          nav(-1);
        }}
      >
        back 
      </button>
    </>
  );
};

export default Login;
