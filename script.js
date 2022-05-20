// $(document).ready(function(){

var currentDay = moment().format('MMM Do, YYYY, hh:mm')
$("#currentDay").text(currentDay)
var saveBtn = $(".saveBtn")
var description = $('.description')

function blockColor(){
    var hour = moment().hour();

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

function renderSaved(){

    description.each(function() {
    
    for (let i=0;i<localStorage.length;i++) {

        let keyValue = localStorage.key(i);
        let contentValue = localStorage.getItem(keyValue)
        let hourBox = $(this).parent().attr("id");

        if (keyValue ===  hourBox){
            $(this).val(contentValue)
        }
    }})

}
renderSaved();

function saveFunction(){

    saveBtn.each(function() {
    
    let hourBox = $(this).parent().attr("id");
    let content = $(this).siblings(".description").val();
    console.log(hourBox);
    console.log(content);
    
    localStorage.setItem(hourBox, content)
})}

saveBtn.on("click", saveFunction)
// $('#saveBtn2').on("click", saveFunction)
// $('#saveBtn3').on("click", saveFunction)
// $('#saveBtn4').on("click", saveFunction)
// $('#saveBtn5').on("click", saveFunction)
// $('#saveBtn6').on("click", saveFunction)
// $('#saveBtn7').on("click", saveFunction)
// $('#saveBtn8').on("click", saveFunction)
// $('#saveBtn9').on("click", saveFunction)
