	function insertNum(num){
		var entry = document.getElementById('entry');
		switch(num){
			case 1:
				entry.value += '1'
				break;
			case 2:
				entry.value += '2'
				break;
			case 3:
				entry.value += '3'
				break;
			case 4:
				entry.value += '4'
				break;
			case 5:
				entry.value += '5'
				break;
			case 6:
				entry.value += '6'
				break;
			case 7:
				entry.value += '7'
				break;
			case 8:
				entry.value += '8'
				break;
			case 9:
				entry.value += '9'
				break;
			case 0:
				entry.value += '0'
				break;
		}
	}

	function insertOp(operand){
		var entry = document.getElementById('entry');
		switch(operand){
			case '+':
				entry.value += '+';
				break;
			case '-':
				entry.value += '-';
				break;
			case 'x':
				entry.value += '*';
				break;
			case '/':
				entry.value += '/';
				break;
			case '.':
				entry.value += '.';
				break;
			case 'x*':
				entry.value += '**';
				break;
			case '√':
				ans = Math.sqrt(entry.value);
				document.getElementById('result').value = ans;
		}
	}

	function reset(){
		document.getElementById('entry').value = "";
		document.getElementById('result').value = "";

	}

	function del(){
		var entry = document.getElementById('entry');
		var clear = entry.value;
		if(clear.length > 0){
			clear = clear.substring(0, clear.length-1);
			entry.value = clear;
		}
	}

	function equal(){
		var entry = document.getElementById('entry');
		answer = eval(entry.value);
		document.getElementById('result').value = answer;
	}

	var r = 0;
	function brackets(){
		var entry = document.getElementById('entry');
		if(r == 0){
			entry.value += '(';
			r = 1;
		}else if(r == 1){
			entry.value += ')';
			r = 0;
		}
	}