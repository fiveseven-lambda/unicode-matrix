var num_row = 1, num_column = 1;

function change_row(value){
	input = document.getElementById('input');
	if(value > num_row){
		row = document.createElement('div');
		for(i = 0; i < num_column; ++i){
			entry = document.createElement('input');
			entry.setAttribute('size', 3);
			entry.setAttribute('id', num_row + ',' + i);
			entry.setAttribute('onchange', 'print()');
			row.appendChild(entry);
		}
		input.appendChild(row);
	}else{
		input.lastChild.remove();
	}
	num_row = value;
}

function change_column(value){
	input = document.getElementById('input');
	if(value > num_column){
		for(i = 0; i < num_row; ++i){
			entry = document.createElement('input');
			entry.setAttribute('size', 3);
			entry.setAttribute('id', i + ',' + num_column);
			entry.setAttribute('onchange', 'print()');
			input.children[i].appendChild(entry);
		}
	}else{
		for(i = 0; i < num_row; ++i){
			input.children[i].lastChild.remove();
		}
	}
	num_column = value;
}

var text;

function print(){
	text = []
	for(i = 0; i < num_row; ++i){
		row = ""
		if(num_row == 1) row += "("
		else if(i == 0) row += "⎛"
		else if(i == num_row - 1) row += "⎝"
		else row += "⎜"
		for(j = 0; j < num_column; ++j){
			row += document.getElementById(i + "," + j).value;
			if(j < num_column - 1) row += " ";
		}
		if(num_row == 1) row += ")"
		else if(i == 0) row += "⎞"
		else if(i == num_row - 1) row += "⎠"
		else row += "⎟"
		text.push(row);
	}
	document.getElementById("output").innerHTML = text.join("<br>");
}

function copied(){
	document.getElementById("copied").innerHTML = "コピーされました";
}

function copy(){
	navigator.clipboard.writeText(text.join("\n")).then(copied);
}

