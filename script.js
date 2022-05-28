function consultaCep() {
    cep = document.querySelector('#cep').value;
    url = `https://viacep.com.br/ws/${cep}/json/`;
  
    fetch(url).then(function(resposta){
        resposta.json().then(function(dados){
            console.log(dados);
            mostraEndereco(dados);
        });
    });
}

function mostraEndereco(dados){
    if(dados.erro == "true"){
        let resultado = document.querySelector('#resultado');
        resultado.innerHTML = `<p><b><center>CEP  INVÁLIDO </p>`
    }else{
        let resultado = document.querySelector('#resultado');
        resultado.innerHTML = `<p><b>Exibindo Dados Referentes ao CEP:</b> ${dados.cep} </p>
                               <p><b>Endereço:</b> ${dados.logradouro} </p>
                               <p><b>Bairro:</b> ${dados.bairro} </p>
                               <p><b>Cidade:</b> ${dados.localidade} - ${dados.uf}. </p>`
    
  }
}