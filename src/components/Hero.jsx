import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
	return (
		<section className={`relative w-full custom-height mx-auto mb-10`}>
			<div
				className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-theme" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>

				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi, I'm <span className="text-theme">Tanner</span>
					</h1>
					<p className={`${styles.heroSubText} mt-3`}>
						a full stack React developer with <br className="sm:block hidden" />
						exposure to many backend paradigms
					</p>
					<p className={`${styles.heroMinorText} mt-6`}>
						I'm self-taught and seeking a position where I
						<br className="sm:block hidden" />
						can grow and master a React-based tech stack
					</p>
				</div>
			</div>

			<div className="absolute xs:bottom-10 bottom-32 mb-[10vh] w-full flex justify-center items-center">
				<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
					<motion.div
						animate={{
							y: [0, 24, 0],
						}}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							repeatType: "loop",
						}}
						className="w-3 h-3 rounded-full bg-secondary mb-1"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
