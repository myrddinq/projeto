function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //trocar img
  if (html.classList.contains("light")) {
    // se tiver light mode, add img teste
    img.setAttribute("src", "./assets/sukuna-2.jpg")
    alt.setattribute("src, Sukuna no Fushiguro")
  } else {
    // se tiver sem light, manter a atual
    img.setAttribute("src", "./assets/sukuna-1.jpg")
  }
}
