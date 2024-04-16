import { Link } from "react-router-dom"
import Navigation from "./Navigation"

const Header = () => {
  const handleSignOut = (e) => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.replace('/');
  }

  return (
    <header>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <Link to={'/contacts/'} className="text-2xl font-bold text-gray-900 sm:text-3xl">Home</Link>

            <p className="mt-1.5 text-sm text-gray-500">Let's manage our contacts! 🎉</p>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <Link
              className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
              to="/contacts/add"
            >
              Create Contact
            </Link>
            <button onClick={handleSignOut} className="block rounded-lg bg-slate-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700 focus:outline-none focus:ring" type="button">Sign out</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header