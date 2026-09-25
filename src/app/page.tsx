import Banner from "@/components/shared/Banner";
import Image from "next/image";

import CardSection from "@/components/CardComponents/CardSection";



export default function Home() {
    return (
      <div className={` bg-gray-950`}>
        <Banner></Banner>
        <CardSection></CardSection>
        
      </div>
  );
}
