// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly';
import addRRS from './background/addRRS'
alert("想了解生命的意义吗？");
chrome.runtime.onInstalled.addListener(function(details) {});
chrome.browserAction.setBadgeText({ text: '\'Allo' });

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    switch (request.type) {
        case 'sendRRS':
            addRRS(request.content);
        default:
            break;
    }
});