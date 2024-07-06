"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Aeona from "@/public/assets/images/Nature_Aeona.png";
import { motion } from "framer-motion";

function JoinWaitlist() {
	return (
		<div className="h-full mx-14 border-x border-neutral-400">
			<div className="pt-8 flex flex-col justify-center items-center">
				<h1 className="text-3xl font-semibold">Join the waitlist!</h1>

				<div className="flex gap-4 mt-4">
					<Input type="text" placeholder="Enter your email" className="border-slate-600"/>
					<Button variant="default">
						Button
					</Button>
				</div>
			</div>
			<div className="relative h-[28rem] pt-8 mt-8">
				<motion.div
					animate={{ y: -32 }}
					transition={{
						ease: "easeInOut",
						duration: 2,
						repeat: Infinity,
						repeatType: "mirror",
					}}
					className="h-full"
				>
					<Image src={Aeona} alt="Aeona" fill objectFit="contain" />
				</motion.div>
				<div className="absolute inset-0 shadow-[inset_0px_-50px_56px_24px_#000] z-2" />
			</div>
		</div>
	);
}

export default JoinWaitlist;
