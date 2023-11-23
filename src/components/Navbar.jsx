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
			<img src="https://picsum.photos/100" alt="logo" />
			<nav className="flex">
				<ul className="flex items-center gap-4">
					{navigations.map((nav) => (
						<li key={nav.id}>
							<Link to={nav.href}>{nav.name}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
