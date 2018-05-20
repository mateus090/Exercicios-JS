
function exerc01(){
        var nota1, nota2 ,nota3, nota4, media;
        // recupera dados do usuário
        nota1 = parseFloat(document.getElementById("nota1").value);
        nota2 = parseFloat(document.getElementById("nota2").value);
        nota3 = parseFloat(document.getElementById("nota3").value);
        nota4 = parseFloat(document.getElementById("nota4").value);
        // calcula 
        media = (nota1 + nota2 + nota3 + nota4) / 4;
        
        // estrutura de seleção
        if (media >= 7){
            document.getElementById("r1").innerHTML = "Aprovado com média " + media;
        }
        else {
            document.getElementById("r1").innerHTML = "Reprovado com média " + media;
        }
            if (media < 0){
                document.getElementById("r1").innerHTML = "Número inválido"
            }
    }
    function limpar01(){
        document.getElementById("r1").innerHTML = "";
    }

function exerc02(){
        var exerc02_n1, exerc02_n2, exerc02_media;
        // recupera dados do usuário
        exerc02_n1 = parseFloat(document.getElementById("exerc02_n1").value);
        exerc02_n2 = parseFloat(document.getElementById("exerc02_n2").value);
        // calcula 
        exerc02_media = (exerc02_n1 + exerc02_n2) / 2;        
        // estrutura de seleção
        if ((exerc02_n1 < 0) || (exerc02_n2 < 0)){
            document.getElementById("r2").innerHTML = "Nota(s) negativa(s)";
        }
        else if ((exerc02_media >= 7) && (exerc02_media <= 10)) {
            document.getElementById("r2").innerHTML = "Aprovado. Média: " + exerc02_media;
            }
            else if ((exerc02_media >= 3) && (exerc02_media < 7)){
                document.getElementById("r2").innerHTML = "Exame."
            }
                else if ((exerc02_media >= 0) && (exerc02_media < 3)){
                    document.getElementById("r2").innerHTML = "Reprovado. Média: " + exerc02_media;
                }
                    else{ //exceção
                        document.getElementById("r2").innerHTML = "Média e notas inválidas";

                    }
    }
    function limpar02(){
        document.getElementById("r2").innerHTML = "";
    }
function exerc03(){

        var exerc03_n1, exerc03_n2;

        exerc03_n1 = parseFloat(document.getElementById("exerc03_n1").value);
        exerc03_n2 = parseFloat(document.getElementById("exerc03_n2").value);

        if (exerc03_n1 < exerc03_n2){
            document.getElementById("r3").innerHTML = exerc03_n1 + " é o menor.";
        }
        else if (exerc03_n2 < exerc03_n1){
                document.getElementById("r3").innerHTML = exerc03_n2 + " é o menor.";
            }
            else {
                document.getElementById("r3").innerHTML = "Números são iguais";
            }
    }
    function limpar03(){
        document.getElementById("r3").innerHTML = "";
    }

function exerc04(){
        var exerc04_n1, exerc04_n2, exerc04_n3, exerc04_maior;

        exerc04_n1 = parseFloat(document.getElementById("exerc04_n1").value);
        exerc04_n2 = parseFloat(document.getElementById("exerc04_n2").value);
        exerc04_n3 = parseFloat(document.getElementById("exerc04_n3").value);

        if ((exerc04_n1 > exerc04_n2) && (exerc04_n1 > exerc04_n3)){
            exerc04_maior = exerc04_n1;
        }
        else if (exerc04_n2 > exerc04_n3){
            exerc04_maior = exerc04_n2;
            }
            else {
                exerc04_maior = exerc04_n3;
            }
        document.getElementById("r4").innerHTML = "Maior: "+ exerc04_maior;	
    }
    function limpar04(){
        document.getElementById("r4").innerHTML = "";
    }

