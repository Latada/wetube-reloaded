import express from "express";
import morgan from "morgan"; // middleware를 직접 만들지 않고 대신 설치해서 사용
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;
const app = express();
const logger = morgan("dev");
app.use(logger); // app.use()의 위치가 중요함

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Server listening on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
