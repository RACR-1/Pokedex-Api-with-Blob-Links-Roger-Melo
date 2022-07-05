const buttonClick = document.querySelector("#btnClick");
const lisContent = document.querySelector(".names");
const textNumber = document.querySelector("#number");
const divOptions = document.querySelector(".insert-class");
const worningMsg = document.querySelector(".worning-msg");

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

const worning_Msg_If_Number_Above70 = () => {
  worningMsg.style.display = "";
  setTimeout(() => {
    worningMsg.style.display = "none";
  }, 8000);
};

buttonClick.addEventListener("click", () => {
  if (verify_itens() > 0) {
    clean_Lis_Content();
  }
  const getValue = Number(textNumber.value);
  if (getValue > 70) {
    worning_Msg_If_Number_Above70();
  }

  init_Pokemons(textNumber.value);
});
