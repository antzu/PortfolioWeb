const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.get("/projects", (req, res) => {
	res.send([
		{
			id: 1,
			title: "Project 1",
			description:
				"See on minu esimene projekt. See on minu esimene projekt. See on minu esimene projekt. See on minu esimene projekt. See on minu esimene projekt."
		},
		{
			id: 2,
			title: "Project 2",
			description:
				"See on minu esimene projekt. See on minu esimene projekt. See on minu esimene projekt. See on minu esimene projekt. See on minu esimene projekt."
		},
		{
			id: 3,
			title: "Project 3",
			description:
				"See on minu esimene projekt. See on minu esimene projekt. See on minu esimene projekt. See on minu esimene projekt. See on minu esimene projekt."
		},
		{
			id: 4,
			title: "Project 4",
			description:
				"See on minu esimene projekt. See on minu esimene projekt. See on minu esimene projekt. See on minu esimene projekt. See on minu esimene projekt."
		}
	]);
});

app.listen(3090, () => console.log("Example app listening on port 3090!"));
