import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full p-5 h-auto flex justify-between bg-blue-500 dark:bg-blue-950 dark:text-white text-white ">
      <Link to="/">
        <p>Ecommerce website project</p>
      </Link>
      <div className="flex gap-3">
        <a href="https://www.instagram.com/grown_up_kid__/" target="blank">
          instgram
        </a>
        <a
          href="https://www.linkedin.com/in/milton-vinciline-v-58b824205/"
          target="blank"
        >
          LinkdIn
        </a>
        <a
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=miltonvinciline08@gmail.com"
          target="blank"
        >
          Email
        </a>
      </div>
    </div>
  );
};

export default Footer;
