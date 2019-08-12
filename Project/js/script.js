document.addEventListener("DOMContentLoaded", function(event) {

    // getting posts from database (dataBase.json)

    function getContent() {
        let xhr = new XMLHttpRequest();
        xhr.open('GET','http://localhost:4000/posts');
        xhr.send();
        xhr.onreadystatechange = function () {
            if(xhr.readyState == 4 && xhr.status == 200){
                renderElem(JSON.parse(xhr.response))
            }
        }
    };

    // creating post element

    function renderElem(response) {

        for(let data of response){

            // Model of new element
            let offer = document.getElementById('offer_elem');

            // Filling empty 'title' field

            offer.getElementsByClassName('offer_title')[0].innerText = data.name;

            // Filling empty 'options' field

            for (let optionKey in data.options) {
                const optionValue = data.options[optionKey];
                const optionsEl = offer.getElementsByClassName(`offer_description_item_value_${optionKey}`);
                optionsEl[0].innerHTML = optionValue;
            }

            // Filling empty 'text' field

            offer.getElementsByClassName('offer_item_text')[0].innerText = data.description;

            // Filling empty 'category' field

            offer.getElementsByClassName('offer_feature_item_value')[0].innerText = data.category;

            // Filling empty 'text' field

            offer.getElementsByClassName('offer_item_text')[0].innerText = data.description;

            //console.dir(offer.getElementsByClassName('offer_item_text')[0]);
            offer.getElementsByClassName('offer_item_text')[0].classList.add('hidden_text');

            function addResizeButton(){
                let more = document.createElement('span');
                more.innerText = 'more';
                more.classList = 'offer_more_btn';
                offer.getElementsByClassName('offer_item_text')[0].appendChild(more);

            }
            addResizeButton();






            // Filling empty 'skills' field

            for (let skill of data.skills) {
                let liElem = document.createElement('li');
                liElem.classList += 'offer_skills_item';
                liElem.innerText = skill.name;
                offer.getElementsByClassName('offer_skills')[0].appendChild(liElem);
            }
            let liElemMore = document.createElement('li');

            liElemMore.classList.add('offer_skills_more');

            liElemMore.innerText = '18 and more';

            offer.getElementsByClassName('offer_skills')[0].appendChild(liElemMore);

            // Filling empty 'client' field

            offer.getElementsByClassName('offer_country')[0].innerText = data.client.country;

            offer.getElementsByClassName('offer_rating')[0].innerText = data.client.rating;

            // Rating styles

            let stars = offer.getElementsByClassName('fa-star');

            for (let i = 0; i <= Math.ceil(data.client.rating)-1 ; i++) {
                 stars[i].classList.add('golden_star');
            }

            // Creating new DOM element for new offer

            let newOfferElem = document.createElement('div');
            newOfferElem.innerHTML = offer.innerHTML;
            newOfferElem.classList += 'offer';
            newOfferElem.hidden = false;
            document.getElementsByClassName('offer_container')[0].appendChild(newOfferElem);


            // Clear element template

            offer.getElementsByClassName('offer_skills')[0].innerHTML = '';

            for (let i = 0; i <= Math.round(data.client.rating)-1 ; i++) {
                stars[i].classList.remove('golden_star');
            }
        }
    }
    getContent();

    function addMoreContent() {
        let btns = document.getElementsByClassName('offer_more_btn');
        for(let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', function () {
                this.parentElement.classList.toggle('hidden_text');
            })
        }
    }
    setTimeout( addMoreContent, 3000);


    // Hidden menu script
    document.getElementsByClassName('menu_button')[0].onclick = function () {
        document.getElementsByClassName('menu')[0].classList.toggle('menu_visible');
        document.getElementsByClassName('menu_button')[0].classList.toggle('menu_button_opened')
    };


    // 2nd task. Pintrest RSS feed

    // Click event handler

    document.getElementById('searchUserBtn').onclick = function (event) {

        event.preventDefault();

        const username =  document.getElementById('searchUserInput').value ;

        if (username){
            getPin(username.toString());
        }
    };

    // Getting RSS function

    function getPin(username) {

        event.preventDefault();

        fetch(`http://localhost:5000/user?username=${username}`)
            .then(console.log(`response = ${response}`))
            .catch(console.log(res))

    };


});

