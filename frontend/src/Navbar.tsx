//Navbar function

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Joel Hilton's Website
      </a>
      <ul>
        <li>
          <a href="/podcast">My Podcast</a>
        </li>
        <li>
          <a href="/movies">Movies</a>
        </li>
      </ul>
    </nav>
  );
}
