export default {
    get(url, params) {
        new Promise(function(resolv, reject) {
            $.get(url, params, function(res) {
                resolv(res);
            })
        })
    }
}