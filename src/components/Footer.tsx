import { FaLinkedin, FaYoutube, FaDiscord, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  const today = new Date();
  const currentYear = today.getFullYear();
  return (
    <footer className="flex flex-col items-center justify-center space-y-4 p-4 border-t-2 bg-white dark:bg-black">
      <div className="flex justify-center space-x-6">
        <Link
          href="https://x.com/FrancescoCiull4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-black dark:text-white hover:text-black hover:scale-125 transform transition duration-400"
        >
          <FaXTwitter />
        </Link>
        <Link
          href="https://www.linkedin.com/in/francesco-ciulla-roma/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-black dark:text-white hover:text-blue-900 hover:scale-125 transform transition duration-400"
        >
          <FaLinkedin />
        </Link>

        <Link
          href="https://www.youtube.com/@francescociulla"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-black dark:text-white hover:text-red-600 hover:scale-125 transform transition duration-400"
        >
          <FaYoutube />
        </Link>

        <Link
          href="https://www.instagram.com/francescociull4/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-black dark:text-white hover:text-pink-500 hover:scale-125 transform transition duration-400"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://www.threads.net/@francescociull4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-black dark:text-white hover:text-black hover:scale-125 transform transition duration-400"
        >
          <FaThreads />
        </Link>
      </div>
      <div className="text-black dark:text-white sm:flex sm:items-center sm:justify-center gap-3">
        <span className="sm:text-center gap-2 lg:flex lg:items-center lg:justify-center sm:block md:flex text-xs">
          <p className="gap-2">&copy; {currentYear}</p>
          <Link
            href="https://app.daily.dev/squads/rustdevs"
            className="hover:underline"
          >
            Rustcrab
          </Link>
          <p>All Rights Reserved.</p>
        </span>
      </div>
    </footer>
  );
}
