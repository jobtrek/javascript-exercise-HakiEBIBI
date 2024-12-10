/**
 * You should trigger an alert when the user hits enter after entering text on the
 * input with id "write-some-text". The text on the alert should be the text typed in the input.
 * If input his empty, you should not trigger the alert
 */
export function displayInputContentInAlertOnEnterKey() {
    // Write your code here
    const input = document.getElementById("write-some-text");
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            const inputText = input.value.trim();
            if (inputText !== "") {
                alert(inputText);
            }
        }
    });
}

/**
 * On the page, you have an HTML input with the id "list-input".
 * The user can write text into it, and when he presses enter or blur the field,
 * the text should be added to a list of elements with id "list".
 */
export function addElementsInListOnEnterKey() {
    // Write your code here
    const listElement = document.getElementById("list")
    const input = document.getElementById("list-input")

    function addItemToList() {
        const inputText = input.value.trim()
        if (inputText !== "") {
            const listItem = document.createElement("li")
            listItem.textContent = inputText
            listElement.appendChild(listItem)
            input.value = ""
        }
    }

    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addItemToList()
        }
    })

    input.addEventListener("blur", addItemToList)
}

/**
 * Add functionalities to the list. Now, when you click on one of the li, the element should be removed.
 * Use the same list as the previous exercise. "#list"
 */
export function removeElementsFromListWhenClicked() {
    // Write your code here
    const list = document.querySelector('#list');

    // Add click event listener to the list (event delegation)
    list.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            event.target.remove()
        }
    })
}