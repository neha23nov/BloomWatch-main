import React from "react";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-green-600 text-2xl">✱ BloomWatch</div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-green-600 font-medium" : "text-gray-600 hover:text-gray-900"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/3d-map"
            className={({ isActive }) =>
              isActive ? "text-green-600 font-medium" : "text-gray-600 hover:text-gray-900"
            }
          >
            3D Map
          </NavLink>

          <NavLink
            to="/phenology-trends"
            className={({ isActive }) =>
              isActive ? "text-green-600 font-medium" : "text-gray-600 hover:text-gray-900"
            }
          >
            Phenology Trends
          </NavLink>

          <NavLink
            to="/ai-detection"
            className={({ isActive }) =>
              isActive ? "text-green-600 font-medium" : "text-gray-600 hover:text-gray-900"
            }
          >
            AI Detection
          </NavLink>

          <NavLink
            to="/predictive-analytics"
            className={({ isActive }) =>
              isActive ? "text-green-600 font-medium" : "text-gray-600 hover:text-gray-900"
            }
          >
            Predictive Analytics
          </NavLink>

          <NavLink
            to="/alerts"
            className={({ isActive }) =>
              isActive ? "text-green-600 font-medium" : "text-gray-600 hover:text-gray-900"
            }
          >
            Alerts
          </NavLink>

          <NavLink
            to="/conservation"
            className={({ isActive }) =>
              isActive ? "text-green-600 font-medium" : "text-gray-600 hover:text-gray-900"
            }
          >
            Conservation
          </NavLink>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:text-gray-900">Sign In</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
