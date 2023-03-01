import express from "express";

const PORT = 4000;
const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // middleware : req가 오고 res가 되기 전 중간 단계
};
const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>허용되지 않음</h1>");
  }
  console.log("허용되는 공간입니다");
  next();
};
const handleHome = (req, res) => {
  return res.send("<h1>전송완료</h1>");
};
const handleLogin = (req, res) => {
  console.log("로그인을 시도합니다.");
  return res.send("로그인하세요.");
};
const handleProtected = (req, res) => {
  return res.send("보호구역에 오신걸 환영합니다.");
};

app.use(logger);
app.use(privateMiddleware);

app.get("/", handleHome);
app.get("/login", handleLogin);
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log(`Server listening on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
