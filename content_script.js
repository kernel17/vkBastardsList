let ignorelist = []

const isArrayOfNumbers = (array)=> {
    array.forEach(e => {
        if ((typeof e) != 'nubmer') return 0
        return 1
    });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
    if(request.ignoreList) {
        console.log(request)
        if(isArrayOfNumbers(request.ignoreList)) {
            ignorelist = request.ignoreList
    }}
})

const observer = new MutationObserver(list => {
    if(ignorelist){
        if (document.querySelector('im-page--chat-body') != null) {
            ignoreList.forEach(id=> {
            if (document.querySelectorAll( `[data-peer="${id}"]` )) {
                document.querySelectorAll( `[data-peer="${id}"]` ).forEach(function (elem) {
                    elem.remove();
        })
        }
      })
  }

  }
  

  });
  observer.observe(document.body, {attributes: true, childList: true, subtree: true});
