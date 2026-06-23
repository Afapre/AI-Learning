/*Defining variables*/
let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string = ""; /*string for storing results to display in input box*/
let arr = Array.from(buttons); /*creates array of buttons*/

arr.forEach(button => {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string=eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);/*removes last digit from string*/
            input.value = string;
        }
        else if(e.target.innerHTML == '%'){
            string = eval(string/100);
            input.value = string;
        }
        
        else{
            string += e.target.innerHTML;
            input.value=string;
        }
    })/*what happens whenever someone clicks the button*/
})