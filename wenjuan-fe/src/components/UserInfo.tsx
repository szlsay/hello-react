import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_PATHNAME } from "../router";

const UserInfo: FC = () => {
  const nav = useNavigate();
  const Login = <Link to={LOGIN_PATHNAME}>登录</Link>;

  return <div>{Login}</div>;
};

export default UserInfo;
