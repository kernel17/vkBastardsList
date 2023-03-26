window.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById("submit").addEventListener("click", submit);
    document.getElementById("add").addEventListener("click", add);
})


const submit = () => {
    (async () => {
        let ilist = []
        inputs = document.getElementsByClassName('input.userid')
        for(let e in inputs) {
            ilist.push(e.value)
        }
        const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
        const response = await chrome.tabs.sendMessage(tab.id, {ignoreList: ilist});
        console.log(response);
      })();


}
const add = () => {
    let input = document.createElement('input');
    input.className = "userid"
    input.placeholder="user_id"
    document.querySelector('#inputs').append(input)
}