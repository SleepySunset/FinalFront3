import "../Styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p className="footer-text">Powered by</p>
        <img
          className="footer-dhlogo"
          src="../../public/images/DH.png"
          alt="DH-logo"
        />
      </div>
      <div className="footer-container">
        <ul className="footer-menu">
          <li>
            <a href="#">
              <img
                className="footer-icon"
                src="../../public/images/ico-facebook.png"
                alt="Facebook-logo"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className="footer-icon"
                src="../../public/images/ico-instagram.png"
                alt="Instagram-logo"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className="footer-icon"
                src="../../public/images/ico-whatsapp.png"
                alt="Whatsapp-logo"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className="footer-icon"
                src="../../public/images/ico-tiktok.png"
                alt="Tiktok-logo"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
