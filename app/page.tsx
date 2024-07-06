import Footer from "@/components/Footer";
import JoinWaitlist from "@/components/JoinWaitlist";
import Image from "next/image";

export const metadata = {
  description: 'Swap.',
  openGraph: {
    type: 'website'
  }
};

export default function Home() {
  return (
    <>
      <JoinWaitlist />
      <Footer/>
    </>
  );
}