function exerc05(){
        var exerc05_n1, exerc05_n2, exerc05_n3,r5;

        exerc05_n1 = parseFloat(document.getElementById("exerc05_n1").value);
        exerc05_n2 = parseFloat(document.getElementById("exerc05_n2").value);
        exerc05_n3 = parseFloat(document.getElementById("exerc05_n3").value);

        if ((exerc05_n3) == "1"){
            r5 =  (exerc05_n1 + exerc05_n2) / 2;
          document.getElementById("r5").innerHTML = "Média entre os números: "+ r5;
        }
            else if ((exerc05_n3) == "2" && (exerc05_n1 > exerc05_n2) ){
                r5 = (exerc05_n1 - exerc05_n2)
                document.getElementById("r5").innerHTML = "Diferença do maior pelo menor: "+ r5;
            }
                else if ((exerc05_n3) == "2" && (exerc05_n2 > exerc05_n1)){
                    r5 = (exerc05_n2 - exerc05_n1);
                    document.getElementById("r5").innerHTML = "Diferença do maior pelo menor: "+ r5;
                }
                    else if ((exerc05_n3) == "2" && (exerc05_n2 = exerc05_n1)){
                    document.getElementById("r5").innerHTML = "Números iguais, favor digitar um número maior.";
                    }      
                    else if ((exerc05_n3) == "3"){
                        r5 =  (exerc05_n1 * exerc05_n2);
                        document.getElementById("r5").innerHTML = "Produto entre os números: "+ r5;
                    }
                        else if ((exerc05_n3) == "4" && (exerc05_n2 != 0)){
                            r5 =  (exerc05_n1 / exerc05_n2);
                            document.getElementById("r5").innerHTML = "Divisão do 1º pelo 2º: "+ r5;
                        }      
                            else if ((exerc05_n2) == 0){
                            document.getElementById("r5").innerHTML = "Número inválido";
                            }
                                else if((exerc05_n3 != "1" + "2"+ "3"+ "4")){
                                    document.getElementById("r5").innerHTML = "Operação inválida";
                                }  
    }
    function limpar05(){
        document.getElementById("r5").innerHTML = "";
    }
    
function exerc06(){
        var exerc06_n1, exerc06_n2, exerc06_n3,exerc06_r1,exerc06_r2;

        exerc06_n1 = parseFloat(document.getElementById("exerc06_n1").value);
        exerc06_n2 = parseFloat(document.getElementById("exerc06_n2").value);
        exerc06_n3 = parseFloat(document.getElementById("exerc06_n3").value);

        if ((exerc06_n3) == "1"){
            exerc06_r1 = Math.pow(exerc06_n1, exerc06_n2);
            document.getElementById("exerc06_r1").innerHTML = "Primeiro elevado ao segundo = "+ exerc06_r1;
            document.getElementById("exerc06_r2").innerHTML = "";
        }
            else if ((exerc06_n3) == "2"){
               exerc06_r1 = Math.sqrt(exerc06_n1);
               exerc06_r2 = Math.sqrt(exerc06_n2);
               document.getElementById("exerc06_r1").innerHTML = "Raiz quadrada N1 = "+ exerc06_r1;
               document.getElementById("exerc06_r2").innerHTML = "Raiz quadrada N2 = "+ exerc06_r2;
            }
                else if ((exerc06_n3) == "3"){
                    exerc06_r1 = Math.cbrt(exerc06_n1);
                    exerc06_r2 = Math.cbrt(exerc06_n2);
                    document.getElementById("exerc06_r1").innerHTML = "Raiz cúbica N1 = "+ exerc06_r1;
                    document.getElementById("exerc06_r2").innerHTML = "Raiz cúbica N2 = "+ exerc06_r2;
                }
                    else if((exerc06_n3 != "1" + "2"+ "3")){
                        document.getElementById("r6").innerHTML = "Operação inválida";
                    }  
    }
    function limpar06(){
        document.getElementById("exerc06_r1").innerHTML = "";
        document.getElementById("exerc06_r2").innerHTML = "";
    } 
