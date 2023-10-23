function easiest() {
    let variables = ['x', 'y', 'z'];
    let answer = Math.floor(Math.random() * 10) + 1;
    let factor = Math.floor(Math.random() * 10) + 1;
    let result = factor + variables[Math.floor(Math.random() * 3)] + ' = ' + (answer * factor);
    let div = document.querySelector('.easiest > p');
    div.innerHTML = result;
}
function easy() {
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        let variables = ['x', 'y', 'z'];
        let answer = Math.floor(Math.random() * 50) + 1;
        let factor = Math.floor(Math.random() * 50) + 1;
        let term = Math.floor(Math.random() * 50) + 1;
        let result = factor + variables[Math.floor(Math.random() * 3)] + ' + ' + term + ' = ' + (answer * factor + term);
        let div = document.querySelector('.easy > p');
        div.innerHTML = result;
    } else if (random == 1) {
        let variables = ['x', 'y', 'z'];
        let answer = Math.floor(Math.random() * 50) + 1;
        let factor = Math.floor(Math.random() * 50) + 1;
        let term = Math.floor(Math.random() * 50) + 1;
        let result = factor + variables[Math.floor(Math.random() * 3)] + ' - ' + term + ' = ' + (answer * factor - term);
        let div = document.querySelector('.easy > p');
        div.innerHTML = result;
    } else if (random == 2) {
        let variables = ['x', 'y', 'z'];
        let answer = Math.floor(Math.random() * 50) + 1;
        let factor = Math.floor(Math.random() * 50) + 1;
        let term = Math.floor(Math.random() * 50) + 1;
        let result = factor + variables[Math.floor(Math.random() * 3)] + ' ∙ ' + term + ' = ' + (answer * factor * term);
        let div = document.querySelector('.easy > p');
        div.innerHTML = result;
    } else {
        let variables = ['x', 'y', 'z'];
        let answer = Math.floor(Math.random() * 50) + 1;
        let factor = Math.floor(Math.random() * 50) + 1;
        let term = Math.floor(Math.random() * 50) + 1;
        let result = factor + variables[Math.floor(Math.random() * 3)] + ' ÷ ' + term + ' = ' + (answer * factor / term);
        let div = document.querySelector('.easy > p');
        div.innerHTML = result;
    }
}
function normal() {
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        let random = Math.floor(Math.random() * 3);
        if (random == 0) {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 100) + 1;
            let factor = Math.floor(Math.random() * 100) + 1;
            let term_1 = Math.floor(Math.random() * 100) + 1;
            let term_2 = Math.floor(Math.random() * 100) + 1;
            let result = term_1 + ' + ' + factor + variables[Math.floor(Math.random() * 3)] + ' + ' + term_2 + ' = ' + (term_1 + (answer * factor) + term_2);
            let div = document.querySelector('.normal > p');
            div.innerHTML = result;
        } else if (random == 1) {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 100) + 1;
            let factor = Math.floor(Math.random() * 100) + 1;
            let term_1 = Math.floor(Math.random() * 100) + 1;
            let term_2 = Math.floor(Math.random() * 100) + 1;
            let result = term_1 + ' + ' + factor + variables[Math.floor(Math.random() * 3)] + ' - ' + term_2 + ' = ' + (term_1 + (answer * factor) - term_2);
            let div = document.querySelector('.normal > p');
            div.innerHTML = result;
        } else if (random == 2) {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 100) + 1;
            let factor = Math.floor(Math.random() * 100) + 1;
            let term_1 = Math.floor(Math.random() * 100) + 1;
            let term_2 = Math.floor(Math.random() * 100) + 1;
            let result = term_1 + ' + ' + factor + variables[Math.floor(Math.random() * 3)] + ' ∙ ' + term_2 + ' = ' + (term_1 + (answer * factor) * term_2);
            let div = document.querySelector('.normal > p');
            div.innerHTML = result;
        } else {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 100) + 1;
            let factor = Math.floor(Math.random() * 100) + 1;
            let term_1 = Math.floor(Math.random() * 100) + 1;
            let term_2 = Math.floor(Math.random() * 100) + 1;
            let result = term_1 + ' + ' + factor + variables[Math.floor(Math.random() * 3)] + ' ÷ ' + term_2 + ' = ' + (term_1 + (answer * factor) / term_2);
            let div = document.querySelector('.normal > p');
            div.innerHTML = result;
        }
    } else if (random == 1) {
        let random = Math.floor(Math.random() * 3);
        if (random == 0) {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 100) + 1;
            let factor = Math.floor(Math.random() * 100) + 1;
            let term_1 = Math.floor(Math.random() * 100) + 1;
            let term_2 = Math.floor(Math.random() * 100) + 1;
            let result = term_1 + ' - ' + factor + variables[Math.floor(Math.random() * 3)] + ' + ' + term_2 + ' = ' + (term_1 - (answer * factor) + term_2);
            let div = document.querySelector('.normal > p');
            div.innerHTML = result;
        } else if (random == 1) {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 100) + 1;
            let factor = Math.floor(Math.random() * 100) + 1;
            let term_1 = Math.floor(Math.random() * 100) + 1;
            let term_2 = Math.floor(Math.random() * 100) + 1;
            let result = term_1 + ' - ' + factor + variables[Math.floor(Math.random() * 3)] + ' - ' + term_2 + ' = ' + (term_1 - (answer * factor) - term_2);
            let div = document.querySelector('.normal > p');
            div.innerHTML = result;
        } else if (random == 2) {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 100) + 1;
            let factor = Math.floor(Math.random() * 100) + 1;
            let term_1 = Math.floor(Math.random() * 100) + 1;
            let term_2 = Math.floor(Math.random() * 100) + 1;
            let result = term_1 + ' - ' + factor + variables[Math.floor(Math.random() * 3)] + ' ∙ ' + term_2 + ' = ' + (term_1 - (answer * factor) * term_2);
            let div = document.querySelector('.normal > p');
            div.innerHTML = result;
        } else {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 100) + 1;
            let factor = Math.floor(Math.random() * 100) + 1;
            let term_1 = Math.floor(Math.random() * 100) + 1;
            let term_2 = Math.floor(Math.random() * 100) + 1;
            let result = term_1 + ' - ' + factor + variables[Math.floor(Math.random() * 3)] + ' ÷ ' + term_2 + ' = ' + (term_1 - (answer * factor) / term_2);
            let div = document.querySelector('.normal > p');
            div.innerHTML = result;
        }
    } else if (random == 2) {
        let random = Math.floor(Math.random() * 3);
        if (random == 0) {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 100) + 1;
            let factor = Math.floor(Math.random() * 100) + 1;
            let term_1 = Math.floor(Math.random() * 100) + 1;
            let term_2 = Math.floor(Math.random() * 100) + 1;
            let result = term_1 + ' ∙ ' + factor + variables[Math.floor(Math.random() * 3)] + ' + ' + term_2 + ' = ' + (term_1 * (answer * factor) + term_2);
            let div = document.querySelector('.normal > p');
            div.innerHTML = result;
        } else if (random == 1) {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 100) + 1;
            let factor = Math.floor(Math.random() * 100) + 1;
            let term_1 = Math.floor(Math.random() * 100) + 1;
            let term_2 = Math.floor(Math.random() * 100) + 1;
            let result = term_1 + ' ∙ ' + factor + variables[Math.floor(Math.random() * 3)] + ' - ' + term_2 + ' = ' + (term_1 * (answer * factor) - term_2);
            let div = document.querySelector('.normal > p');
            div.innerHTML = result;
        } else if (random == 2) {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 100) + 1;
            let factor = Math.floor(Math.random() * 100) + 1;
            let term_1 = Math.floor(Math.random() * 100) + 1;
            let term_2 = Math.floor(Math.random() * 100) + 1;
            let result = term_1 + ' ∙ ' + factor + variables[Math.floor(Math.random() * 3)] + ' ∙ ' + term_2 + ' = ' + (term_1 * (answer * factor) * term_2);
            let div = document.querySelector('.normal > p');
            div.innerHTML = result;
        } else {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 100) + 1;
            let factor = Math.floor(Math.random() * 100) + 1;
            let term_1 = Math.floor(Math.random() * 100) + 1;
            let term_2 = Math.floor(Math.random() * 100) + 1;
            let result = term_1 + ' ∙ ' + factor + variables[Math.floor(Math.random() * 3)] + ' ÷ ' + term_2 + ' = ' + (term_1 * (answer * factor) / term_2);
            let div = document.querySelector('.normal > p');
            div.innerHTML = result;
        }
    } else {
        let random = Math.floor(Math.random() * 3);
        if (random == 0) {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 100) + 1;
            let factor = Math.floor(Math.random() * 100) + 1;
            let term_1 = Math.floor(Math.random() * 100) + 1;
            let term_2 = Math.floor(Math.random() * 100) + 1;
            let result = term_1 + ' ÷ ' + factor + variables[Math.floor(Math.random() * 3)] + ' + ' + term_2 + ' = ' + (term_1 / (answer * factor) + term_2);
            let div = document.querySelector('.normal > p');
            div.innerHTML = result;
        } else if (random == 1) {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 100) + 1;
            let factor = Math.floor(Math.random() * 100) + 1;
            let term_1 = Math.floor(Math.random() * 100) + 1;
            let term_2 = Math.floor(Math.random() * 100) + 1;
            let result = term_1 + ' ÷ ' + factor + variables[Math.floor(Math.random() * 3)] + ' - ' + term_2 + ' = ' + (term_1 / (answer * factor) - term_2);
            let div = document.querySelector('.normal > p');
            div.innerHTML = result;
        } else if (random == 2) {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 100) + 1;
            let factor = Math.floor(Math.random() * 100) + 1;
            let term_1 = Math.floor(Math.random() * 100) + 1;
            let term_2 = Math.floor(Math.random() * 100) + 1;
            let result = term_1 + ' ÷ ' + factor + variables[Math.floor(Math.random() * 3)] + ' ∙ ' + term_2 + ' = ' + (term_1 / (answer * factor) * term_2);
            let div = document.querySelector('.normal > p');
            div.innerHTML = result;
        } else {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 100) + 1;
            let factor = Math.floor(Math.random() * 100) + 1;
            let term_1 = Math.floor(Math.random() * 100) + 1;
            let term_2 = Math.floor(Math.random() * 100) + 1;
            let result = term_1 + ' ÷ ' + factor + variables[Math.floor(Math.random() * 3)] + ' ÷ ' + term_2 + ' = ' + (term_1 / (answer * factor) / term_2);
            let div = document.querySelector('.normal > p');
            div.innerHTML = result;
        }
    }
}
function hard() {
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        let random = Math.floor(Math.random() * 3);
        if (random == 0) {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 1000) + 1;
            let factor = Math.floor(Math.random() * 1000) + 1;
            let term_1 = Math.floor(Math.random() * 1000) + 1;
            let term_2 = Math.floor(Math.random() * 1000) + 1;
            let result = term_1 + ' + ' + factor + variables[Math.floor(Math.random() * 3)] + ' + ' + term_2 + ' = ' + (term_1 + (answer * factor) + term_2);
            let div = document.querySelector('.hard > p');
            div.innerHTML = result;
        } else if (random == 1) {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 1000) + 1;
            let factor = Math.floor(Math.random() * 1000) + 1;
            let term_1 = Math.floor(Math.random() * 1000) + 1;
            let term_2 = Math.floor(Math.random() * 1000) + 1;
            let result = term_1 + ' + ' + factor + variables[Math.floor(Math.random() * 3)] + ' - ' + term_2 + ' = ' + (term_1 + (answer * factor) - term_2);
            let div = document.querySelector('.hard > p');
            div.innerHTML = result;
        } else if (random == 2) {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 1000) + 1;
            let factor = Math.floor(Math.random() * 1000) + 1;
            let term_1 = Math.floor(Math.random() * 1000) + 1;
            let term_2 = Math.floor(Math.random() * 1000) + 1;
            let result = term_1 + ' + ' + factor + variables[Math.floor(Math.random() * 3)] + ' ∙ ' + term_2 + ' = ' + (term_1 + (answer * factor) * term_2);
            let div = document.querySelector('.hard > p');
            div.innerHTML = result;
        } else {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 1000) + 1;
            let factor = Math.floor(Math.random() * 1000) + 1;
            let term_1 = Math.floor(Math.random() * 1000) + 1;
            let term_2 = Math.floor(Math.random() * 1000) + 1;
            let result = term_1 + ' + ' + factor + variables[Math.floor(Math.random() * 3)] + ' ÷ ' + term_2 + ' = ' + (term_1 + (answer * factor) / term_2);
            let div = document.querySelector('.hard > p');
            div.innerHTML = result;
        }
    } else if (random == 1) {
        let random = Math.floor(Math.random() * 3);
        if (random == 0) {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 1000) + 1;
            let factor = Math.floor(Math.random() * 1000) + 1;
            let term_1 = Math.floor(Math.random() * 1000) + 1;
            let term_2 = Math.floor(Math.random() * 1000) + 1;
            let result = term_1 + ' - ' + factor + variables[Math.floor(Math.random() * 3)] + ' + ' + term_2 + ' = ' + (term_1 - (answer * factor) + term_2);
            let div = document.querySelector('.hard > p');
            div.innerHTML = result;
        } else if (random == 1) {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 1000) + 1;
            let factor = Math.floor(Math.random() * 1000) + 1;
            let term_1 = Math.floor(Math.random() * 1000) + 1;
            let term_2 = Math.floor(Math.random() * 1000) + 1;
            let result = term_1 + ' - ' + factor + variables[Math.floor(Math.random() * 3)] + ' - ' + term_2 + ' = ' + (term_1 - (answer * factor) - term_2);
            let div = document.querySelector('.hard > p');
            div.innerHTML = result;
        } else if (random == 2) {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 1000) + 1;
            let factor = Math.floor(Math.random() * 1000) + 1;
            let term_1 = Math.floor(Math.random() * 1000) + 1;
            let term_2 = Math.floor(Math.random() * 1000) + 1;
            let result = term_1 + ' - ' + factor + variables[Math.floor(Math.random() * 3)] + ' ∙ ' + term_2 + ' = ' + (term_1 - (answer * factor) * term_2);
            let div = document.querySelector('.hard > p');
            div.innerHTML = result;
        } else {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 1000) + 1;
            let factor = Math.floor(Math.random() * 1000) + 1;
            let term_1 = Math.floor(Math.random() * 1000) + 1;
            let term_2 = Math.floor(Math.random() * 1000) + 1;
            let result = term_1 + ' - ' + factor + variables[Math.floor(Math.random() * 3)] + ' ÷ ' + term_2 + ' = ' + (term_1 - (answer * factor) / term_2);
            let div = document.querySelector('.hard > p');
            div.innerHTML = result;
        }
    } else if (random == 2) {
        let random = Math.floor(Math.random() * 3);
        if (random == 0) {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 1000) + 1;
            let factor = Math.floor(Math.random() * 1000) + 1;
            let term_1 = Math.floor(Math.random() * 1000) + 1;
            let term_2 = Math.floor(Math.random() * 1000) + 1;
            let result = term_1 + ' ∙ ' + factor + variables[Math.floor(Math.random() * 3)] + ' + ' + term_2 + ' = ' + (term_1 * (answer * factor) + term_2);
            let div = document.querySelector('.hard > p');
            div.innerHTML = result;
        } else if (random == 1) {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 1000) + 1;
            let factor = Math.floor(Math.random() * 1000) + 1;
            let term_1 = Math.floor(Math.random() * 1000) + 1;
            let term_2 = Math.floor(Math.random() * 1000) + 1;
            let result = term_1 + ' ∙ ' + factor + variables[Math.floor(Math.random() * 3)] + ' - ' + term_2 + ' = ' + (term_1 * (answer * factor) - term_2);
            let div = document.querySelector('.hard > p');
            div.innerHTML = result;
        } else if (random == 2) {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 1000) + 1;
            let factor = Math.floor(Math.random() * 1000) + 1;
            let term_1 = Math.floor(Math.random() * 1000) + 1;
            let term_2 = Math.floor(Math.random() * 1000) + 1;
            let result = term_1 + ' ∙ ' + factor + variables[Math.floor(Math.random() * 3)] + ' ∙ ' + term_2 + ' = ' + (term_1 * (answer * factor) * term_2);
            let div = document.querySelector('.hard > p');
            div.innerHTML = result;
        } else {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 1000) + 1;
            let factor = Math.floor(Math.random() * 1000) + 1;
            let term_1 = Math.floor(Math.random() * 1000) + 1;
            let term_2 = Math.floor(Math.random() * 1000) + 1;
            let result = term_1 + ' ∙ ' + factor + variables[Math.floor(Math.random() * 3)] + ' ÷ ' + term_2 + ' = ' + (term_1 * (answer * factor) / term_2);
            let div = document.querySelector('.hard > p');
            div.innerHTML = result;
        }
    } else {
        let random = Math.floor(Math.random() * 3);
        if (random == 0) {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 1000) + 1;
            let factor = Math.floor(Math.random() * 1000) + 1;
            let term_1 = Math.floor(Math.random() * 1000) + 1;
            let term_2 = Math.floor(Math.random() * 1000) + 1;
            let result = term_1 + ' ÷ ' + factor + variables[Math.floor(Math.random() * 3)] + ' + ' + term_2 + ' = ' + (term_1 / (answer * factor) + term_2);
            let div = document.querySelector('.hard > p');
            div.innerHTML = result;
        } else if (random == 1) {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 1000) + 1;
            let factor = Math.floor(Math.random() * 1000) + 1;
            let term_1 = Math.floor(Math.random() * 1000) + 1;
            let term_2 = Math.floor(Math.random() * 1000) + 1;
            let result = term_1 + ' ÷ ' + factor + variables[Math.floor(Math.random() * 3)] + ' - ' + term_2 + ' = ' + (term_1 / (answer * factor) - term_2);
            let div = document.querySelector('.hard > p');
            div.innerHTML = result;
        } else if (random == 2) {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 1000) + 1;
            let factor = Math.floor(Math.random() * 1000) + 1;
            let term_1 = Math.floor(Math.random() * 1000) + 1;
            let term_2 = Math.floor(Math.random() * 1000) + 1;
            let result = term_1 + ' ÷ ' + factor + variables[Math.floor(Math.random() * 3)] + ' ∙ ' + term_2 + ' = ' + (term_1 / (answer * factor) * term_2);
            let div = document.querySelector('.hard > p');
            div.innerHTML = result;
        } else {
            let variables = ['x', 'y', 'z'];
            let answer = Math.floor(Math.random() * 1000) + 1;
            let factor = Math.floor(Math.random() * 1000) + 1;
            let term_1 = Math.floor(Math.random() * 1000) + 1;
            let term_2 = Math.floor(Math.random() * 1000) + 1;
            let result = term_1 + ' ÷ ' + factor + variables[Math.floor(Math.random() * 3)] + ' ÷ ' + term_2 + ' = ' + (term_1 / (answer * factor) / term_2);
            let div = document.querySelector('.hard > p');
            div.innerHTML = result;
        }
    }
}
function start() {
    easiest();
    easy();
    normal();
    hard();
}
start();