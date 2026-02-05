export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pattern-shadow/30 border-pattern-accent/10 relative w-full border-t">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center sm:h-20">
          <p className="text-center text-sm text-white sm:text-base">
            © {currentYear} LenyOleny. Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
}
