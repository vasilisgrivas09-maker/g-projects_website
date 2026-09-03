import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

type SiteChromeProps = {
  children: ReactNode;
  /** Opaque navbar (inner pages). Homepage keeps transparent-over-hero. */
  solidNav?: boolean;
  /** Extra classes on the main landmark */
  mainClassName?: string;
};

export default function SiteChrome({
  children,
  solidNav = false,
  mainClassName = "",
}: SiteChromeProps) {
  return (
    <>
      <Navbar solid={solidNav} />
      <main
        id="main-content"
        tabIndex={-1}
        className={`${mainClassName} focus:outline-none`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
