import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send(`준비중이에오. 언제 완성될지 몰라오 🦄 <br> 혹시모르니까 <a href="/login">여기</a> 에 들어와보세오`);
}
const handleLogin = (req, res) => {
  return res.send(`로그인페이지에오. 여기도 아직 준비중이에오 🙈 <br> 다시 <a href="/">홈</a>으로 돌아가세오`);
}

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(`🙌🏻 서버가 http://localhost:${PORT} 에서 듣고있어요! 🚀`);

app.listen(4000, handleListening);