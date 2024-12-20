/**
 * In the HTML, there is an element with the id "click-me", you need to register
 * a new event listener that will trigger an alert when the element is clicked.
 * The alert text should contain "Button clicked"
 */
export function reactToClickEvent() {
    // Write your code here
    const button = document.getElementById("click-me");
    button.addEventListener("click", function () {
        alert("Button clicked");
    });
}

/**
 * You should register an event listener on the same button as the last exercise.
 * But this time you should add a new div below the button with the content "clicked"
 */
export function addEventToDomOnClick() {
    // Write your code here
    const button = document.getElementById("click-me");
    button.addEventListener("click", function () {
        const newDiv = document.createElement("div");
        newDiv.textContent = "clicked";
        button.insertAdjacentElement('afterend', newDiv);
    });
}