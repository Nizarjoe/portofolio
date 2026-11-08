// Portfolio Muhammad Nizar Asagaf — Express + JSON DB + Admin Dashboard
const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const DATA = path.join(__dirname, "data");
const UP = path.join(__dirname, "public", "uploads");
if (!fs.existsSync(UP)) fs.mkdirSync(UP, { recursive: true });

const read = (f, d) => { try { return JSON.parse(fs.readFileSync(path.join(DATA, f))); } catch { return d; } };
const write = (f, d) => fs.writeFileSync(path.join(DATA, f), JSON.stringify(d, null, 2));

const store = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UP),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname.replace(/\s+/g, "-"))
});
const upload = multer({ storage: store });

app.use(express.json({ limit: "10mb" }));
app.use(express.static(path.join(__dirname, "public")));

// ---- AUTH (username-only, seperti kebiasaan kamu) ----
const USERS = { admin: "admin", superadmin: "superadmin" };
app.post("/api/login", (req, res) => {
  const { username, password } = req.body || {};
  if (USERS[username] && USERS[username] === password) return res.json({ ok: true, username });
  res.status(401).json({ ok: false, message: "Username/password salah" });
});
const auth = (req, res, next) => {
  const t = req.headers["x-auth"];
  if (t && USERS[t]) return next();
  res.status(401).json({ ok: false });
};

// ---- SECTIONS: works (graphic/photo/cert/research), videos, news, profile ----
const SECTIONS = ["graphic", "photo", "cert", "research"];

app.get("/api/works/:sec", (req, res) => res.json(read(req.params.sec + ".json", [])));
app.post("/api/works/:sec", auth, upload.single("file"), (req, res) => {
  const list = read(req.params.sec + ".json", []);
  const item = {
    id: Date.now().toString(),
    title: req.body.title || "Untitled",
    meta: req.body.meta || "",
    desc: req.body.desc || "",
    link: req.body.link || "",
    file: req.file ? "/uploads/" + req.file.filename : ""
  };
  list.unshift(item);
  write(req.params.sec + ".json", list);
  res.json({ ok: true, item });
});
app.delete("/api/works/:sec/:id", auth, (req, res) => {
  const list = read(req.params.sec + ".json", []).filter(x => x.id !== req.params.id);
  write(req.params.sec + ".json", list);
  res.json({ ok: true });
});

// videos (YouTube)
app.get("/api/videos", (req, res) => res.json(read("videos.json", [])));
app.post("/api/videos", auth, (req, res) => {
  const list = read("videos.json", []);
  const v = { id: Date.now().toString(), title: req.body.title || "", url: req.body.url || "", desc: req.body.desc || "", client: req.body.client || "", role: req.body.role || "", year: req.body.year || "" };
  list.unshift(v); write("videos.json", list); res.json({ ok: true, item: v });
});
app.delete("/api/videos/:id", auth, (req, res) => {
  write("videos.json", read("videos.json", []).filter(x => x.id !== req.params.id));
  res.json({ ok: true });
});

// news
app.get("/api/news", (req, res) => res.json(read("news.json", [])));
app.post("/api/news", auth, (req, res) => {
  const list = read("news.json", []);
  const n = { id: Date.now().toString(), kind: req.body.kind || "Studio Note", title: req.body.title || "", body: req.body.body || "", date: new Date().toISOString().slice(0, 10) };
  list.unshift(n); write("news.json", list); res.json({ ok: true, item: n });
});
app.delete("/api/news/:id", auth, (req, res) => {
  write("news.json", read("news.json", []).filter(x => x.id !== req.params.id));
  res.json({ ok: true });
});

// profile
app.get("/api/profile", (req, res) => res.json(read("profile.json", {})));
app.put("/api/profile", auth, (req, res) => { write("profile.json", req.body || {}); res.json({ ok: true }); });

// seed
if (!fs.existsSync(path.join(DATA, "profile.json"))) write("profile.json", {
  name1: "Muhammad", name2: "Nizar Asagaf",
  tagline: "Sains Data | Web Developer | Creative",
  about: "Mahasiswa Sains Data yang suka membangun hal digital: web, data, dan konten kreatif. Terbuka untuk kolaborasi & proyek remote!",
  email: "", wa: "", ig: "", github: "https://github.com/Nizarjoe", linkedin: ""
});
SECTIONS.forEach(s => { const f = path.join(DATA, s + ".json"); if (!fs.existsSync(f)) write(s + ".json", []); });
if (!fs.existsSync(path.join(DATA, "videos.json"))) write("videos.json", []);
if (!fs.existsSync(path.join(DATA, "news.json"))) write("news.json", [
  { id: "1", kind: "Halo!", title: "Portfolio baru saja launching 🚀", body: "Selamat datang di portofolioku. Semua karya akan aku tampilkan di sini — grafis, foto, video, sampai riset.", date: new Date().toISOString().slice(0, 10) }
]);

app.listen(PORT, () => console.log("Portfolio running on :" + PORT));
