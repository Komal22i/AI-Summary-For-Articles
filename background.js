chrome.runtime.onInstalled.addListener(()=>{
    chrome.storage.ync.get(["geminiApiKey"],(result)=>{
if(!result){
    chrome.tabs.create({url:"options.html"})
}
    })
})