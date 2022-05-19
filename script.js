var currentDay = moment().format('MMM Do, YYYY, hh:mm')
$("#currentDay").text(currentDay)
var saveBtn = document.querySelectorAll('#saveBtn')
var savedInput = $('.description')

function renderInput(){
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#1 .description").val(localStorage.getItem("1"));
$("#2 .description").val(localStorage.getItem("2"));
$("#3 .description").val(localStorage.getItem("3"));
$("#4 .description").val(localStorage.getItem("4"));
$("#5 .description").val(localStorage.getItem("5"));
}

saveBtn.onclick = function(){

    // var currentInput = JSON.parse(localStorage.getItem('inputs')) || []
    var text = savedInput.val()
    var time = $('#saveBtn').parent().attr('id');
    var userobj = {
        savedText: text,
        savedTime: time
    }
    localStorage.setItem(time,text)

    // renderInput()
}

// function renderInput(){
//     var currentInputs = JSON.parse(localStorage.getItem('inputs'))
//     savedInput.innerHTML= ''
//     for (let i = 0; i < .length; i++) {
//         let newInput = document.createElement('div');
//         newInput.textContent = currentInputs[i].savedText + currentInputs[i]
        
//     }
// }

function blockColor(){
    var hour = moment().hours();

    $('.description').each(function() {
        var curHour = parseInt($(this).attr('id'))

        if (curHour > hour ){
            $('.description').addClass('future')
            
        } else if (curHour === hour ){
            $('.description').addClass('present')
        } else {
            $('.description').addClass('past')
        }
        
    })
}
blockColor()