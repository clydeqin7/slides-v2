let n
初始化()
setInterval(()=>{
    makeLeave(getImage(n)).one('transitionend', (e)=>{
            makeEnter($(e.currentTarget))
        })
    makeCurrent(getImage(n+1))
    n += 1    
}, 2000)



/* 下发代码可以不看 */
function 初始化(){
    n=1
    $(`.images > img:nth-child(${n})`).addClass('current')
        .siblings().addClass('enter')
}

function getImage(n) {
    return $(` .images > img:nth-child(${x(n)})`)  // ``插值法${}
}
function makeLeave($node) {
    return $node.removeClass('current enter').addClass('leave')
}
function makeCurrent($node) {
    return $node.removeClass('leave enter').addClass('current')
}
function makeEnter($node) {
    return $node.removeClass('current leave').addClass('enter')
}

function x(n){
    if(n>4){
        n = n%4
        if(n === 0){
            n = 4
        }
    }
    return n
}
