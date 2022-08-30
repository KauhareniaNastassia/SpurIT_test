let collapsibleContent = document.querySelector(".collapsible__content")
let actionHideAndShow = document.querySelector(".collapsible__button")
let visible = document.querySelector(".collapsible__action--visible")
let hidden = document.querySelector(".collapsible__action--hidden")


let hide = '';

let options = {
    duration: 0,
    fill: 'forwards'
};

let showBlock = [
    {opacity: 0},
    {opacity: 1},
];

let hideBlock = [
    {opacity: 1},
    {opacity: 0},
];


actionHideAndShow.addEventListener("click", function () {
    if (hide) {
        hide = [
            collapsibleContent.animate(
                showBlock,
                options
            ),
            visible.animate(
                showBlock,
                options
            ),
            hidden.animate(
                hideBlock,
                options
            )
        ];
        hide = ''
    } else {
        hide = [
            collapsibleContent.animate(
                hideBlock,
                options
            ),
            visible.animate(
                hideBlock,
                options
            ),
            hidden.animate(
                showBlock,
                options
            )
        ]
    }
})

