import localFont from "next/font/local";
import { useEffect, useState } from "react";
import { getVersion_ } from "@/lib/utils";
import Card from "@/components/card";
import { Header } from "@/components/ui/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [_version, setVersion] = useState<string | null>(null);

  useEffect(() => {
    getVersion_().then(setVersion);
  });

  return (
    <div className={`${geistSans.className} ${geistMono.className} grid p-8 gap-8`}>
      {/* <Card title="EfiTools">
        <p>
          v{_version} - <span className="italic">Pierre</span>
        </p>
      </Card> */}
      <Header />
      <div className="grid grid-cols-3 gap-8">
        <Card title="AtlasOS" description={`Is using AtlasOS : ${false}`}></Card>
      </div>
    </div>
  );
}
