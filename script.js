function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a imagem
  const img = document.querySelector("#profile img")

  //trocar a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  // referent as linhas 2 e 3   podemos fazer de 2 formas
  //if (html.classList.contains("light")) {
  //html.classList.remove("light")
  //} else {
  //   html.classList.add("light")
  // }
}
