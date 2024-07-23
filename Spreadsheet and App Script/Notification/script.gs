function doGet(e) {

// Abre a planilha pelo ID ou nome

var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Home'); // Substitua 'NomeDaSuaAba' pelo nome da aba da planilha

// Define o intervalo das colunas que você quer ler

var range = sheet.getRange('A2:C'); // Supõe que os dados começam na linha 2, e as colunas A a E correspondem a publishedAt, title, description, urlToImage, url

// Obtém os dados no intervalo especificado

var data = range.getValues();

// Array para armazenar os dados

var dataArray = [];

// Itera através dos dados e adiciona ao array apenas as linhas com dados

data.forEach(function(row) {

if (row[0] && row[1] && row[2]) { // Verifica se todas as colunas têm dados

var rowData = {

titulo: row[0],

mensagem: row[1],

data: row[2]

};

dataArray.push(rowData);

}

});

// Converte o array em JSON

var jsonOutput = JSON.stringify(dataArray);

// Define o tipo de conteúdo da resposta para JSON

return ContentService.createTextOutput(jsonOutput).setMimeType(ContentService.MimeType.JSON);

}
