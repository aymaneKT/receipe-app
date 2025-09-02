export default function Footer() {
  return (
    <footer className="bg-[#fdf7f2] border-t border-[#E5E7EB] mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-[Pacifico] text-[#FBD6BC]">
            🍴 MyRecipes
          </h2>
          <p className="text-gray-600 mt-2">
            Share and discover new recipes every day.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Navigation
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="/" className="hover:text-[#FBD6BC] transition">
                Home
              </a>
            </li>
            <li>
              <a href="/recipes" className="hover:text-[#FBD6BC] transition">
                Recipes
              </a>
            </li>
            <li>
              <a href="/add" className="hover:text-[#FBD6BC] transition">
                Add Recipe
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#FBD6BC] transition">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Follow Us
          </h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="text-gray-500 hover:text-[#FBD6BC] transition"
            >
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[#FBD6BC] transition"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[#FBD6BC] transition"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white border-t border-[#E5E7EB] text-center py-4 text-gray-500 text-sm">
        © 2025 MyRecipes - All rights reserved
      </div>
    </footer>
  );
}
