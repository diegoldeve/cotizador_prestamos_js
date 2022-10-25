const submit = document.querySelector('#submit');

submit.addEventListener('click', e=>{
    e.preventDefault();
    const cantidad = document.querySelector('#cantidad').value;
    const options = document.querySelector('select').value;
    if(cantidad === '' || cantidad === '0' || cantidad < '0' && options === '0'){
       alert('Debes ingresar un número válido')
      
    }else{
    mostrarResultado(cantidad,options);
    }
})

function mostrarResultado(cantidad, options){
    let mensual = cantidad/options;
    let total;
    if(cantidad>=1 && cantidad<1000){
        total = parseInt(cantidad) + parseInt(cantidad * .5)
    }else if(cantidad>=1000 && cantidad<5000){
        total = parseInt(cantidad) + parseInt(cantidad * .10)
    }else if(cantidad>5000 && cantidad<10000){
        total = parseInt(cantidad) + parseInt(cantidad * .15)
    }else{
        total = parseInt(cantidad) + parseInt(cantidad * .20)
    }
    let res = `
                
                <p>La cantidad solicitada es de <strong>$${cantidad}</strong></p>
                <p>El plazo solicitado es de <strong>${options} meses</strong></p>
                <p>El pago mensual es de <strong>$${mensual} </strong></p>
                <p>El pago total es de <strong>$${total}</strong></p>
                
            `
    const resultado = document.querySelector('.resultado');
    resultado.style.visibility = 'visible';
    resultado.innerHTML = res;
    
}

