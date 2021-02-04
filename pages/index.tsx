import Head from "next/head";
import Header from "../components/header";
export default function Home() {
  return (
    <div>
      <Head>
        <title>TESTO</title>
      </Head>
      <main>
        <Header />
      </main>
    </div>
  );
}
