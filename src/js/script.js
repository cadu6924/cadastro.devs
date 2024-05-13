const button = document.getElementById('button');
const form = document.getElementById('form');
let numberInput = 0;
const button_cad=document.getElementById('cadastrar')

button.addEventListener('click', (ev) => {
    ev.preventDefault();
    numberInput++;

    const div = document.getElementById('bloco');
    const bloco = document.createElement('div');
    const br = document.createElement('br');

    const labelTec = document.createElement('label');
    labelTec.innerText = 'Nome da tecnologia';
    labelTec.setAttribute('for','tecnologias'); 

    const inputTecn = document.createElement('input');
    inputTecn.type = 'text';
    inputTecn.name = 'tecnologias';
    inputTecn.id = 'tecnologias';
    inputTecn.placeholder = 'Digite o nome da tecnologia!...';
    inputTecn.className = 'inputTextTecnologias';

    const cabeca = document.createElement('label');
    cabeca.innerText = 'Tempo de experiência:';
    cabeca.setAttribute('for','input_time' + numberInput); 

    const inputHora = document.createElement('input');
    inputHora.type = 'radio';
    inputHora.name = 'inputHora' + numberInput;
    inputHora.id ='inputHora1-' + numberInput;
    inputHora.value = '0-2 anos';

    const labelHora1 = document.createElement('label');
    labelHora1.innerText = '0-2 anos';
    labelHora1.setAttribute('for', 'inputHora1-' + numberInput);

    const inputHora2 = document.createElement('input');
    inputHora2.type = 'radio';
    inputHora2.name = 'inputHora' + numberInput;
    inputHora2.id ='inputHora2-' + numberInput;
    inputHora2.value = '3-4 anos';

    const labelHora2 = document.createElement('label');
    labelHora2.innerText = '3-4 anos';
    labelHora2.setAttribute('for', 'input_time2-' + numberInput);

    const inputHora3 = document.createElement('input');
    inputHora3.type = 'radio';
    inputHora3.name = 'input_time' + numberInput;
    inputHora3.id ='input_time3-' + numberInput;
    inputHora3.value = '5+ anos';

    const labelHora3 = document.createElement('label');
    labelHora3.innerText = '5+ anos';
    labelHora3.setAttribute('for', 'input_time3-' + numberInput);

    const lixo = document.createElement('button');
    lixo.innerText = 'Remover tecnologia';

    bloco.append(labelTec,br,inputTecn,br.cloneNode(),cabeca,br.cloneNode(),inputHora,labelHora1,inputHora2,labelHora2,inputHora3,labelHora3,br.cloneNode(),lixo);
    div.appendChild(bloco);
    form.appendChild(div);

    lixo.addEventListener('click', (ev) => {
        ev.preventDefault();
        div.removeChild(bloco);
        numberInput--;
    });
});

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const nome = document.getElementById('name');

    const timexin=document.querySelectorAll("input[type='radio']:checked");
    const nametecs=document.querySelectorAll("input[id='tecnologias']");

    for (var i = 0; i<numberInput; i++){
        alert(
            "Vocé foi cadastrado" +
            "\nNome do desenvolvedor: " + nome.value +
            "\nNome da tecnolgia:"+ nametecs[i].value+
            "\nTempo de experiência: " + timexin[i].value
        )
    } 
})
