import { Stack, Typography, Button } from "@mui/material";
import Login from "../../components/Buttons/Login";
// import WavingHand from "../../components/Animations/WavingHand";
import { motion } from "framer-motion";

const WavingHand = () => {
	return (
		<motion.div
			style={{
				marginBottom: "-20px",
				marginRight: "-45px",
				paddingBottom: "20px",
				paddingRight: "45px",
				display: "inline-block",
			}}
			animate={{ rotate: [-20, 0, 20] }}
			transition={{
				repeat: Infinity,
				from: 0,
				duration: 5,
				ease: "easeInOut",
				type: "tween",
			}}
		>
			👋
		</motion.div>
	);
};

const Hi = () => (
	<h1>
		Hi <WavingHand /> !
	</h1>
);

const Landing = ({ nextStp, goWeather }) => {
	let hash = window.location.hash;

	return (
		<Stack gap={0} sx={{ alignItems: "center", margin: "auto" }}>
			{!hash && (
				<>
					<Hi />
					<Typography variant="h3">Welcome to Played </Typography>
					<Typography
						variant="body1"
						sx={{ fontSize: "18px", fontWeight: "Medium" }}
					>
						Login with Spotify to get started
					</Typography>
					<Login />
				</>
			)}
			{hash && (
				<>
					<Typography variant="body1">
						Logged In Successfully!
					</Typography>
					<Button
						onClick={nextStp}
						variant="contained"
						sx={{ width: "100%" }}
					>
						Next
					</Button>
					<Button
						onClick={goWeather}
						variant="contained"
						sx={{ width: "100%" }}
					>
						Suggest a Playlist!
					</Button>
				</>
			)}
		</Stack>
	);
};

export default Landing;
