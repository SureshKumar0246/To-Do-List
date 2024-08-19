const inputItem = document.querySelector(".inputItem");
const box = document.querySelector(".box");
inputItem.addEventListener("keyup", (event) => {
   if(event.key == "Enter" && inputItem.value !=="" ){
   addList(inputItem.value);
    inputItem.value = "";
    localStorage.setItem("notes", JSON.stringify(""))
   }
})

{/* <ul class="to-do-list">
            <li>create Lorem, ipsum dolor sit amet conse<i class="fa-solid fa-xmark"></i></li>
            
          </ul> */}


          const save = () => {
            const text = document.querySelector(".box input");
            const data = [];
            text.forEach((element) => {
                console.log(element.value);
            });
          }
const addList = (text) => {
    const list  = document.createElement("ul");
    list.classList.add("to-do-list");
    list.innerHTML = `<li>${text}<i class="fa-solid fa-xmark"></i></li>`

    list.querySelector("i").addEventListener("click", () => {
        list.remove();
    })
    list.addEventListener("click", () => {
        list.classList.toggle('done') 
    })
    box.appendChild(list);
}