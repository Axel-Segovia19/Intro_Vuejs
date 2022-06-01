Vue.createApp({
    data() { // for us to define the data in the HTML page we need to call data() {}.
        return { // data() must return an objeect
            goals: [], // will hold the data we will enter into enterValue input 
            enteredValue: '' // look at input element in html it holds the v-model="enteredValue" this connects that input with the Vuejs data  prop
        };
    },
    methods: { // add functions to the html elements in html by calling the elements connected with v-model
        addGoal() {
            this.goals.push(this.enteredValue); // this.goals is pointing at goals [] in data and will .push() the information stored into entered value into the goals[] 
            this.enteredValue = ''; // will set the input info to an empty string so input field goes empty after entering info is done
        }
    }
}).mount('#app'); // uses css selector of app since a div with id of app has this in html you can call it by mounting it!

// const buttonEl = document.querySelector('button') // pointing to button element in html
// const inputEl = document.querySelector('input') // pointing to input element in html
// const listEl = document.querySelector('ul') // pointing to ul element in html page 

// function addGoal() {
//     const enteredValue = inputEl.value; // getting the users input by calling the input value assigning it to the enteredValue
//     const listItemEl = document.createElement('li'); // creating a new list element by calling document.createElement assigning it to listItem
//     listItemEl.textContent = enteredValue; // using the newly created list item as text = to the enter value 
//     listEl.appendChild(listItemEl) // adding the list item to the ul element by appneding it to listEl
//     inputEl.value = ''; // 
// }

// buttonEl.addEventListener('click', addGoal) // .addEventListener as a click like this and pointing at addGoal as a function to that click when it occurs
