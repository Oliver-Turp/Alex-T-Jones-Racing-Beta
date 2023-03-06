import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <section className="footer-row">
        <section className="footer-copyRight">&copy; Alex Jones - 2022</section>
        <section className="footer-links">
          <Link href="">Privacy Policy</Link>
          <Link href="">Sitemap</Link>
          <Link href="">Page</Link>
          <Link href="">Page</Link>
        </section>
        <section className="footer-socials">
          <Link href="#">
            <FontAwesomeIcon icon={faSquareFacebook} />
          </Link>
          <Link href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link href="#">
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
          <Link href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </section>
      </section>
      <section className="footer-row">
        <p>
          Website By{" "}
          <Link className="footer-OT" href="#">
            Oliver Turp
          </Link>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
