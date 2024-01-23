import React from "react";
import cx from "classnames";

const Button = ({
  className,
  style,
  type = "primary",
  iconBefore,
  iconBeforeClass,
  iconAfter,
  fullWidth,
  children,
  loading = false,
  htmlType,
  ...rest
}) => {
  return (
    <button
      className={cx("btn", `btn--${type}`, className)}
      style={{ ...style }}
      type={htmlType}
      {...rest}
    >
      <span className="btn-text">{children}</span>
    </button>
  );
};

export default Button;
