import { readFileStr, writeFileStr } from 'https://deno.land/std/fs/mod.ts';

const main = async () => {
    let text = await readFileStr('characters.txt');
    console.log(text);

    const stCharacters = await fetch(`https://swapi.co/api/people/${Deno.args[1]}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
    let stCharactersData = await stCharacters.json();
    await writeFileStr('characters.txt', `${text}, ${stCharactersData.name}`);

    text = await readFileStr('characters.txt');
    console.log(text);

      console.log(Deno.args)

    return;
};

main();