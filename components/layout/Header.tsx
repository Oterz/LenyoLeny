import Link from "next/link";
import { Logo } from "../ico/Logo";

export function Header() {
  return (
    <header className="fixed top-5 right-0 left-0 z-50 mx-4 flex justify-center sm:mx-6 lg:mx-8">
      <div className="bg-pattern-shadow/30 border-pattern-accent/10 w-full max-w-350 rounded-2xl border-b">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 text-orange-400">
              <Logo size={48} />
              <div className="flex items-center justify-center text-xl font-bold lg:text-2xl">
                LenyOLeny
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
