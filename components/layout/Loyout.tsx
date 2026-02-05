// import { Footer } from "./Footer";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-pattern-bg isolate flex min-h-screen flex-col">
      <div className="pointer-events-none fixed inset-0 -z-10 flex justify-center bg-linear-to-br bg-gradient-to-br from-black via-[#2d1810] to-[#4a2618]"></div>

      <Header />
      <main className="relative flex-1" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
