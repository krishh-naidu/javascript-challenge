// from data.js
var tableData = data;
//console.log(tableData)
// YOUR CODE HERE!

// find a reference to tbody of the table
var tbody = d3.select('tbody');

// then iterate each row of the table data
tableData.forEach((row) => {
    //console.log(UFOsighting);
    
    // and add a trow for each row to the tbody
    var trow = tbody.append('tr');

    //
    Object.entries(row).forEach(([key,value]) => {
        //console.log(key,value);
        // add a cell to for each value
        var tcell=trow.append('td');
        tcell.text(value);
    });
});

var button = d3.select('#filter-btn');
button.on('click',function(){
    tbody.html('');
    var inputElement=d3.select('#datetime');
    var inputValue = inputElement.property('value');
    //console.log(inputValue);
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    //console.log(filteredData);

    filteredData.forEach((selections)=>{
        //console.log(selections);
        // and add a trow for each row to the tbody
        var row = tbody.append('tr');

        //
        Object.entries(selections).forEach(([key,value]) => {
            //console.log(key,value);
            // add a cell to for each value
            var cell=row.append('td');
            cell.text(value);
        });
    });
    
});

