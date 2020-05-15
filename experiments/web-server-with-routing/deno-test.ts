// Import file i/o methods.
import { readFileStr, writeFileStr } from "https://deno.land/std/fs/mod.ts";

const main = async () => {
  // Read the file.
  let text = await readFileStr("characters.txt");

  // Hit API.
  const stCharacters = await fetch(
    `https://swapi.co/api/people/${Deno.args[1]}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    },
  );

  let stCharactersData = await stCharacters.json();

  // Write a .txt file.
  await writeFileStr("characters.txt", `${text}, ${stCharactersData.name}`);

  text = await readFileStr("characters.txt");

  return;
};

main();
