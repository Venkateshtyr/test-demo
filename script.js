
//for(var i=0;i<data.length;i++){
//console.log(data[i].name);

//for(var i=0;i<10;i++){
//console.log(`flag:${data[i].flag}`);
//for(var i=0;i<data.length;i++){
//console.log(`Name:${data[i].name} latlng:${data[i].latlng}`);
//for(var i=0;i<data.length;i++){
//console.log(`Name:${data[i].name} lat:${data[i].lat} lng:${data[i].lng}`);
// console.log(`authors:${data.authors} isbn:${data.isbn} numberOfpages:${data.numberOfpages} publisher:${data.publisher}`);
var request = new XMLHttpRequest();
request.open('GET',https:"raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload = function () {
    var countryData = JSON.parse(this.response);
    const population = countryData.reduce((acc, element,asia) => {
        return acc + element.population;
    }, 0)
    console.log(population);
}
}  