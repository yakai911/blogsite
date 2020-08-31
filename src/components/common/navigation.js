import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
const icon = require("../../assets/images/avatar.png");

const navLinks = [
  {
    title: "首页",
    path: "/",
  },
  {
    title: "博客",
    path: "/blog",
  },
  {
    title: "关于",
    path: "/about",
  },
  {
    title: "登录",
    path: "/login",
  },
];

export default function Navigation({ user }) {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav className="site-navigation">
      <span className="menu-title">Haiku Cigarette</span>
      <div
        className={`menu-content-container ${menuActive && "active"}`}
        onMouseLeave={() => setMenuActive(false)}
      >
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <span className="menu-avtar-container">
          <Avatar src={icon} size={38} />
          <span className="menu-avtar-name">{`${user.name}`}</span>
        </span>
      </div>
      <i
        className="ionicons icon ion-ios-menu"
        onClick={() => setMenuActive(!menuActive)}
      />
    </nav>
  );
}
