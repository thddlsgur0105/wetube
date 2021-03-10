import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
// import bodyParser from "body-parser";


const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from Home daniel!!");


const handleProfile = (req, res) => res.send("You are on my profile.");

app.use(cookieParser());
// app.use(express.bodyParser.json());
// app.use(express.bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(morgan("dev"));
app.use(helmet());

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
// app.get('/', function(req, res) {
//   res.send('hello world');
// });
