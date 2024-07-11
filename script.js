let sidebar = document.querySelector(".sidebar");
let menu = document.querySelector(".menu");
let line = document.querySelectorAll(".line");
let text = document.querySelector(".toggleText");
let text1 = document.querySelectorAll(".text");
let list = document.querySelectorAll("li");
let underLay = document.querySelector(".underlay");

let image = ['	https://netsoltech.com/images/contact-usVector.svg',
               
               'https://netsoltech.com/images/ascentVector.svg',
               'https://netsoltech.com/images/investorsVector.svg',
               'https://netsoltech.com/images/innovationVector.svg',
               'https://netsoltech.com/images/eventsVector.svg',
               'https://netsoltech.com/images/digitalVector.svg',

];

text1.forEach((element) =>{

    element.addEventListener("mouseover", ()=>{

        if(element.innerHTML == "Home"){

            underLay.src = image[0];
        }

        else if(element.innerHTML == "About"){

            underLay.src = image[1];
        }

        else if(element.innerHTML == "Product"){

            underLay.src = image[2];
        }

        else if(element.innerHTML == "Inverstor"){

            underLay.src = image[3];
        }

        else if(element.innerHTML ==  "Innovation"){

            underLay.src = image[4];
        }

        else if(element.innerHTML == "Event"){

            underLay.src = image[5];
        }
        

       


    });
});




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