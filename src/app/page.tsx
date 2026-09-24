import Banner from "@/components/shared/Banner";
import Image from "next/image";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
    return (
      <div className={`${oswald.className} bg-gray-950`}>
        <Banner></Banner>
      </div>
  );
}
