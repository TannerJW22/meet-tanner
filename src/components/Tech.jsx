import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 1,
		rootMargin: "0px 0px -90% 0px",
	});

	return (
		<>
			<div className="flex flex-col items-center text-center gap-4">
				<div variants={textVariant()}>
					<p className={`${styles.sectionSubText} `}>My Core</p>
					<h2 className={`${styles.sectionHeadText}`}>Technologies.</h2>
				</div>

				<div className="mt-10 flex flex-row flex-wrap justify-center gap-10" ref={ref}>
					{technologies.map((technology, i) => (
						<motion.div
							variants={fadeIn("up", "spring", i * 0.16, 0.75)}
							initial={{ opacity: 0 }}
							animate={{ opacity: inView ? 1 : 0 }}
							key={technology.name}
						>
							<div className="w-28 h-28">
								<img className="h-28" src={technology.icon} alt={technology.name} />
								<div>{technology.name}</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</>
	);
};

export default SectionWrapper(Tech, "");
