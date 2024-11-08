interface Config {
	DEFAULT_PROFILE_PICTURE:string;
	BASE_URL: string;
	MAPBOX_TOKEN:string
}

const config: Config = {
	DEFAULT_PROFILE_PICTURE: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
	BASE_URL:"http://127.0.0.1:8000",
	MAPBOX_TOKEN: "pk.eyJ1IjoidWJlcmZvb3RzIiwiYSI6ImNtMzdvOWxlMzBoancyaXB2Mjkyczhrc2oifQ.qqcU1llAxXSp55tiomRuZw",
};

export default config;
