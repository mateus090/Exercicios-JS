
function exerc_01(){
	var exerc01_n1, exerc01_n2, r1;
    //recupera dados(DOM)
    exerc01_n1 = parseFloat(document.getElementById("exerc01_n1").value); 
	exerc01_n2 = parseFloat(document.getElementById("exerc01_n2").value); 
	// calcular
    r1 = exerc01_n1 - exerc01_n2;
	document.getElementById("r1").innerHTML = "Resultado: " + r1;
    }
    function limpar01(){
        document.getElementById("r1").innerHTML = "";
    }
function exerc_02(){
    var exerc02_n1, exerc02_n2, exerc02_n3, r2;
    //recupera dados(DOM)
    exerc02_n1 = parseFloat(document.getElementById("exerc02_n1").value); 
    exerc02_n2 = parseFloat(document.getElementById("exerc02_n2").value);
    exerc02_n3 = parseFloat(document.getElementById("exerc02_n3").value);  
    // calcular
    r2 = exerc02_n1 * exerc02_n2 * exerc02_n3;
    document.getElementById("r2").innerHTML = "Resultado: " + r2;
    }
    function limpar02(){
        document.getElementById("r2").innerHTML = "";
    }
function exerc_03(){
    var exerc03_n1, exerc03_n2, r3;
    //recupera dados(DOM)
    exerc03_n1 = parseFloat(document.getElementById("exerc03_n1").value); 
    exerc03_n2 = parseFloat(document.getElementById("exerc03_n2").value); 
    // calcular
    r3 = exerc03_n1 / exerc03_n2;
    document.getElementById("r3").innerHTML = "Resultado: " + r3;
    }
        function limpar03(){
            document.getElementById("r3").innerHTML = "";
        }
function exerc_04(){
    var exerc04_n1, exerc04_n2, r4;
    //recupera dados(DOM)
    exerc04_n1 = parseFloat(document.getElementById("exerc04_n1").value); 
    exerc04_n2 = parseFloat(document.getElementById("exerc04_n2").value); 
    // calcular
    r4 = (exerc04_n1*2) + (exerc04_n2*3) / 5
    document.getElementById("r4").innerHTML = "Média: " + r4;
    }
        function limpar04(){
            document.getElementById("r4").innerHTML = "";
        }          
function exerc_05(){
    var exerc05_n1, r5;
    //recupera dados(DOM)
    exerc05_n1 = parseFloat(document.getElementById("exerc05_n1").value); 
    // calcular
    r5 = exerc05_n1 - (exerc05_n1 * 0.10) 
    document.getElementById("r5").innerHTML = "Novo preço: " +"R$ " + r5+",00";
    }
        function limpar05(){
            document.getElementById("r5").innerHTML = "";
        }
function exerc_06(){
    var exerc06_n1, exerc06_n2, r6, r6_salario;
    //recupera dados(DOM)
    exerc06_n1 = parseFloat(document.getElementById("exerc06_n1").value);
    exerc06_n2 = parseFloat(document.getElementById("exerc06_n2").value);  
    // calcular
    r6 = exerc06_n2 + (exerc06_n2*0.04)
    r6_salario = r6 + exerc06_n1  
    document.getElementById("r6").innerHTML = "Comissão: " +"R$ " + r6;
    document.getElementById("r6_salario").innerHTML = "Total a receber: " +"R$ " + r6_salario;
    }
        function limpar06(){
            document.getElementById("r6").innerHTML = "";
            document.getElementById("r6_salario").innerHTML = "";
        }             
function exerc_07(){
    var exerc07_n1, r7_peso1, r7_peso2;
    //recupera dados(DOM)
    exerc07_n1 = parseFloat(document.getElementById("exerc07_n1").value);
    // calcular
    r7_peso1 = exerc07_n1 + (exerc07_n1*0.15)
    r7_peso2 = exerc07_n1 - (exerc07_n1*0.20) 
    document.getElementById("r7_peso1").innerHTML = "Peso(15%): " + r7_peso1+" Kg";
    document.getElementById("r7_peso2").innerHTML = "Peso(20%): " + r7_peso2+" Kg";
    }
        function limpar07(){
            document.getElementById("r7_peso1").innerHTML = "";
            document.getElementById("r7_peso2").innerHTML = "";
        }
function exerc_08(){
    var exerc08_n1,r8;
    //recupera dados(DOM)
    exerc08_n1 = parseFloat(document.getElementById("exerc08_n1").value);
    // calcular
    r8 = exerc08_n1 * 1000
    document.getElementById("r8").innerHTML = "Peso: " + r8+".00g";
    }
        function limpar08(){
            document.getElementById("r8").innerHTML = "";
        }                          
