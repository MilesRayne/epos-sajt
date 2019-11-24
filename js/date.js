var d = new Date();

var year = d.getFullYear();
console.log(year);

(function(){
    $('#date').text(year);
}())