export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">
            © {currentYear} Mitchell Keo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

