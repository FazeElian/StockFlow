import { CorsOptions } from "cors";

export const CORSConfig : CorsOptions = {
    origin: function (origin, callback) {
        const whiteList = [process.env.VITE_URL]

        if (process.argv[2] === "--api"){
            whiteList.push(undefined);
        }

        if (whiteList.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("CORS Error"));
        }
    }
}