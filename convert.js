const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

const result = excelToJson({
	source: fs.readFileSync('data.xlsx'),
	sheets: [
		{
			name: 'Form Responses 1',
			columnToKey: {
				C: 'name',
			},
		},
	],
});

// console.log(result['Form Responses 1']);
const data = JSON.stringify(result['Form Responses 1']);
fs.writeFileSync('result.json', data);

var arr = fs.readFileSync('result.json');
arr = JSON.parse(arr);
var temp = [];
arr = arr.filter((x, i) => {
	if (temp.indexOf(x.name) < 0) {
		temp.push(x.name);
		return true;
	}
	return false;
});
// console.log(arr);
const newData = JSON.stringify(arr);
fs.writeFileSync('new-result.json', newData);
