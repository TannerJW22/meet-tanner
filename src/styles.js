import { tailbreeze } from "tailbreeze";

const styles = {
	paddingX: "sm:px-16 px-6",
	paddingY: "sm:py-16 py-6",
	padding: "sm:px-16 px-6 sm:py-16 py-10",

	heroHeadText:
		"font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
	heroSubText:
		"text-[#dfd9ff] font-semibold lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
	heroMinorText:
		"text-theme font-normal italic lg:text-[23px] sm:text-[20px] xs:text-[15px] text-[12px] lg:leading-[30px]",

	sectionHeadText: "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
	sectionSubText: "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

const gmailIconStyle = {
	base: "bg-zinc-900 w-10 xs:h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-[1.10]",
	onClick: tailbreeze({
		base: "absolute xs:relative border bg-zinc-900 w-40 xs:w-64 h-8 xs:h-10 rounded-full flex items-center cursor-pointer",
		pseudo:
			"before:absolute before:left-3 before:text-[10px] before:xs:text-sm before:content-['tannerwhite92@gmail.com']",
		onClick: "duration-200",
	}),
};

export { styles, gmailIconStyle };
