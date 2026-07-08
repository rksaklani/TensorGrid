import { animated, useSpring } from "@react-spring/web";
import React, { useState } from "react";

import logo from "../../images/logo.png";

import style from "./Header.module.css";

const Header: React.FC<
  React.PropsWithChildren<{
    onRefresh?: () => void;
    title: string;
    navChildren?: React.ReactNode;
  }>
> = ({ children, title, navChildren, onRefresh }) => {
  const [toggle, setToggle] = useState(false);
  const logoProps = useSpring({
    transform: toggle ? `rotate(0turn)` : `rotate(1turn)`,
  });

  return (
    <div className={style.header}>
      <div className={style.left}>
        <div
          className={style.title}
          data-cy="refresh-fo"
          onClick={() => {
            setToggle(!toggle);
            onRefresh && onRefresh();
          }}
        >
          <animated.img className={style.logo} style={logoProps} src={logo} alt="TensorGrid" />
          <div className={style.brandTitle}>
            {title === "TensorGrid" ? (
              <>
                <span className={style.brandTitleBase}>Tensor</span>
                <span className={style.brandTitleAccent}>Grid</span>
              </>
            ) : (
              <span className={style.brandTitleBase}>{title}</span>
            )}
          </div>
        </div>
        {navChildren}
      </div>
      <div className={style.right}>{children}</div>
    </div>
  );
};

export default Header;
