import cx from "classnames";
import Fssc from "@assets/fssc.png";
import Cosmos from "@assets/cosmos.png";
import Halal from "@assets/halal.png";
import Klbd from "@assets/klbd.png";

function Certificate({ className, data }) {
  return (
    <div className={cx("certificate", className)}>
      <div className="certificate-header">Our Certificate</div>
      <div className="certificate-list">
        {data &&
          data?.map((certificate, index) => (
            <img key={index} src={certificate} alt="" />
          ))}
      </div>
    </div>
  );
}

export default Certificate;
