let sidebar = document.querySelector(".sidebar");
let menu = document.querySelector(".menu");
let line = document.querySelectorAll(".line");
let text = document.querySelector(".toggleText");
let list = document.querySelectorAll("li");



menu.addEventListener("click", () => {

    

    if(text.innerHTML == "MENU"){
        text.innerHTML = "CLOSE";
    }
    else{
        text.innerHTML = "MENU";
    }

    sidebar.classList.toggle("show");
    line.forEach((item,index)=>{

        line[0].classList.toggle("line-1");
        line[1].classList.toggle("line-2");
        line[2].classList.toggle("line-3");


    });

    list.forEach((item, index) =>{

        item.style.opacity="0";

        setTimeout(() =>{

      
        setTimeout(() =>{

            item.style.opacity="1";

            item.classList.toggle("animations");
        }, index * 101);
        

    });

},9000);

});