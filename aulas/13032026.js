function calculadora(ari,a,b){
    switch(ari){
        case '+':
            resultado = a + b;
            break;
        case '-':
            resultado = a - b;
            break;
        case '*':
            resultado = a * b;
            break;
        case '/':
            resultado = a / b;
            break;
        default:
            resultado = 'Operador inválido';
    }
    return resultado
}