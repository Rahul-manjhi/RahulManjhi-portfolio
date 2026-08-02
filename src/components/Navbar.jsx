function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-800 bg-opacity-70 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold text-purple-400">Welcome to my portfolio</h1>
      <ul className="flex gap-6">
        <li><a href="#about" className="hover:text-purple-400">About</a></li>
        <li><a href="#skills" className="hover:text-purple-400">Skills</a></li>
        <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