function exerc07(){
        var exerc07_n1,exerc07_r1;

        exerc07_n1 = parseFloat(document.getElementById("exerc07_n1").value);
        

        if ((exerc07_n1 < 500) && (exerc07_n1 > 0)){
            document.getElementById("exerc07_r1").innerHTML = "Salário reajustado: R$" + (exerc07_n1 + (exerc07_n1 * 0.3));
        }
         else if((exerc07_n1 >= 500)){
                    document.getElementById("exerc07_r1").innerHTML = "Sem direito ao reajuste.";
            }
            else{
                (exerc07_n1 <= 0)
                    document.getElementById("exerc07_r1").innerHTML = "Salário inválido";
                    document.getElementById("exerc07_n1").innerHTML = "Salário inválido"; 
            }  
    }            
    function limpar07(){
        document.getElementById("exerc07_r1").innerHTML = "";
        document.getElementById("exerc07_n1").innerHTML = "";
    }
function exerc08(){
        var exerc08_n1,r8;

        exerc08_n1 = parseFloat(document.getElementById("exerc08_n1").value);

        if ((exerc08_n1) <= 0){
            document.getElementById("r8").innerHTML = "Salário inválido";
        }
        if ((exerc08_n1 <= 300) && (exerc08_n1 > 0)){
            document.getElementById("r8").innerHTML = "Salário reajustado: R$ " + (exerc08_n1 + (exerc08_n1 * 0.35));
        }
         else if((exerc08_n1 > 300)){
                    document.getElementById("r8").innerHTML = "Salário reajustado: R$ " + (exerc08_n1 + (exerc08_n1 * 0.15));
                }  
    }            
    function limpar08(){
        document.getElementById("r8").innerHTML = "";
        document.getElementById("exerc08_n1").innerHTML = "";
    }
function exerc09(){
        var exerc09_n1, r9;

        exerc09_n1 = parseFloat(document.getElementById("exerc09_n1").value);      
       
        if ((exerc09_n1 <= 0)){
            document.getElementById("r9").innerHTML = "Saldo inválido";
        }
        else if ((exerc09_n1 > 400)){
            document.getElementById("r9").innerHTML = "Com o saldo médio de R$ " + exerc09_n1+",você receberá 30%,<br> totalizando R$ " + (exerc09_n1 + (exerc09_n1 * 0.3));
        }
            else if ((exerc09_n1 <= 400) && (exerc09_n1 > 300)){
                document.getElementById("r9").innerHTML = "Com o saldo médio de R$ " + exerc09_n1+",você receberá 25%,<br> totalizando R$ " + (exerc09_n1 + (exerc09_n1 * 0.25));
            }
                else if ((exerc09_n1 <= 300) && (exerc09_n1 > 200)){
                    document.getElementById("r9").innerHTML = "Com o saldo médio de R$ " + exerc09_n1+",você receberá 20%,<br> totalizando R$ " + (exerc09_n1 + (exerc09_n1 * 0.20));
                }
                    else if (exerc09_n1 <= 200){
                    document.getElementById("r9").innerHTML = "Com o saldo médio de R$ " + exerc09_n1+",você receberá 10%,<br> totalizando R$ " + (exerc09_n1 + (exerc09_n1 * 0.10));
                    }
                        else{ 
                        document.getElementById("r9").innerHTML = "Saldo inválido";

                    }
    }
    function limpar09(){
        document.getElementById("r9").innerHTML = "";
    }
function exerc10(){
        var exerc10_n1,r10;

        exerc10_n1 = parseFloat(document.getElementById("exerc10_n1").value);

        if ((exerc10_n1 <= 12000) && (exerc10_n1 > 0)) {
            document.getElementById("r10").innerHTML = "Preço do carro R$ " + (exerc10_n1 + (exerc10_n1 * 0.05)) ;
        }
        if ((exerc10_n1 > 12000) && (exerc10_n1 <= 25000)){
            document.getElementById("r10").innerHTML = "Preço do carro R$ " + (exerc10_n1 + (exerc10_n1 * 0.25));
        }
         else if((exerc10_n1 > 25000)){
                document.getElementById("r10").innerHTML = "Preço do carro R$ " + (exerc10_n1 + (exerc10_n1 * 0.35));
            }
            else if (exerc10_n1 <= 0){
                    document.getElementById("r10").innerHTML = "Valor inválido";
            }
    }            
    function limpar10(){
        document.getElementById("r10").innerHTML = "";
    }

