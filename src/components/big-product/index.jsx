import cx from "classnames";
import PlayIcon from "@assets/play-circle.svg";

function BigProduct({ className, title, description, image }) {
  return (
    <div className={cx("big-product", className)}>
      <div className="big-product-header">
        <div className="big-product-header-title">{title}</div>
        <div className="big-product-header-description">{description}</div>
      </div>
      <div className="big-product-image">
        <img src={image} alt="rempah-wangi" />
        <div className="big-product-image-play">
          <img src={PlayIcon} alt="play-icon" />
        </div>
      </div>
    </div>
  );
}

export default BigProduct;