function exerc_09(){
    var exerc09_n1, exerc09_n2, exerc09_n3, r9;
    //recupera dados(DOM)
    exerc09_n1 = parseFloat(document.getElementById("exerc09_n1").value);
    exerc09_n2 = parseFloat(document.getElementById("exerc09_n2").value);
    exerc09_n3 = parseFloat(document.getElementById("exerc09_n3").value);
    // calcular
    r9 = ((exerc09_n1 + exerc09_n2) * exerc09_n3) / 2
    document.getElementById("r9").innerHTML = "Resultado: " + r9+"m²";
    }
        function limpar09(){
            document.getElementById("r9").innerHTML = "";
        }
function exerc_10(){
    var exerc10_n1, r10;
    //recupera dados(DOM)
    exerc10_n1 = parseFloat(document.getElementById("exerc10_n1").value);
    // calcular
    r10 = exerc10_n1 * exerc10_n1
    document.getElementById("r10").innerHTML = "Área do quadrado = " + r10;
    }
        function limpar10(){
            document.getElementById("r10").innerHTML = "";
        }
function exerc_11(){
    var exerc11_n1, exerc11_n2, r11;
    //recupera dados(DOM)
    exerc11_n1 = parseFloat(document.getElementById("exerc11_n1").value);
    exerc11_n2 = parseFloat(document.getElementById("exerc11_n2").value);
    // calcular
    r11 = (exerc11_n1 * exerc11_n2) / 2
    document.getElementById("r11").innerHTML = "Área = " + r11+"m²";
    }
        function limpar11(){
            document.getElementById("r11").innerHTML = "";
        }                    
function exerc_12(){
    // declaração de variáveis.
	var salarioMinimo, salarioFuncionario, r12;
    //recupera dados(DOM)
    salarioMinimo = parseFloat(document.getElementById("salarioMinimo").value); 
	salarioFuncionario = parseFloat(document.getElementById("salarioFuncionario").value); 
	// calcular
    r12 = salarioFuncionario / salarioMinimo;
	document.getElementById("r12").innerHTML = "Resultado: " + parseInt(r12) +" Salário(s) mínimo(s)." ;
    }
        function limpar12(){
            document.getElementById("r12").innerHTML = "";
        }
function exerc_13(){
    // declaração de variáveis.
    var r13, i, n;
    //recupera dados(DOM)
    n = parseFloat(document.getElementById("n").value); 
    // calcular
    for (i = 1; i < 11; i++){ 
        document.getElementById("r13").innerHTML += "<br>" + n + " X " + i+" = " + n*i  ;
    }  
}
        function limpar13(){
            document.getElementById("r13").innerHTML = "";
        }
function exerc_14(){
    var exerc14_n1, exerc14_n2, r14_a,r14_m,r14_d,r14_s;
    //recupera dados(DOM)
    exerc14_n1 = parseFloat(document.getElementById("exerc14_n1").value);
    exerc14_n2 = parseFloat(document.getElementById("exerc14_n2").value);
    // calcular
    r14_a = exerc14_n2 - exerc14_n1;
    r14_m = (exerc14_n2 - exerc14_n1) * 12;
    r14_d = ((exerc14_n2 - exerc14_n1) * 365);
    r14_s = ((exerc14_n2 - exerc14_n1) * 52.1429).toFixed(0);
    document.getElementById("r14_a").innerHTML =  r14_a+" Anos de idade";
    document.getElementById("r14_m").innerHTML =  r14_m+" Meses de idade";
    document.getElementById("r14_d").innerHTML =  r14_d+" Dias de idade";
    document.getElementById("r14_s").innerHTML =  r14_s+" Semanas de idade";
    }
        function limpar14(){
            document.getElementById("r14_a").innerHTML = "";
            document.getElementById("r14_m").innerHTML = "";
            document.getElementById("r14_d").innerHTML = "";
            document.getElementById("r14_s").innerHTML = "";
        }
function exerc_15(){
    var exerc15_n1, exerc15_n2, exerc15_n3,r15_c1,r15_c2, r15;
    //recupera dados(DOM)
    exerc15_n1 = parseFloat(document.getElementById("exerc15_n1").value);
    exerc15_n2 = parseFloat(document.getElementById("exerc15_n2").value);
    exerc15_n3 = parseFloat(document.getElementById("exerc15_n3").value);
    // calcular
    r15_c1 = exerc15_n2 + (exerc15_n2 * 0.02);
    r15_c2 = exerc15_n3 + (exerc15_n3 * 0.02);
    r15 = exerc15_n1 - (r15_c1 + r15_c2);
    //alerta
    if (exerc15_n1 < exerc15_n2 + exerc15_n3){
        alert("Atenção! Salário menor que o valor das duas contas")
    }
    document.getElementById("r15").innerHTML = "Sobrará R$" +r15+",00 do salário de João";
    }
        function limpar15(){
            document.getElementById("r15").innerHTML = "";
        }                   