import Call from "@assets/call.svg";
import Location from "@assets/location.svg";
import Sms from "@assets/sms.svg";
import { InputField, TextArea, Button } from "@components";

function Footer() {
  function Item({ icon, description, extra }) {
    return (
      <div className="footer-content-left-item">
        <div className="footer-content-left-item-top">
          <img src={icon} alt="" />
          <div>{description}</div>
        </div>
        {extra && <h3 className="footer-content-left-item-extra">{extra}</h3>}
      </div>
    );
  }
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <div className="footer-content-left-header">Head Office</div>
          <Item
            icon={Location}
            description="Semarang"
            extra="8502 Preston Rd. Inglewood, Maine 98380"
          />
          <Item icon={Sms} description="info.rempahwangi@gmail.com" />
          <Item icon={Call} description="021-928376263" />
        </div>
        <div className="footer-content-right">
          <div className="footer-content-right-form">
            <form action="">
              <div className="footer-content-right-form-title">Contact Us</div>
              <div className="footer-content-right-form-input">
                <InputField
                  type="text"
                  placeholder="Enter your name"
                  label="Name"
                  name="name"
                />
                <InputField
                  type="text"
                  placeholder="Enter your email address"
                  label="Email"
                  name="email"
                />
                <TextArea label="Description" name="email" />
              </div>
              <div className="w-full flex justify-end">
                <Button className="mt-8" type="secondary">
                  Request Now
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
