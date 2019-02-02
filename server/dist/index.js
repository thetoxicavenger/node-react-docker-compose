"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
// Constants
const PORT = process.env.PORT || 8080;
const HOST = "0.0.0.0";
const CLIENT_BUILD_PATH = path_1.default.join(__dirname, "../../client/build");
// App
const app = express_1.default();
// Static files
app.use(express_1.default.static(CLIENT_BUILD_PATH));
app.use(cors_1.default());
// API
app.get("/api/posts", (req, res) => {
    res.set("Content-Type", "application/json");
    const data = {
        data: [
            {
                author: "Francesco Pascuzzi",
                blurb: "Here's the Blurb, Blurbie.",
                // tslint:disable-next-line:max-line-length
                body: "Officia aute exercitation irure elit sunt exercitation incididunt laborum nulla aliqua dolore incididunt. Proident commodo irure irure elit sunt laboris eu sunt aute in nulla proident tempor. Consequat aliquip irure cupidatat sunt et est consequat ipsum ea exercitation ullamco quis reprehenderit. Aliqua ullamco mollit esse ex pariatur aliqua aute esse non. Velit ipsum laborum ipsum adipisicing non ad laboris officia est reprehenderit amet elit officia veniam.",
                created_at: Date.now(),
                id: 1,
                // tslint:disable-next-line:max-line-length
                img_url: "https://s3-us-west-2.amazonaws.com/cosmicjs/904baa10-e512-11e8-8e5b-8dee8d2d843b-a-star-is-born_ZKS5C0.jpg",
                title: "Sample Blog Post",
                updated_at: Date.now(),
            }
        ]
    };
    res.send(JSON.stringify(data, null, 2));
});
// All remaining requests return the React app, so it can handle routing.
app.get("*", (request, response) => {
    response.sendFile(path_1.default.join(CLIENT_BUILD_PATH, "index.html"));
});
app.listen(PORT, () => HOST);
//# sourceMappingURL=index.js.map