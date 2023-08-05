import { Inter } from "next/font/google";
import { HomePage } from "@/components/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
      />
      <HomePage />
    </div>
  );
}
