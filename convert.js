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
