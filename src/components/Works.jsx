import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { FiExternalLink } from "react-icons/fi";

export const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	prod_link,
}) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<div className="bg-tertiary p-5 rounded-2xl min-w-[360px] max-w-[360px] min-h-[525px] max-h-[525px]">
				<div className="relative h-[230px]">
					<img
						src={image}
						alt="project_image"
						className="w-full h-full object-cover rounded-2xl opacity-90"
					/>

					<div className="flex gap-2 absolute inset-0 justify-end m-3 card-img_hover">
						<div
							onClick={() => window.open(prod_link, "_blank")}
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-[1.10]"
						>
							<FiExternalLink className="w-[60%] h-[60%] object-contain" />
						</div>
						<div
							onClick={() => window.open(source_code_link, "_blank")}
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-[1.10]"
						>
							<img src={github} alt="source code" className="w-[80%] h-[80%] object-contain" />
						</div>
					</div>
				</div>

				<div className="mt-5 w-[95%]">
					<h3 className="text-white font-bold text-[24px]">{name}</h3>
					<p className="whitespace-normal mt-2 text-secondary text-[14px]">{description}</p>
				</div>

				<div className="sm:min-w-[360px] mt-4 flex flex-wrap gap-2">
					{tags.map(tag => (
						<p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
							#{tag.name}
						</p>
					))}
				</div>
			</div>
		</motion.div>
	);
};

// :::
const Works = () => {
	return (
		<>
			<div variants={textVariant()} className="flex flex-col items-center">
				<p className={`${styles.sectionSubText} `}>My Sandbox</p>
				<h2 className={`${styles.sectionHeadText}`}>Portfolio.</h2>
			</div>

			<div className="w-full flex justify-center">
				<p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
					My self-study journey has been a strategically diverse learning path. I use my portfolio
					as a sandbox where I can experiment with different technologies and solve complex
					problems. Whenever possible, I enjoy diving in head first and getting my hands dirty.
				</p>
			</div>

			<div className="mt-12 flex flex-wrap justify-center gap-7 min-w-[360px]">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "");
