import cx from "classnames";

function Container({ children, className, ...props }) {
  return (
    <div className={cx("container", className)} {...props}>
      {children}
    </div>
  );
}

export default Container;
