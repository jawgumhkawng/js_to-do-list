const inputTag = document.getElementsByClassName("form-control")[0];
const OrderList = document.getElementsByClassName("order")[0];

let spanTagId = 1;
const changer = (event) => {
    const inputValue = event.target.value;
    const productContainer = document.createElement("div");
    productContainer.classList.add("productContaier")
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("spanTag");

    parentDiv.addEventListener("click", () =>{
        const Exit = parentDiv.classList.contains("productList")
        if(Exit){ //if(Exit === true)...another way
            parentDiv.classList.remove("productList");
        }
        else{
        parentDiv.classList.add("productList");
    }
    });
    const trushItem = document.createElement("i");
    trushItem.classList.add("fa-solid","fa-trash-can");
    const spanTag = document.createElement("span");
    trushItem.addEventListener("click", (event)=>{
        productContainer.remove();
    });
    spanTag.id = spanTagId;
    const product = spanTagId.toString() +". "+inputValue
    spanTag.append(product);
    parentDiv.append(spanTag);
    productContainer.append(parentDiv,trushItem);
    OrderList.append(productContainer);
    inputTag.value="";
    spanTagId += 1;
};

inputTag.addEventListener("change",changer);





