import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { vezra } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { FiExternalLink } from "react-icons/fi";

export const VezraCard = ({ tags, images }) => {
	return (
		<div className="flex flex-col gap-6 justify-center w-full">
			<div className="">
				<div className="mt-4 flex flex-wrap min-w-[100px] justify-center gap-2">
					{tags.map((tag, i) => (
						<p key={`vezra-${i}`} className={`text-[17px] ${tag.color}`}>
							#{tag.name}
						</p>
					))}
				</div>
				{/* <div className="flex gap-2 absolute inset-0 justify-end m-3 card-img_hover">
						<div
							onClick={() => window.open(prod_link, "_blank")}
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-[1.05]"
						>
							<FiExternalLink className="w-[60%] h-[60%] object-contain" />
						</div>
						<div
							onClick={() => window.open(source_code_link, "_blank")}
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-[1.05]"
						>
							<img src={github} alt="source code" className="w-[80%] h-[80%] object-contain" />
						</div>
					</div> */}
			</div>

			{/* <div className="w-full grid grid-cols md:grid-cols-2 lg:grid-cols-3 justify-center">
				{images.map((img, i) => (
					<div key={i} className="flex container w-full h-full p-4 hover:z-20 z-0">
						<img
							src={img}
							alt={img}
							className="h-full w-full rounded-2xl opacity-[85%] hover:opacity-100 md:hover:scale-[1.25] lg:hover:scale-[1.35] duration-300 shadow-lg hover:shadow-md hover:shadow-slate-900"
						/>
					</div>
				))}
			</div> */}
		</div>
	);
};

// :::
const Capstone = () => {
	return (
		<>
			<div variants={textVariant()} className="flex flex-col items-center">
				<p className={`${styles.sectionSubText} `}>My Current Project</p>
				<h2 className={`${styles.sectionHeadText}`}>Vezra.</h2>
			</div>

			<div className="w-full flex flex-wrap justify-center">
				<p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
					As part of my contract work with Kingston Hill Academy, I am building Vezra, a Student
					Information Management Platform that organizes student data, manages class rosters, tracks
					daily attendance, and more.
					<br className="mb-4" />
					Vezra is designed to fit their specific use case of a charter school with 260 students.
					Initial product planning and feature scope began in April 2023 and it is in the early
					stages of active development.
				</p>
			</div>

			<div className="w-full mt-4 flex gap-7">
				<VezraCard tags={vezra.tags} images={vezra.images} />
			</div>
		</>
	);
};

export default SectionWrapper(Capstone, "portfolio");
