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

    /**
     * 点击事件
     * @param {*} event
     */
    function subEvent(event) {
        event.preventDefault();
        let link = event.target.href;
        let cuanId = getId(link);
        fetchRrs(cuanId)
    }
    /**
     * 获取链接id
     * @param {String} link 链接
     */
    function getId(link) {
        let id = /tid\/(.+?)\.html$/.exec(link)[1];
        return id
    }
    /**
     * 订阅请求
     * @param {String} cuanId 订阅ID
     */
    function fetchRrs(cuanId) {
        $.ajax({
            url:
        })
    }
})();