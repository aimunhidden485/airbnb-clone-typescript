import Head from "next/head";
import Image from "next/image";
import { Nunito } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Modal from "@/components/modals/Modal";
import RegisterModal from "@/components/modals/RegisterModal";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Airbnb clone</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={nunito.className }>
				<div className="relative">
				<RegisterModal/>
				<Navbar/>
				</div>
			</main>
		</>
	);
}
