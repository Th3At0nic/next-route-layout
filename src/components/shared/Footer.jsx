"use client";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white text-center py-4 mt-auto">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
