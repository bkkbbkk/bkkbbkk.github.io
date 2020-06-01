let primer = '';


function equal() {
	let res = eval(primer)
	$('#test').text(res)
	primer = '';
}

function paste(symbol) {
	let id = '#' + symbol;
	primer += $(id).text();
	$('#test').text(primer)
}
function st(){
	primer = eval('0')
	$('#test').text(primer)
	primer = '';
}