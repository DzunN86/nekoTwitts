import Head from "next/head";
import Feeds from "../components/Feeds";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Nekotwitt</title>
        <link rel="icon" href="/logo-nekotwitt.svg" />
      </Head>
      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <Feeds />
        {/* Widgets */}

        {/* Modal */}
      </main>
    </div>
  );
}
