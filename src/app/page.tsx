import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
//import styles from './page.module.css'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-center m-5">
      <h1 className="text-2xl p-5">Hello World from Abdul Kabeer!</h1>
      <Link className="border-2 border-blue-400 px-3 py-2 rounded-lg hover:bg-slate-700" href="/name">Name Page</Link>
    </div>
  );
}