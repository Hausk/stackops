import { showRoutes } from "hono/dev";
import { createApp } from "honox/server";

const app = createApp();

showRoutes(app);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
