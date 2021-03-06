/**
 * This is an example of a server that utilizes the router.
 */
// Importing some console colors
import {
  green,
  cyan,
  bold,
  yellow,
} from "https://deno.land/std@v0.17.0/fmt/colors.ts";

import {
  Application,
  Context,
  Router,
  Status,
} from "https://deno.land/x/oak/mod.ts";

import { readFileStr, writeFileStr } from "https://deno.land/std/fs/mod.ts";

function notFound(context: Context) {
  context.response.status = Status.NotFound;
  context.response.body =
    `<html><body><h1>404 - Not Found</h1><p>Path <code>${context.request.url}</code> not found.`;
}

(async () => {
  const router = new Router();
  router
    .get("/", (context, next) => {
      context.response.body = "Hello world!";
    })
    .get("/read", async (context, next) => {
      const text = await readFileStr("characters.txt");
      context.response.body = text;
    })
    .get<{ param: string }>("/write/:param", async (context, next) => {
      await writeFileStr("characters.txt", context.params.param);
      const text = await readFileStr("characters.txt");
      context.response.body = text;
    });

  const app = new Application();

  // Logger
  app.use(async (context, next) => {
    await next();
    const rt = context.response.headers.get("X-Response-Time");
    console.log(
      `${green(context.request.method)} ${cyan(context.request.url)} - ${
        bold(
          String(rt),
        )
      }`,
    );
  });

  // Response Time
  app.use(async (context, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    context.response.headers.set("X-Response-Time", `${ms}ms`);
  });

  // Use the router
  app.use(router.routes());
  app.use(router.allowedMethods());

  // A basic 404 page
  app.use(notFound);

  const address = "127.0.0.1:8000";
  console.log(bold("Start listening on ") + yellow(address));
  await app.listen(address);
  console.log(bold("Finished."));
})();
