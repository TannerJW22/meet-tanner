import React, { useState } from "react";
import { github, linkedin, gmail, copyIcon, checkmark } from "../assets";
import { gmailIconStyle } from "../styles";

const Contact = () => {
	const [triggerCopy, setTriggerCopy] = useState(false);
	const [currentIcon, setCurrentIcon] = useState(gmail);

	return (
		<div className="flex gap-4 mr-24">
			<div
				onClick={() => window.open("https://github.com/TannerJW22", "_blank")}
				className="bg-zinc-900 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-[1.10]"
			>
				<img src={github} alt="github" className="w-[80%] h-[80%] object-contain" />
			</div>
			<div
				onClick={() => window.open("https://www.linkedin.com/in/tannerjwhite/", "_blank")}
				className="bg-zinc-900 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-[1.10]"
			>
				<img src={linkedin} alt="linkedin" className="w-[100%] h-[100%] object-contain" />
			</div>
			<div
				onClick={() => {
					if (triggerCopy === false) {
						setCurrentIcon("");
						setTriggerCopy(true);
						setCurrentIcon(copyIcon);
					}
					if (triggerCopy === true && currentIcon === copyIcon) {
						navigator.clipboard.writeText("tannerwhite92@gmail.com");
						setCurrentIcon(checkmark);
					}
					if (triggerCopy === true && currentIcon === checkmark) {
						setTriggerCopy(false);
						setCurrentIcon(gmail);
					}
				}}
				className={triggerCopy ? gmailIconStyle.onClick : gmailIconStyle.base}
			>
				<img
					src={currentIcon}
					alt=""
					className={
						triggerCopy
							? "hidden xs:block h-[65%] absolute right-4"
							: "w-[100%] h-[100%] object-contain"
					}
				/>
			</div>
		</div>
	);
};

export default Contact;
