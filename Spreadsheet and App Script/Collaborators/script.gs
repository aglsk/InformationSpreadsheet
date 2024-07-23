function doGet(e) {

var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

// Obter o intervalo de dados incluindo a quarta coluna (bio)

var dataRange = sheet.getRange(2, 1, sheet.getLastRow() - 1, 4); 

var data = dataRange.getValues();

var results = data.map(function(row) {

return {

nome: row[0],

foto: row[1],

cargo: row[2],

bio: row[3] || "Sem Descrição" // Corrige a forma de definir a descrição padrão

};

});

var jsonOutput = ContentService.createTextOutput(JSON.stringify(results));

jsonOutput.setMimeType(ContentService.MimeType.JSON);

return jsonOutput;

}


