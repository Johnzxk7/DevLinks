function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    // pegar a tag img
    const img = document.querySelector('#profile img')

    // substituir a imagem
    if(html.classList.contains('light')) {
        // se tiver light mode, adicionar a imagem light
        img.setAttribute('src', './assets/avatar-light.png')
    } else {
        // se não, manter a imagem normal
        img.setAttribute('src', './assets/avatar.png')
    }

    // trocar o texto do alt
    img.setAttribute('alt', html.classList.contains('light') ? 'Foto do anime Tokyo Ghoul' : 'Foto de João Dhiego com fundo claro')

}