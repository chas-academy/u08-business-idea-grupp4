import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-4">
      <div className="container mx-auto flex flex-col items-center justify-between">
        <div className="flex flex-row w-2/4 justify-between">
          <div className="">
            <h2 className="text-gray-300 font-bold">Company</h2>
            <ul className="mt-1">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-gray-400 text-xs"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-gray-400 text-xs"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-gray-300 font-bold">Legal</h2>
            <ul className="mt-1">
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-300 hover:text-gray-400 text-xs"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-300 hover:text-gray-400 text-xs"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 text-xs mt-4">
          &copy; Tasteful 2023 - All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
