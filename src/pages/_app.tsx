import Layout from "../components/layout";
import "tailwindcss/tailwind.css";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
