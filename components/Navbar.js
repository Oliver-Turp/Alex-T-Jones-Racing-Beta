import Link from "next/link";
import Image from "next/image";
import Logo from "../public/assets/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav>
      <section className="nav-logo">
        <Image src={Logo} />
      </section>
      <section className="nav-links">
        <Link href="#">ALEX</Link>
        <Link href="#">MAZDA</Link>
        <Link href="#">SHOP</Link>
        <Link href="#">MEDIA</Link>
        <Link href="#">CONTACT</Link>
      </section>
      <section className="nav-socials">
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
    </nav>
  );
};

export default Navbar;
