var fs = require('fs');
var _ = require('underscore');
var json2csv = require('nice-json2csv');
var db = [];
fs.readdir('./files/',function(err,files){
    if(err) throw err;
    files.forEach(function(file){
    	var file_content = fs.readFileSync("./files/"+file, "utf8");
    	//console.log(file_content);
    	var info = JSON.parse(file_content);
    	info.result.results.forEach(function(rows) {
    		db.push(rows);
    	});
    });

    fs.writeFile("./total.csv", json2csv.convert(db), function(err) {
	    if(err) {
	        console.log(err);
	    } else {
	        console.log("The file was saved!");
	    }
	}); 
 });