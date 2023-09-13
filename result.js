// Task 1

const myCustomDiv = document.createElement("div");
myCustomDiv.textContent = "This is loren ipsum text";

const productItems = document.querySelectorAll(".product-item");

myCustomDiv.style.cssText = `
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-shadow: 1px 1px 5px 5px #f1f1f1;
  border-radius: 10px;
  margin: 1.5rem 0.25rem;

  text-align:center;
`;
function updateSizes() {
  if (window.matchMedia("(min-width:1200px)").matches) {
    myCustomDiv.style.flexGrow = "1";
    myCustomDiv.style.flexBasis = "50%";
    myCustomDiv.style.width = "";
  } else if (window.matchMedia("(max-width:768px)").matches) {
    myCustomDiv.style.width = "100%";
    myCustomDiv.style.flexGrow = "";
  } else if (window.matchMedia("(max-width:1200px)").matches) {
    myCustomDiv.style.flexBasis = "58%";
    myCustomDiv.style.flexGrow = "0";
    myCustomDiv.style.width = "";
  }
}
productItems[3].insertAdjacentElement("afterend", myCustomDiv);

window.addEventListener("resize", updateSizes);

// Task 2

const actionTag = document.querySelector(".delete");
const toCart = document.querySelector(".tocart");

const exsitingObject = document.querySelector(".red-div");

function createMyDiv() {
  const grandTotal = document.querySelector(".minicart_grand_total");
  const parentDiv = document.querySelector(".minicart_content");

  const myDiv = document.createElement("div");
  myDiv.className = "red-div";
  myDiv.style.cssText = `
    width: 100px;
    height:100px;
    background-color: red;
    `;

  const button = grandTotal.nextSibling;
  parentDiv.insertBefore(myDiv, button);
}

if (exsitingObject) {
  console.log("object exist");
} else {
  createMyDiv();
}

// Task 3

/*

https://www.canva.com/design/DAFuT4n-Yf4/HnfbEee2gGjBpUK5_Yr7Cw/edit?utm_content=DAFuT4n-Yf4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

*/