function exerc11(){
        var exerc11_n1,r11;

        exerc11_n1 = parseFloat(document.getElementById("exerc11_n1").value);

        if ((exerc11_n1 <= 300) && (exerc11_n1 > 0)) {
            document.getElementById("r11").innerHTML = "Seu reajuste será de 15% ou seja, terá um aumento de R$ " + (exerc11_n1 * 0.15)+".<br>Portanto seu novo salário será R$ " +(exerc11_n1 + (exerc11_n1 * 0.15)) ;
        }
        if ((exerc11_n1 > 300) && (exerc11_n1 < 600)){
            document.getElementById("r11").innerHTML = "Seu reajuste será de 10% ou seja, terá um aumento de R$ " + (exerc11_n1 * 0.10)+".<br>Portanto seu novo salário será R$ " +(exerc11_n1 + (exerc11_n1 * 0.10)) ;
        }
        if ((exerc11_n1 >= 600) && (exerc11_n1 <= 900)){
            document.getElementById("r11").innerHTML = "Seu reajuste será de 5% ou seja, terá um aumento de R$ " + (exerc11_n1 * 0.05)+ ".<br>Portanto seu novo salário será R$ " +(exerc11_n1 + (exerc11_n1 * 0.05)) ;
        }
         else if(exerc11_n1 > 900){
            document.getElementById("r11").innerHTML = "Salários acima de R$ 900 não possuem reajuste." ;
            }
            else if (exerc11_n1 <= 0){
                    document.getElementById("r11").innerHTML = "Valor inválido";
            }
    }            
    function limpar11(){
        document.getElementById("r11").innerHTML = "";
    }
function exerc12(){
        var exerc12_n1,exerc12_imposto,r12;
        
        exerc12_n1 = parseFloat(document.getElementById("exerc12_n1").value);
        exerc12_imposto = (exerc12_n1 - (exerc12_n1 * 0.07))
        if ((exerc12_n1 <= 350) && (exerc12_n1 > 0)) {
            document.getElementById("r12").innerHTML = "Seu salário será R$ " + (exerc12_imposto + 100) ;
        }
        if ((exerc12_n1 > 350) && (exerc12_n1 < 600)){
            document.getElementById("r12").innerHTML = "Seu salário será R$ " + (exerc12_imposto + 75) ;
        }
        if ((exerc12_n1 >= 600) && (exerc12_n1 <= 900)){
            document.getElementById("r12").innerHTML = "Seu salário será R$ " + (exerc12_imposto + 50) ;
        }
         else if(exerc12_n1 > 900){
            document.getElementById("r12").innerHTML = "Seu salário será R$ " + (exerc12_imposto + 35) ;
            }
            else if (exerc12_n1 <= 0){
                    document.getElementById("r12").innerHTML = "Valor inválido";
            }
    }            
    function limpar12(){
        document.getElementById("r12").innerHTML = "";
    }
    
