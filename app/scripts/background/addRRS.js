export default function(chuan) {
    chrome.storage.sync.get('rrs', (result) => {
        let RRSList = [];
        if (result.rrs) {
            let RRSDate = JSON.parse(result.rrs);
            RRSList = RRSDate.list;
            let index = RRSList.findIndex((item) => {
                item.id === chuan.id;
            })
            console.log(index)
            if (index >= 0) {
                alert('已添加过')
            } else {
                RRSList.push(chuan);
            }
        } else {
            RRSList.push(chuan);
        }
        chrome.storage.sync.set({ rrs: JSON.stringify({ list: RRSList }) }, () => {
            chrome.storage.sync.get('rrs', (result) => {})
        })
    })
}