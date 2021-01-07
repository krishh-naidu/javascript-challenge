var city = data.map(city=> city.city);
var state = data.map(state=>state.state);
var country = data.map(country=>country.country);
var shape = data.map(shape=>shape.shape);
var uniqueCity = city.filter((value,index,city)=>city.indexOf(value)===index);
var uniqueState = state.filter((value,index,state)=>state.indexOf(value)===index);
var uniqueShape = shape.filter((value,index,shape)=>shape.indexOf(value)===index);
console.log(city);
console.log(uniqueCity);
console.log(uniqueState);
console.log(country);
console.log(uniqueShape);

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

    var dropdownMenu = d3.select("#selDataset");
    var inputCity = dropdownMenu.property("value");
    console.log(inputCity);
    
    var dropdownMenu1 = d3.select("#selState");
    var inputState = dropdownMenu1.property("value");
    console.log(inputState);

    var dropdownMenu2 = d3.select("#selCountry");
    var inputCountry = dropdownMenu2.property("value");
    console.log(inputCountry);

    var dropdownMenu3 = d3.select("#selShape");
    var inputShape = dropdownMenu3.property("value");
    console.log(inputShape);

    //console.log(inputValue);
    var filteredData = tableData.filter(
        ufo => ufo.datetime === inputValue || 
        ufo.city === inputCity || 
        ufo.state === inputState ||
        ufo.country == inputCountry ||
        ufo.shape === inputShape);

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

