var input = document.getElementById('input'),
    result = document.getElementById('result'),
    inputType = document.getElementById('inputType'),
    resultType = document.getElementById('resultType'),
    inputTypeValue , resultTypeValue;

input.addEventListener('keyup' , myResult)
inputType.addEventListener('change' , myResult)
resultType.addEventListener('change' , myResult)

inputTypeValue = inputType.value
resultTypeValue = resultType.value

function myResult(){
    inputTypeValue = inputType.value
    resultTypeValue = resultType.value

    if(inputTypeValue === 'meter' && resultTypeValue === 'kilometer'){
        result.value = Number(input.value) * 0.001
    } else if(inputTypeValue === 'meter' && resultTypeValue === 'centimeter'){
        result.value = Number(input.value) * 100
    } else if(inputTypeValue === 'meter' && resultTypeValue === 'meter'){
        result.value = input.value
    } else if(inputTypeValue === 'meter' && resultTypeValue === 'inch'){
      result.value = Number(input.value)*39.3701
    }

    if(inputTypeValue === 'kilometer' && resultTypeValue === 'meter'){
        result.value = Number(input.value) * 1000
    } else if(inputTypeValue === 'kilometer' && resultTypeValue === 'centimeter'){
        result.value = Number(input.value) * 100000
    } else if(inputTypeValue === 'kilometer' && resultTypeValue === 'kilometer'){
        result.value = input.value
    } else if(inputTypeValue === 'kilometer' && resultTypeValue === 'inch'){
      result.value = Number(input.value)*39370.1
    }

    if(inputTypeValue === 'centimeter' && resultTypeValue === 'kilometer'){
        result.value = Number(input.value) * 0.00001
    } else if(inputTypeValue === 'centimeter' && resultTypeValue === 'meter'){
        result.value = Number(input.value) * 0.01
    } else if(inputTypeValue === 'centimeter' && resultTypeValue === 'centimeter'){
        result.value = input.value
    } else if(inputTypeValue === 'centimeter' && resultTypeValue === 'inch'){
      result.value = Number(input.value)*0.393701
    }

    if(inputTypeValue === 'inch' && resultTypeValue === 'kilometer'){
      result.value = Number(input.value) * 0.0000254
    } else if(inputTypeValue === 'inch' && resultTypeValue === 'meter'){
      result.value = Number(input.value) * 0.0254
    } else if(inputTypeValue === 'inch' && resultTypeValue === 'inch'){
      result.value = input.value
    } else if(inputTypeValue === 'inch' && resultTypeValue === 'centimeter'){
      result.value = Number(input.value)*2.54
    }
}