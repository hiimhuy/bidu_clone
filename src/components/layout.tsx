import Header from "../components/Header";
import Footer from "./Footer";
import { Providers } from "@/src/store/provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Providers>
        <Header />
        {children}
        <Footer />
      </Providers>
    </section>
  );
}
