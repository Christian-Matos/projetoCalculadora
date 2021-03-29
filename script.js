const divisionSignal = document.getElementById('division').textContent
const multiplicationSignal = document.getElementById('multiplication').textContent
const subtractionSignal = document.getElementById('subtraction').textContent
const additionSignal = document.getElementById('addition').textContent
let screenArea = document.querySelector('.screen-area')

let result = 0

let stringArray = []
let numberTransform = []

function numberClicked (value_clicked) {

    let screenArea = document.querySelector('.screen-area')
    screenArea.innerHTML += value_clicked

}

function operations() {
    
    if (screenArea.textContent.includes(additionSignal, 0)) {

        stringArray = screenArea.textContent.split('+')

        for (let i in stringArray) {
            numberTransform.push(parseInt(stringArray[i]))
        }

        for (let i in numberTransform) {
            result = result + numberTransform[i]
        }
        
        screenArea.innerHTML = result

        numberTransform = []
        result = 0

    } else if (screenArea.textContent.includes(subtractionSignal, 0)) {

        stringArray = screenArea.textContent.split('-')

        for (let i in stringArray) {
            numberTransform.push(parseInt(stringArray[i]))
        }

        for (let i in numberTransform) {
            result = Math.abs(result) - Math.abs(numberTransform[i])
        }
        
        screenArea.innerHTML = result

        numberTransform = []
        result = 0

    } else if (screenArea.textContent.includes(multiplicationSignal, 0)) {

        stringArray = screenArea.textContent.split('x')

        for (let i in stringArray) {
            numberTransform.push(parseInt(stringArray[i]))
        }

        result = numberTransform[0]
        for (let i = 1; i < numberTransform.length; i++) {
            result = result * numberTransform[i]
        }
        
        screenArea.innerHTML = result

        numberTransform = []
        result = 0

    } else if (screenArea.textContent.includes(divisionSignal, 0)) {

        stringArray = screenArea.textContent.split('/')

        for (let i in stringArray) {
            numberTransform.push(parseInt(stringArray[i]))
        }

        result = numberTransform[0]
        for (let i = 1; i < numberTransform.length; i++) {
            result = result / numberTransform[i]
        }
        
        screenArea.innerHTML = result

        numberTransform = []
        result = 0

    }
  
}

function clearScreenArea () {

    numberTransform = []
    screenArea.innerHTML = ""

}