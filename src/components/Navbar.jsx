import { Link } from "react-router-dom";

function Navbar() {
  const navigations = [
    {
      id: 1,
      href: "/",
      name: "Accueil",
    },
    {
      id: 2,
      href: "#",
      name: "Lorem ipsum",
    },
    {
      id: 3,
      href: "/contact",
      name: "Contact",
    },
  ];

  return (
    <header className="flex justify-around	">
      <img src="../../public/icon_volume.png" alt="logo" />
    </header>
  );
}

export default Navbar;
