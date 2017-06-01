/**
 * 订阅
 */

export const order = (function() {
    let linkList = document.querySelectorAll(".h-threads-info-report-btn a");
    linkList.forEach((item) => {
        if (item.innerHTML === '订阅') {
            item.addEventListener('click', subEvent, false)
        }
    })

    function subEvent(event) {
        event.preventDefault();
        console.log(event.target);
    }
})();