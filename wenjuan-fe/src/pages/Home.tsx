import { FC } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from 'antd';
const Home: FC = () => {
  const nav = useNavigate();
  const goLogin = () => {
    const pathname = "/login";
    nav({
      pathname,
      search: 'id=1'
    });
  };

  const goLogin1 = () => {
    nav('login?id=1')
  };
  return (
    <>
      home
      <button onClick={goLogin}>goLogin</button>
      <button onClick={goLogin1}>goLogin</button>
      <Link to='/register'>register</Link>
      <Button type="primary">Button</Button>
    </>
  );
};

export default Home;
