import axios from "axios";

const clientID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const redirect = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
const scopes = import.meta.env.VITE_SPOTIFY_SCOPES;

const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientID}&scope=${scopes}&redirect_uri=${redirect}`;

async function getAuth() {
	const { data } = await axios.get(url);
	return data;
}

export default getAuth;
