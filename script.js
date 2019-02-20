function createElement(type, className) {
    var element = document.createElement(type);
    if (className) {
        element.classList.add(className);
    }
    return element;
};

function createp(text, className) {
    var p = createElement("p", className);
    p.innerText = text;

    return p
};

function createul(className) {
    var ul = createElement("ul", className);
    return ul
};

function createDiv(className) {
    var div = createElement("div", className);
    return div;
};

function createButton(text, className) {
    var btn = createElement("button", className);
    btn.innerText = text;
    return btn;
};

function createTodo(text) {
    var li = createElement("li", "todo");
    var p = createp(text);
    li.append(p);
    var btncon = createDiv("button");
    var upbtn = createButton("up", "up");
    var dwbtn = createButton("down", "down");
    var rebtn = createButton("remove", "remove");
    btncon.append(upbtn);
    btncon.append(dwbtn);
    btncon.append(rebtn);
    li.append(btncon);


    return li;
}


const todoinput = document.getElementById("todo-in");
const addtodobtn = document.getElementById("add-todo");
const main = document.getElementById("todo-main");



addtodobtn.addEventListener("click", function () {

   if (todoinput.value.length > 0) {
        
            var todo = createTodo(todoinput.value);
            if(!main.querySelector(".todo")){
                var notop =document.querySelector("p.no-todo")
                 
                main.removeChild(notop);
                var ul = createul("todo-list");
                ul.append(todo);
                  main.append(ul)
            }else{
               var ul = document.querySelector(".todo-list");
                ul.append(todo)
            }
          
            todoinput.value = "";
        

        
    }
    }

);
todoinput.addEventListener("keyup", function (e) {

    if (todoinput.value.length > 0) {
        if (e.keyCode === 13) {
            var todo = createTodo(todoinput.value);
            if(!main.querySelector(".todo")){
                var notop =document.querySelector("p.no-todo")
                 
                main.removeChild(notop);
                var ul = createul("todo-list");
                ul.append(todo);
                  main.append(ul)
            }else{
                var ul = document.querySelector(".todo-list");
                ul.append(todo)
            }
          
            todoinput.value = "";
        

        }
    }
});

main.addEventListener("click",function(e){
    
    if(e.target.tagName === "BUTTON"){
        var btn11 = e.target.className;
        var button =e.target;
        var li = button.parentElement.parentElement;
                var ul =li.parentElement;
        switch(btn11){
            case "remove":
                
                ul.removeChild(li);
                if(ul.children.length < 1){
                    var ul = document.querySelector(".todo-list");
                    var p1 =createp(" no ToDos to Display","no-todo");
                    main.removeChild(ul);
                    main.append(p1);
                    
                }
                break;
            case "up":
                var preE =li.previousElementSibling
        if(preE !== null){
            ul.removeChild(li);
            ul.insertBefore(li,preE);
            
        }
                break;
            case "down":
                var nextE=li.nextElementSibling
                if(nextE !== null){
ul.removeChild(li);
                ul.insertBefore(li, nextE.nextElementSibling);
                }break;
           }
        
    }
   
})