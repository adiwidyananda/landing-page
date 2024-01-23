import cx from "classnames";
import LongArrow from "@assets/long-arrow-icon.svg";
import { Button } from "@components";

function Section({
  linkText,
  title,
  description,
  image,
  imagePosition = "left",
}) {
  return (
    <div className="section">
      <div
        className={cx(
          "section-wrapper",
          imagePosition === "right" ? " flex-row-reverse" : ""
        )}
      >
        <div className="section-wrapper-image">
          {image && (
            <div className="section-wrapper-image-content">
              <img src={image} alt="" />
              <div className="section-wrapper-image-content-outline"></div>
            </div>
          )}
        </div>
        <div className="section-wrapper-description">
          <div className="section-wrapper-description-content">
            {linkText && (
              <div className="section-wrapper-description-content-link">
                <p>{linkText}</p>
                <img src={LongArrow} alt="" />
              </div>
            )}
            {title && (
              <div className="section-wrapper-description-content-title">
                {title}
              </div>
            )}
            {description && (
              <div className="section-wrapper-description-content-description">
                {description}
              </div>
            )}
            <Button
              className="section-wrapper-description-content-button"
              type="outline"
            >
              read more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
