export function Footer() {
  return (
    <footer className="bg-[#0a0a0f] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d9ff] to-transparent opacity-50" />

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Aldrich Zebua. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