function exerc13(){
        //variáveis
        var exerc13_n1,r13, exerc13_05, exerc13_10, exerc13_15, r13_1;
        exerc13_n1 = parseFloat(document.getElementById("exerc13_n1").value);
        // declarações
        exerc13_05 = (exerc13_n1 + (exerc13_n1 * 0.05))
        exerc13_10 = (exerc13_n1 + (exerc13_n1 * 0.10))
        exerc13_15 = (exerc13_n1 + (exerc13_n1 * 0.15))
        // tabela 1 - percentual de aumento
        if ((exerc13_n1 <= 50) && (exerc13_n1 > 0)) {
            document.getElementById("r13").innerHTML = "O novo preço será R$ " + (exerc13_05) ;
        }
        if ((exerc13_n1 > 50) && (exerc13_n1 <= 100)){
            document.getElementById("r13").innerHTML = "O novo preço será R$ " + exerc13_10 ;
        }
        if (exerc13_n1 > 100){
            document.getElementById("r13").innerHTML = "O novo preço será R$ " + exerc13_15 ;
        }
            else if (exerc13_n1 <= 0){
                    document.getElementById("r13").innerHTML = "Valor inválido"
                    document.getElementById("r13_1").innerHTML = "";
            }
        // tabela 2 - classificação    
        if((((exerc13_05 || exerc13_10) <= 80)) && ((exerc13_05 || exerc13_10) > 0)){
            document.getElementById("r13_1").innerHTML = "Classificação: barato";
            }
        if((((exerc13_10 || exerc13_15)) > 80) && (((exerc13_10 || exerc13_15)) <= 120)){
            document.getElementById("r13_1").innerHTML = "Classificação: normal";
            }
        if(((exerc13_15) > 120) && (exerc13_15 <= 200)){
                document.getElementById("r13_1").innerHTML = "Classificação: caro";
                }
           else if((exerc13_15) > 200){
                    document.getElementById("r13_1").innerHTML = "Classificação: muito caro";
                    }              
    }            
    function limpar13(){
        document.getElementById("r13").innerHTML = "";
        document.getElementById("r13_1").innerHTML = "";
    }          
function exerc14(){
        var exerc14_n1,r14;

        exerc14_n1 = parseFloat(document.getElementById("exerc14_n1").value);

        if ((exerc14_n1) <= 0){
            document.getElementById("r14").innerHTML = "Salário inválido";
        }
    else if ((exerc14_n1 <= 300) && (exerc14_n1 > 0)){
            document.getElementById("r14").innerHTML = "Salário reajustado: R$ " + (exerc14_n1 + (exerc14_n1 * 0.5));
    }
         else if((exerc14_n1 > 300) && (exerc14_n1 <= 500)){
                document.getElementById("r14").innerHTML = "Salário reajustado: R$ " + (exerc14_n1 + (exerc14_n1 * 0.4));
        }
            else if((exerc14_n1 > 500) && (exerc14_n1 <= 700)){
                document.getElementById("r14").innerHTML = "Salário reajustado: R$ " + (exerc14_n1 + (exerc14_n1 * 0.3));
            }
                else if((exerc14_n1 > 700) && (exerc14_n1 <= 800)){
                    document.getElementById("r14").innerHTML = "Salário reajustado: R$ " + (exerc14_n1 + (exerc14_n1 * 0.2));
                }
                    else if((exerc14_n1 > 800) && (exerc14_n1 <= 1000)){
                        document.getElementById("r14").innerHTML = "Salário reajustado: R$ " + (exerc14_n1 + (exerc14_n1 * 0.1));
                    }
                        else if(exerc14_n1 > 1000){
                            document.getElementById("r14").innerHTML = "Salário reajustado: R$ " + (exerc14_n1 + (exerc14_n1 * 0.05));
                        }             
    }            
    function limpar14(){
        document.getElementById("r14").innerHTML = "";
    }
function exerc15(){
        var exerc15_n1, exerc15_n2,r15;

        exerc15_n1 = parseFloat(document.getElementById("exerc15_n1").value);
        exerc15_n2 = parseFloat(document.getElementById("exerc15_n2").value);

        if ((exerc15_n2) == "1"){
            r15 = (exerc15_n1 + (exerc15_n1 * 0.03));
            document.getElementById("r15").innerHTML = "Após um mês o valor será de R$ "+ r15;
        }
        else if ((exerc15_n2) == "2"){
            r15 = (exerc15_n1 + (exerc15_n1 * 0.04));
            document.getElementById("r15").innerHTML = "Após um mês o valor será de R$ "+ r15;
        }
            else if((exerc15_n2 != "1" + "2")){
                document.getElementById("r15").innerHTML = "Operação inválida";
            }  
    }
    function limpar15(){
        document.getElementById("r15").innerHTML = "";
    }    