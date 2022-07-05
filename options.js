const buttonClick = document.querySelector("#btnClick");
const lisContent = document.querySelector(".names");
const textNumber = document.querySelector("#number");

const verify_itens = () => {
  if (lisContent.children.length > 0) {
    return 1;
  }
};
const clean_Lis_Content = () => {
  //
  while (lisContent.children.length > 0) {
    lisContent.removeChild(lisContent.firstChild);
  }
};

buttonClick.addEventListener("click", () => {
  if (verify_itens() > 0) {
    clean_Lis_Content();
  }
  init_Pokemons(textNumber.value);
});
