
let collapsibleContent = document.querySelector(".collapsible__content")

let actionHideAndShow = document.querySelector(".collapsible__button")


let hide = '';
actionHideAndShow.addEventListener("click",function(){
    if(hide) {
        hide = collapsibleContent.animate(
            [
                { opacity: 0},
                { opacity: 1},
            ],
            {
                duration: 2000,
                fill: 'forwards'
            }
        );
        hide= ''
    } else {
        hide = collapsibleContent.animate(
            [
                { opacity: 1},
                { opacity: 0},
            ],
            {
                duration: 2000,
                fill: 'forwards'
            }
        )
    }
})