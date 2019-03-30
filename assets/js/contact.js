const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const subjectInput = document.querySelector('#subject');
const messageInput = document.querySelector('#message');
const msg = document.querySelector('#contact');
const userlist = document.querySelector('#users');
const userlists = document.querySelector('#userss');



myForm.addEventListener('submit', onSumbit);
function onSumbit(e) {
    e.preventDefault();
    const li = document.createElement('li');
    // console.log(nameInput.value + ' ' + emailInput.value);

    if (nameInput.value === '' || emailInput === '') {
        // alert('Please enter all fileds');
        msg.classList.add('error');
        userlists.innerHTML = 'Please try again.';

    }
    else {
        userlists.innerHTML = '';
        const text = document.createTextNode(`${nameInput.value}:${emailInput.value}:${subjectInput.value}:${messageInput.value}`);

        li.appendChild(text);

        userlist.appendChild(li);

        let deleteLink = document.createElement("a");
        deleteLink.textContent = " [Delete]";
        // deleteLink.href = "#";
        deleteLink.addEventListener("click", deleteItem);
        li.appendChild(deleteLink);

        userlist.appendChild(li);
        input.value = ""; 

        function deleteItem() {
            userlist.removeChild(li);
        }
        //console.log(li);

    }

}









