import Header from "../components/Header";
import Footer from "./Footer";
import { Providers } from "@/src/store/provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="font-lexend">
      <Providers>
        <Header />
        {children}
        <Footer />
      </Providers>
    </section>
  );
}
