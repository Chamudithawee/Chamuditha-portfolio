import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav className="bg-white/30 backdrop-blur-md shadow-md rounded-b-lg">
      <div className="container mx-auto px-4 py-4 flex gap-4">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="font-medium hover:underline">
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
