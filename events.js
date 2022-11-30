// Your code here


// Alert user the window has loaded
window.onload = () => {
    alert("Window Loaded")
};


// Change background to red for input field
function redInputFunction(event) {
    if (document.getElementById("red-input").value === 'red') {
        document.getElementById("red-input").style.backgroundColor = "red";
    }
};


// When #add-item is pressed, a new <li> element with the value from #list-add 
// is created and appended to the <ul>.

function listAddFunction(event) {
    const li = document.createElement("li");
    li.innerText = document.getElementById("list-add").value;
    document.getElementsByTagName("ul")[0].append(li)
};


// When a new color is selected in #color-select, change the 
// background color of the <section> it belongs to.


function newColorFunction(event) {
    document.getElementById("section-3").style.backgroundColor = document.getElementById("color-select").value;
};




// Event Listeners


window.addEventListener("DOMContentLoaded", event => {
    alert("DOM has loaded");
  
    // Event listener for text input === "red"
    const redInput = document.getElementById("red-input");
    redInput.addEventListener("input", redInputFunction);

    // Event listener for adding li to ul on Submit.
    const liSubmit = document.getElementById("add-item");
    liSubmit.addEventListener("click", listAddFunction);

    // Event Listener for changing Background Color on Input.
    const colorSelect = document.getElementById("color-select");
    colorSelect.addEventListener("input", newColorFunction);

    // Remove Event Listeners

    document.getElementById('remove-listeners').addEventListener("click", event => {
        redInput.removeEventListener("input", redInputFunction);
        liSubmit.removeEventListener("click", listAddFunction);
        colorSelect.removeEventListener("input", newColorFunction);
    })

    const restoreListeners = document.createElement("button");
    restoreListeners.id = "restore-listeners"
    restoreListeners.innerHTML = "Restore Listeners"

    document.getElementById("section-4").appendChild(restoreListeners)

    document.getElementById("restore-listeners").addEventListener("click", event => {
        redInput.addEventListener("input", redInputFunction)
        liSubmit.addEventListener("click", listAddFunction)
        colorSelect.addEventListener("input", newColorFunction)
    });

    const hoverDiv = document.createElement("div");
    hoverDiv.id = "hover-div";
    hoverDiv.innerHTML = "<h2>You Found me!</h2>";
    hoverDiv.style.color = "transparent"; 
    document.body.appendChild(hoverDiv);

    document.getElementById("hover-div").addEventListener("mouseover", event => {
    document.getElementById("hover-div").style.color = "black";
  });

});


