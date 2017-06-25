
var News = document.getElementById('News');   
var url = "https://private-e99507-kabaros.apiary-mock.com/news";                                     //server location
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET',url)

ourRequest.onload = function() {
var newData = JSON.parse(ourRequest.responseText);
renderHTML(newData);
}
ourRequest.send();


function renderHTML(data){
    var htmlString = '';
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].title + "</p>" + "<p>" + data[i].summary + "</p>";
    }
    News.insertAdjacentHTML('beforeend',htmlString);
}


var SHnews = document.querySelector('#news-btn');
SHnews.addEventListener('click', ShowHideNews);

function ShowHideNews() {
    ShowHide(document.querySelector('#News'));
}

function ShowHide(element) {
    if (element.className === "hidden") {
        element.className = 'show';
    } else {
        element.className = 'hidden';
    }
}

var MInfoButton = document.querySelector('.MInfo');
MInfoButton.addEventListener('click', News);

function News() {
    ShowHide(document.querySelector('#News p'));
}

var submitButton = document.querySelector('.submitBtn');

submitButton.addEventListener('click', submitForm);

function submitForm(event) {
    event.preventDefault();

    var nameInput = document.querySelector('#example-name-input');
    var nameInputWV = nameInput.value;
    var emailInput = document.querySelector('#example-email-input');
    var emailInputWV = emailInput.value;
    var numberInput = document.querySelector('#example-phone-input');
    var numberInputWV = numberInput.value;

    var SubmitFormIsValid = true;
    if (nameInputWV.length === 0) {
        nameInput.className = 'nameInput inValid';
        SubmitFormIsValid = false;
    }

    if (emailInputWV.length === 0 || emailInputWV.indexOf('@') === -1) {
        emailInput.className = 'emailInput inValid';
        SubmitFormIsValid = false;
    }

    if (numberInputWV.length > 11) {
        numberInput.className = 'numberInput inValid';
        SubmitFormIsValid = false;
    }

    if (SubmitFormIsValid) {
        alert('Thanks for filling the form');
        numberInput.className = 'numberInput';
        numberInput.value = "";

        emailInput.className = 'emailInput';
        emailInput.value = "";

        nameInput.className = 'nameInput';
        nameInput.value = "";
    }
}




