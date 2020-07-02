let textMessage =[];
let giberish = [];



let R1a = 1
let R1b = 14
let R1value = document.getElementById('R1value')
R1value.innerText = R1a

let R2a = 1
let R2b = 14
let R2value = document.getElementById('R2value')
R2value.innerText = R2a

let R3a = 1
let R3b = 14
let R3value = document.getElementById('R3value')
R3value.innerText = R3a




function cypher() {
	textMessage = document.getElementById('message').value
	answer = document.getElementById('answer')
	for (index = 0; index < textMessage.length; index++) {

		let i = textMessage.charCodeAt(index)-96

		i+=R1a
		if (i > 26){
			i= i-26
		}
		i+=R2a
		if (i > 26){
			i= i-26
		}
		i+=R3a
		if (i > 26){
			i= i-26
		}
		i+=R1b
		if (i > 26){
			i= i-26
		}
		i+=R2b
		if (i > 26){
			i= i-26
		}
		i+=R3b
		if (i > 26){
			i= i-26
		}
		i+= 96

		let letter = String.fromCharCode(i)
		giberish.push(letter)

		R1a+=1
		R1b+=1
		if(R1a==27){
			R1a=1
			R2a+=1
			R2b+=1
		}
		if (R1b==27) {
			R1b=1
		}
		if (R2a==27) {
			R2a=1
			R3a+=1
			R3b+=1
		}
		if (R2b==27) {
			R2b=1
		}
		if (R3a==27) {
			R3a=1
		}
		if (R3b==27) {
			R3b=1
		}
		R1value.innerText = R1a
		R2value.innerText = R2a
		R3value.innerText = R3a
	}

	
	answer.innerText = giberish
}
function clean() {
	answer = document.getElementById('answer')
	answer.innerText = ' '

}

function reset(argument) {
R1a = 1
R1b = 14
R2a = 1
R2b = 14
R3a = 1
R3b = 14
R1value.innerText = R1a
R2value.innerText = R2a
R3value.innerText = R3a
}
