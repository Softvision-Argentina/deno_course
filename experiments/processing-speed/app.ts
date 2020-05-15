/**
 * This is an example of a server that utilizes the router.
 */
import {
  green,
  cyan,
  bold,
  yellow,
} from "https://deno.land/std/fmt/colors.ts";

import {
  Application,
  Context,
  Router,
  Status,
} from "https://deno.land/x/oak/mod.ts";

import { writeJson } from "https://deno.land/std/fs/mod.ts";

function notFound(context: Context) {
  context.response.status = Status.NotFound;
  context.response.body = "<html><body><h1>404 - Not Found</h1><p>Path " +
    `<code>${context.request.url}</code> not found.`;
}

// Constants.
// External API (SWAPI - The Star Wars API).
const API_URL = "https://swapi.dev/api";
const router = new Router();

router
  .get("/", (ctx) => {
    ctx.response.status = 200;
    ctx.response.body = {
      message: "Hello world!",
    };
  })
  .get("/people", async (ctx) => {
    // Request people.
    const people = await fetch(`${API_URL}/people`)
      .then((response) => response.json())
      .catch((error) => {
        console.error("There was an error requesting people:", error);
      });

    // Return the fetched people.
    ctx.response.status = 200;
    ctx.response.body = people;
  })
  .get("/people/:id", async (ctx) => {
    // Request people.
    const people = await fetch(`${API_URL}/people/${ctx.params.id}`)
      .then((response) => response.json())
      .catch((error) => {
        console.error("There was an error requesting a person by id:", error);
      });

    // Return the fetched person.
    ctx.response.status = 200;
    ctx.response.body = people;
  })
  .post("/people", async (ctx) => {
    const { value } = await ctx.request.body();

    // Write a json file.
    await writeJson("./people.json", value);

    ctx.response.status = 200;
    ctx.response.body = {
      message: "People in The Star Wars World has been successfully updated.",
    };
  });

const app = new Application();

// Error handling.
app.addEventListener("error", (evt) => {
  // Will log the thrown error to the console.
  console.log(evt.error);
});

// Logger.
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(
    `${green(String(ctx.request.method))} ${cyan(String(ctx.request.url))} ` +
      `${bold(String(ctx.response.status))} - ${bold(String(rt))}`,
  );
});

// Response Time.
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms} ms`);
});

// Use the router.
app.use(router.routes());
app.use(router.allowedMethods());

// A basic 404 page.
app.use(notFound);

const port = 8000;
console.log(`${bold("Sample app listening on port:")} ${yellow(String(port))}`);
await app.listen({ port });
console.log(bold("Finished."));
