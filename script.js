function toggleMode() {
    const html = document.documentElement;

    // // Verifique se a classe 'light' está presente
    // if (html.classList.contains('light')) {
    //     // Se estiver presente, remova a classe 'light'
    //     html.classList.remove('light');
    // } else {
    //     // Se não estiver presente, adicione a classe 'light'
    //     html.classList.add('light');
    // }

    html.classList.toggle('light')
}
