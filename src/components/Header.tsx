export default function Header() {
  return (
    <header className="p-4 bg-gray-100 border-b">
      <nav className="flex gap-6">
        <a href="/">Főoldal</a>
        <a href="/about">Rólam</a>
        <a href="/contact">Kapcsolat</a>
      </nav>
    </header>
  );
}
