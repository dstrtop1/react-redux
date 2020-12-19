import React from "react";
import css from "./header.module.scss";
import { Link } from "react-router-dom";

interface IRoute {
  name: string;
  route: string;
}

const arr: IRoute[] = [
  { name: "home", route: "/" },
  { name: "news", route: "/news" },
];

const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.navbar}>
        {arr.map((numb: IRoute, key: number) => (
          <NavItem url={numb} key={key} />
        ))}
      </div>
    </div>
  );
};

const NavItem = ({ url }: { url: IRoute }) => (
  <Link to={url.route}>{url.name}</Link>
);

export { Header };
