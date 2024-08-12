import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">常誓寺</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-300">ホーム</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">寺院について</Link></li>
          <li><Link to="/visit-info" className="hover:text-gray-300">参拝案内</Link></li>
          <li><Link to="/events" className="hover:text-gray-300">年中行事</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">お問い合わせ</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
