import "dotenv/config";
import "./db/connection.db.js";
import express from "express";
import cors from "cors";
import baseroute from "./routers/index.js";

const app = express();

const port = process.env.PORT || 3231;

const router = express.Router();

const routes = baseroute(router);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const baseurl = "/api/v1";

app.use(baseurl, routes);

app.use("*", (req, res) => {
	res.status(404).send({
		success: false,
		message: "Check postman for Route update"
	});
});

app.listen(port, () => {
	console.log(`listening on ${port} successfully`);
});
