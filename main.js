const get_Pokemon_Name = (number) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
    .then((res) => res.json())
    .then((data) => data.name);

//
const Blob_My_Image_Of_Pokemon = async (value) =>
  fetch(`https://cdn.traction.one/pokedex/pokemon/${value}.png`)
    .then((res) => res.blob())
    .then((data) => URL.createObjectURL(data));

//
const Reduce_Names_To_HTML = async (name) => {
  const holdLinks = [];

  for (let i = 0; i < name.length; i++) {
    holdLinks.push(await Blob_My_Image_Of_Pokemon(i + 1));
  }
  console.log(holdLinks, "HOLD LINKS");
  return name.reduce(
    (accumulate, nome, index) =>
      (accumulate += `
      <li>${nome} ${index + 1}<br/>
      <img src="${holdLinks[index]}" width="80">
      </li>
  `),
    ""
  );
};
const insert_Into_HTML = (data) => {
  return (document.querySelector(".names").innerHTML = data);
};
//
const init_Pokemons = (number) => {
  console.log(number, "invoke pokemons");
  const arr = Array(Number(number))
    .fill()
    .map((item, index) => {
      return get_Pokemon_Name(index + 1);
    });

  Promise.all(arr).then(Reduce_Names_To_HTML).then(insert_Into_HTML);
};
