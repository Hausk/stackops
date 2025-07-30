import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("*", cors()); // autorise tout

app.get("/hello", (c) => c.text("Hello from backend"));

export default app;
