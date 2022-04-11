let myLeads = [];
const inputEl = document.getElementById('input-el');
const saveBtn = document.getElementById('input-btn');
const deleteBtn = document.getElementById('delete-btn');
const ulEl = document.getElementById('ul-el');
const leadsFromLS = JSON.parse(localStorage.getItem('myLeads'));
const tabBtn = document.getElementById('tab-btn');
//!object inside of array  line37
// const tabs = [
//     { url: 'https://www.linkedin.com/in/per-harald-borgen/' }
// ];

if (leadsFromLS) {
    myLeads = leadsFromLS;
    render(myLeads)
}

function render(leads) {
    let listItems = '';
    for (let i = 0; i < leads.length; i++) {
        //very complicated way of doing template strings.
        //listItems += "<li><a target='_blank' href='" + leads[i] + "'>" + leads[i] + "</a></li>"
        //much simpler way
        listItems += `
        <li>
           <a target="_blank" href="${leads[i]}">${leads[i]}</a>
        </li>`
        //same result different method

        // const listEl = document.createElement('li');
        // listEl.textContent = myLeads[i];
        // ulEl.append(listEl);
    }
    ulEl.innerHTML = listItems;
}

tabBtn.addEventListener('click', () => {
    //?how to get the tab you are looking at chrome and save it in your extension
    //?since only one tab should be active and in the current window at once
    //?the return variable should only have one entry
    // chrome.tabs.query({
    //     active: true,
    //     currentWindow: true
    // }, (tabs) => {
    // })  original commented out version
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, (tabs) => {
        myLeads.push(tabs[0].url);
        localStorage.setItem('myLeads', JSON.stringify(myLeads))
        render(myLeads)
    })
    //!how to access the obj inside of the array with a dot notation
    // console.log(tabs[0].url) //?.url is the key to tabs
})

deleteBtn.addEventListener('dblclick', () => {
    localStorage.clear()
    myLeads = [];
    render(myLeads)
})

saveBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value);
    inputEl.value = '';
    localStorage.setItem('myLeads', JSON.stringify(myLeads))

    render(myLeads)
    console.log(localStorage.getItem('myLeads'))
});