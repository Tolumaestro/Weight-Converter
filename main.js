document.getElementById("output").style.visibility = "hidden"
const weightInput = document.getElementById("input");
weightInput.addEventListener("input", weightConverter)

function calculate(input, value){
    if(input === "Kilograms"){
        document.getElementById("output1").innerHTML = value * 1000;
        document.getElementById("output2").innerHTML = value * 2.2046;
        document.getElementById("output3").innerHTML = value * 35.274;
    }else if(input === "Grams"){
        document.getElementById("output1").innerHTML = value / 1000;
        document.getElementById("output2").innerHTML = value * 0.0022046;
        document.getElementById("output3").innerHTML = value * 0.035274;
    }else if(input === "Ounces"){
        document.getElementById("output1").innerHTML = value * 0.02835;
        document.getElementById("output2").innerHTML = value * 28.35;
        document.getElementById("output3").innerHTML = value * 0.0625;
    }else if(input === "Pounds"){
        document.getElementById("output1").innerHTML = value/2.2046
        document.getElementById("output2").innerHTML = value/0.022046
        document.getElementById("output3").innerHTML = value * 16
    }
}

function weightConverter(e){
    let selectedQuantity = document.getElementById("selectWeight").value;
    document.getElementById("output").style.visibility = "visible";
    let value = e.target.value;
    displayConversion()
    calculate(selectedQuantity, value)
}


function selectquantity(){
    let selectedquantity = document.getElementById("selectWeight").value;
    let weightInput = document.getElementById("input");
    if (selectedquantity === "Pounds"){
        weightInput.placeholder = "Enter Pounds";
        if(weightInput != ""){
            calculate(selectedquantity, weightInput.value)
        }
    } else if (selectedquantity === "Grams"){
        weightInput.placeholder = "Enter Grams";
        if(weightInput !=""){
            calculate(selectedquantity, weightInput.value)
        }
    } else if (selectedquantity === "Kilograms"){
        weightInput.placeholder = "Enter Kilograms";
        if(weightInput !=""){
            calculate(selectedquantity, weightInput.value)
        }
    } else if(selectedquantity === "Ounces"){ 
        weightInput.placeholder = "Enter Ounces";
        if(weightInput !=""){
            calculate(selectedquantity, weightInput.value)
        }
    };
    displayConversion()
}

let quantities = ["Kilograms", "Grams", "Pounds", "Ounces"]

function displayConversion(){
    let selectedQuantity = document.getElementById("selectWeight").value

    quantities.forEach((quantity, index) => {
        if (selectedQuantity === quantity){
            quantities.splice(index,1);
            document.getElementsByClassName("quantity")[0].innerHTML = quantities[0]
            document.getElementsByClassName("quantity")[1].innerHTML = quantities[1]
            document.getElementsByClassName("quantity")[2].innerHTML = quantities[2];
            quantities = ["Kilograms", "Grams", "Pounds", "Ounces"]
        }
    })
}

