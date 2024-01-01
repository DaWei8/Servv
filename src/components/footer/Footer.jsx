// import "./Footer.css";
import Logo from "../../assets/icons/servv-logo-dk.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";
import LinkedinIcon from "../../assets/icons/linkedin.svg";

const Footer = () => (
  <div className="footer-section bg-dark-bg w-screen gap py-[64px] px-[32px] flex flex-row flex-wrap ">
    <div className="footer-container gap-[48px] flex md:flex-row flex-col flex-auto justify-between mb-[64px]  ">
      <div className="footer-company flex flex-col w-full gap-[10px] text-primary-text-color-white md:w-[340px] ">
        <div className="footer-company-logo  ">
          <img className=" h-[60px] " src={Logo} alt="company logo" />
        </div>
        <p className="footer-company-description">
          Our platform is designed to be simple and intuitive, making it easy
          for anyone to find the right artisan for their needs.
        </p>
      </div>
      <div className="footer-links flex-auto gap-[20px] justify-between text-primary-text-color-white text-[14px] flex flex-row flex-wrap ">
        <FooterLink
          title="About Servv"
          links={
            <>
              <li>About</li>
              <li>Contact</li>
            </>
          }
        />

        <FooterLink
          title="Company"
          links={
            <>
              <li>About</li>
              <li>CLients</li>
              <li>Workers</li>
              <li>Support</li>
            </>
          }
        />
        <FooterLink
          title="For Workers"
          links={
            <>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
            </>
          }
        />

        <FooterLink
          title="For Clients"
          links={
            <>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
            </>
          }
        />
      </div>
    </div>

    <div className="footer-bottom flex pt-[32px] gap-[32px] flex-wrap text-primary-button-color-white border-t-[#fff] border-b-0 border-s-0 border-r-0 border-l-0 border-solid border-t-[1px] w-full ">
      <p className="copyright">© 2023 Servv. All rights reserved.</p>
      <ul className="flex gap-[32px] ">
        <a href="https://twitter.com/theartisanmrkt">
          <li>
            <img src={TwitterIcon} alt="Twitter Icon" />
          </li>
        </a>
        <a href="https://twitter.com/theartisanmrkt">
          {" "}
          <li>
            <img src={LinkedinIcon} alt="LinkedinIcon" />
          </li>
        </a>
      </ul>
      <div className=" items-center text-[14px] flex-auto flex-wrap flex w-[400px] gap-[10px] mb-[32px] ">
        <li  >Terms and Conditions</li>
        <li>Privacy Policy</li>
        <li>Partnerships</li>
      </div>
    </div>
  </div>
);
export default Footer;

const FooterLink = (props) => {
  return (
    <div className="flex flex-col gap-[16px] w-[160px] md:mb-[10px] mb-[20px] ">
      <h3 className=" text-[16px] text-[#98A2B3] ">{props.title}</h3>
      <ul className=" flex flex-col gap-[12px] ">{props.links}</ul>
    </div>
  );
};
