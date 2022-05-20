var currentDay = moment().format('MMM Do, YYYY, hh:mm')
var postDate = document.querySelector('#currentDay')

function changeDate(){
    return postDate.innerHTML = currentDay
}
changeDate()
// I learned if you have all the buttons called the same ID and use that for the Var it will only call on the first button
var saveBtn = $(".saveBtn")


// changes the color of the textarea when the clock goes past the corresponding ID
// Going by 24 hour clock eg. 5pm = 17
function blockColor(){
    var hour = moment().hour();

    $('.description').each(function() {

        var curHour = $(this).attr('id')
        if (curHour > hour ){
            $(this).addClass('future')
        } else if (curHour == hour ){
            $(this).addClass('present')
        } else {
            $(this).addClass('past')
        }
        
    })
}
blockColor()

function renderSaved(){

    $('.description').each(function() {   //calling on each textarea to find a key that matches it's ID and then displays the value
    
    for (let i=0;i<localStorage.length;i++) {

        let keyValue = localStorage.key(i);
        let contentValue = localStorage.getItem(keyValue)
        let hourBox = $(this).attr("id");

        if (keyValue ===  hourBox){
            $(this).val(contentValue)
        }
    }}
    )

}
renderSaved();

function saveFunction(){
    let hourBox = $(this).siblings(".description").attr("id"); 
    let content = $(this).siblings(".description").val();
    
    localStorage.setItem(hourBox, content)
}


saveBtn.on("click", saveFunction) //I kept getting undefined when I added () to savefunction


// I was trying to use saveBtn with them all the same ID which didn't work so I
// then tried all of them different ID which is when I found out my problem.

// $('#saveBtn2').on("click", saveFunction)
// $('#saveBtn3').on("click", saveFunction)
// $('#saveBtn4').on("click", saveFunction)
// $('#saveBtn5').on("click", saveFunction)
// $('#saveBtn6').on("click", saveFunction)
// $('#saveBtn7').on("click", saveFunction)
// $('#saveBtn8').on("click", saveFunction)
// $('#saveBtn9').on("click", saveFunction)