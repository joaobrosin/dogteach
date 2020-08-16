const dogImage = document.querySelector('.dog-image')

function changePhoto () {
    if (window.innerWidth <= 870) {
        dogImage.setAttribute('src', 'images/pictures/dog2.png')
    }  else {
        dogImage.setAttribute('src', 'images/pictures/dog.png')
    }
}

window.addEventListener("resize", changePhoto);



// form 

if (window.SimpleForm) {
	new SimpleForm({
		form: ".formphp", // seletor do formulário
		button: "#enviar", // seletor do botão
		erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente para o email dogteach@example.com</p></div>", // mensagem de erro
		sucesso: "<div id='form-sucesso'><h2>Sucesso!</h2><p>Em breve você recebera o seu eBook!.</p></div>", // mensagem de sucesso
	});
}