document.getElementById('num1').textContent = Math.floor(Math.random() * 10);
document.getElementById('num2').textContent = Math.floor(Math.random() * 10);

$("form").submit(function(event) {
    event.preventDefault();

    var name = $('#name')[0].value;

    if(name.length < 1){
        alert('Please input your full name.');
        return;
    }

    var email = $('#email')[0].value;
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

    if(!pattern.test(email)){
        alert('Please input a valid e-mail address.');
        return;
    }

    var reason = $('#select').val();

    console.log(reason);
    var msg = $('textarea')[0].value;

    if(msg.length < 10){
        alert('Your message must be longer!');
        return;
    }

    if (!$('#ashley').is(":checked") && !$('#samir').is(":checked") && !$('#jake').is(":checked") && !$('#chloe').is(":checked") && !$('#all').is(":checked"))
    {
        alert('You haven\'t selected anyone to send the message to!');
    }



    var sum = parseInt($('#num1').text()) + parseInt($('#num2').text());

    var spamTest = $('#solution')[0].value;

    if(spamTest != sum){
        alert('You didn\'t write the correct sum answer!');
        return;
    }

    if(reason == 'questions') {
        $('#info').text('Your question about the next episode has been sent.');
    }
    else if (reason == 'business') {
        $('#info').text('Your message regarding business has been sent.');
    }
    else if (reason == 'idea') {
        $('#info').text('Your idea for the next episode has been sent.');
    }
  });

$("#all").click(function() {

    if ($('#all').is(":checked")) {
        $('#ashley').prop('checked', false); 
        $('#jake').prop('checked', false); 
        $('#chloe').prop('checked', false); 
        $('#samir').prop('checked', false); 

    }

});

$('input[name="person"]').click(function() {

    if ($('input[name="person').is(":checked")) {
        $('#all').prop('checked', false);

    }

});