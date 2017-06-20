import $ from 'jquery'
/**
 * 订阅
 */

export default (function() {
    $(function() {
        $(".h-threads-info-report-btn a").each(function() {
            if ($(this).html() === '订阅') {
                $(this).on('click', subEvent)
            }
        })
    })

    /**
     * 点击事件
     * @param {*} event
     */
    function subEvent(event) {
        event.preventDefault();
        let link = event.target.href;
        let chuanId = getId(link);
        let chuanData = getChuangData(chuanId);
        chrome.runtime.sendMessage({ type: "sendRRS", content: chuanData }, () => {
            location.href = link
        });
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
     * 获取串的数据
     * @param {String} cuanId 订阅ID
     */
    function getChuangData(chuanId) {
        let chuan = $('*[data-threads-id="' + chuanId + '"]');
        let title = chuan.find('.h-threads-info-title').html();
        let email = chuan.find('.h-threads-info-email').html();
        let createdat = chuan.find('.h-threads-info-createdat').html();
        let uid = chuan.find('h-threads-info-uid').html();
        let id = chuanId;
        let content = chuan.find('.h-threads-content').html();
        return {
            title,
            email,
            createdat,
            uid,
            id,
            content: content.replace(/[\r\n]/g, "").replace(/(^\s*)|(\s*$)/g, "")
        }
    }
})();