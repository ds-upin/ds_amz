function middle2() {
    let html = ``;
    for(let i= 1; i<=8; i++)
    {
        html += `<div  class="box">
                    <h3><b> IMAGE1</b></h3>
                    <img src = "img/box${i}.jpg" alt="image">
                    <h3><b> IMAGE1</b></h3>
                </div>`;
    }
    let mid = document.getElementById("mid-block");
    mid.innerHTML = html;
}
function nav2() {
    const navtext = ["Todays Deals","Costumer Service","Gift Card","Registry","Sell"];
    let html = `<div class="nav2-item bd-hover">
                    <a>
                        <i class="fa-solid fa-bars"></i> All
                    </a>
                </div>`;
    for(let i = 1; i<=5; i++)
    {
        html += `<div class="nav2-item bd-hover">
                    <a>
                        ${navtext[i-1]}
                    </a>
                </div>`;  
    }
    let nav2_item = document.getElementById("nav-2");
    nav2_item.innerHTML = html;
}
function optionsList(){
    const optionsitem = ["All Departments","Automotives","Arts & Crafts","Baby",
        "Beauty & Personal","Books","Computers","Deals","Electronics", "Luggage","Men's Fashion", "Noting for ladies"];
    const optionitemlink = ["#","#","#","#","#","#","#","#","#","#","#","#",];
        let l = optionsitem.length;
        let html = ``;
        for (let i = 0; i<=l-1; i++)
        {
            html += `<a href="${optionitemlink[i]}">
                         <div class="options-item">${optionsitem[i]}</div>
                    </a>`;
        }
        let options = document.getElementById("options");
        options.innerHTML = html;
}
nav2();
middle2();
optionsList();
var aa = document.getElementById("search-down");
function hide_search_down() {
    a = document.getElementById("options");
    var computedStyle = window.getComputedStyle(a);
    if (computedStyle.display === "none") {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }
}
aa.addEventListener('click', hide_search_down);
