import express from "express";

const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
  console.log("Somebody is trying to go home");
  return res.send("<h1>전송완료</h1>");
};
const handleLogin = (req, res) => {
  console.log("로그인을 시도합니다.");
  return res.send("로그인하세요.");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
