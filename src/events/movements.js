/**
 * Register a new event listener that will retrieve the position of the mouse on the screen
 * and display the coordinates on the p with id "mouse-coordinates".
 * You need to display coordinates as follows : "x: 232, y: 332
 */
export function mouseMovements() {
    // Write your code here
    const coordinatesDisplay = document.getElementById('mouse-coordinates');

    document.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;

        coordinatesDisplay.textContent = `x: ${x}, y: ${y}`;
    });
}

const randomRGB = () => {
    const o = Math.round
    const r = Math.random
    const s = 255
    return `rgba(${o(r() * s)},${o(r() * s)},${o(r() * s)})`
}
let enteringColor = ''

/**
 * On the page, you have an input with the id "focus-me".
 * You need to add three behaviors to this input.
 * First, when you hover it, you have to display a message in his label with
 *        the text "Yes, you hover me !". and remove the message when the hover is loosed.
 * Second, when you focus the input, you have to change hist border color to a random one,
 *         but different from all the previously used and different from the original one.
 * Third, when you loose focus of the field, you need to reset the border color to the default one.
 */
export function hoverFocusAndBlur() {
    // Write your code here
    const focus = document.querySelector("#focus-me");
    const label = focus.previousElementSibling;
    const originalLabelText = label.textContent;
    const initialColor = window.getComputedStyle(focus).getPropertyValue('border-color');
    const usedColors = new Set([initialColor]);

    focus.addEventListener('mouseover', function() {
        label.textContent = "Yes, you hover me !";
    });

    focus.addEventListener('mouseout', function() {
        label.textContent = originalLabelText;
    });

    focus.addEventListener('focus', function() {
        let newColor;
        do {
            newColor = randomRGB();
        } while (usedColors.has(newColor));
        usedColors.add(newColor);
        this.style.borderColor = newColor;
    });

    focus.addEventListener('blur', function() {
        this.style.borderColor = initialColor;
    });
}

/**
 * On the same input from the previous exercise, you need to add a new behavior :
 * Now, each new letter on the input should randomly change the default color of the input border.
 * You don't need to change the current border color, which is controlled by the previous exercise,
 * but you need to change the original color, the one that will be applied when the
 * precedent exercise will lose focus of the field.
 * Take the opportunity to also apply this colour to the text of the 2 input labels.
 */
export function changesOnInputEvents() {
    // Write your code here
    const input = document.querySelector("#focus-me");
    const label1 = input.previousElementSibling;
    const label2 = input.nextElementSibling;
    const initialColor = window.getComputedStyle(input).getPropertyValue('border-color');

    input.addEventListener("input", function() {
        const newColor = randomRGB();
        input.style.setProperty('--default-border-color', newColor);
        label1.style.color = newColor;
        label2.style.color = newColor;
    });

    input.style.setProperty('--default-border-color', initialColor);

    input.addEventListener('blur', function() {
        this.style.borderColor = getComputedStyle(this).getPropertyValue('--default-border-color');
    });
}
