import { useEffect, useState } from "react";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";

const ButtonToScrollTop = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [scrollProgress, setScrollProgress] = useState<number>(0);

	const handleScroll = () => {
		const scrollY = window.scrollY;
		const docHeight =
			document.documentElement.scrollHeight - window.innerHeight;
		const progress = (scrollY / docHeight) * 100;
		setScrollProgress(progress);

		if (scrollY > 100) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<Box
			style={{
				position: "fixed",
				bottom: "2rem",
				right: "2rem",
				display: isVisible ? "block" : "none",
			}}
		>
			<Fab
				color="default"
				aria-label="scroll-to-top"
				onClick={scrollToTop}
				className="progress-border"
				
			>
				<KeyboardArrowUpIcon />
				<CircularProgress
					variant="determinate"
					value={scrollProgress}
					size={56}
					thickness={3}
                    color="primary"
					style={{
						position: "fixed",
						bottom: "2rem",
						right: "2rem",
					}}
				/>
			</Fab>
		</Box>
	);
};

export default ButtonToScrollTop;
