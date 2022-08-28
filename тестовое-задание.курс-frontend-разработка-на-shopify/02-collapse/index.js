/* Я комментарий, который ждал тебя здесь. Удали меня и напиши хороший код! */

let collapsibleContent = document.querySelector(".collapsible__content")

let actionHideAndShow = document.querySelector(".collapsible__button")

function hideOnClick() {
    collapsibleContent.animate(
        [
            { opacity: 1},
            { opacity: 0},
        ],
        {
            duration: 3000,
            fill: 'forwards'
        }
    )
}

function showOnClick() {
    collapsibleContent.animate(
        [
            { opacity: 0},
            { opacity: 1},
        ],
        {
            duration: 3000,
            fill: 'forwards'
        }
    )
}

actionHideAndShow.addEventListener('click', hideOnClick)
actionHideAndShow.addEventListener('click', showOnClick)


