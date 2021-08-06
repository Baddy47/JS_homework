const doc = document.documentElement;
doc.setAttribute('lang', 'en');

const head = document.head;
const body = document.body;

const meta = document.createElement('meta');
meta.setAttribute('charset', 'UTF-8');
head.prepend(meta);

const meta$ = document.createElement('meta');
meta$.setAttribute('http-equiv', 'X-UA-Compatible');
meta$.setAttribute('content', 'IE=edge');
head.prepend(meta$);

const meta$$ = document.createElement('meta');
meta$$.setAttribute('name', 'viewport');
meta$$.setAttribute('content', 'width=device-width, initial-scale=1.0');
head.prepend(meta$$);

const title = document.createElement('title');
title.innerText = 'Homework_8';
head.append(title);

const link = document.createElement('link');
link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo&display=swap');
link.setAttribute('rel', 'stylesheet');
head.append(link);

const link$ = document.createElement('link');
link$.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
link$.setAttribute('rel', 'stylesheet');
head.append(link$);

const link$$ = document.createElement('link');
link$$.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
link$$.setAttribute('rel', 'stylesheet');
head.append(link$$);

const style = document.createElement('style');
head.append(style);

let div = document.createElement('div');
div.className = 'container';
body.prepend(div);

div.innerHTML = `
<div class="title">
    <h1>Choose Your Option</h1>
    <p>But I must explain to you how all this mistaken idea of denouncing </p>
</div>

<div class="container-main">
    <ul class="card">
        <div class="item">Freelancer</div>
        <li class="block">
            <h2>Initially designed to</h2>
            <p>But I must explain to you how all this mistaken idea of denouncing</p>
            <button>Start Here</button>
        </li>
    </ul>

    <ul class="card">
        <div class="item">Studio</div>
        <li class="block">
            <h2>Initially designed to</h2>
            <p>But I must explain to you how all this mistaken idea of denouncing</p>
            <button>Start Here</button>
        </li>
    </ul>
</div>`;

div.style.width = '80%';
div.style.margin = '0 auto';
div.style.textAlign = 'center';

let divTitle = div.firstElementChild;
let divContainerMain = div.lastElementChild;
let titleCss = document.querySelector('.title');

style.insertAdjacentHTML(
    'afterbegin',
    `.title {
        display: inline-block;
        margin-top: 60px;
        margin-bottom: 60px;
    }
    
    .container .title > h1 {
        font-size: 48px;
        font-family: 'Arvo', serif;
        font-weight: normal;
        line-height: 48px;
        padding-bottom: 20px;
        color: #ffffff;
    }
    
    .container .title > p {
        font-size: 14px;
        font-family: 'Open Sans', sans-serif;
        font-weight: normal;   
        line-height: 26px; 
        color: #ffffff;
    }
    
    .container-main {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 80%;
        margin: 0 auto;
    }
    
    .container-main .card {
        list-style: none;
        padding-bottom: 50px;
        padding-left: 50px;
        padding-right: 50px;
        background-color: #ffffff;
    }
    
    .container-main .block {
        width: 300px;
        margin-top: 20px;
        margin-bottom: 15px;
    }
    
    .container-main .item {
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        font-size: 12px;
        font-style: normal;
        text-transform: uppercase;
        line-height: 15px;
        letter-spacing: 2.4px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        margin-top: 80px;
        color: #9FA3A7; 
    }
    
    .container-main .block > h2 {
        font-family: 'Arvo', serif;
        font-size: 36px;
        font-style: normal;
        font-weight: normal;
        line-height: 46px;
        text-align: center;
        margin-bottom: 25px;
    }
    
    .container-main .block > p {
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 22px;
        text-align: center;
        margin-bottom: 50px;
        color: #9FA3A7;
    }
    
    .container-main .block > button {
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        font-style: normal;
        line-height: 14px;
        letter-spacing: 2.4px;
        text-transform: uppercase;
        border: 3px solid #FFC80A;
        border-radius: 25px;
        padding: 15px 25px;
        background-color: #ffffff;
        cursor: pointer;
    }
    
    .container-main .card:hover {
        background-color: rgb(112, 59, 180);
    }
    
    .container-main .card .block:hover h2 {
        color: #fff;
    }
    .container-main .block:hover button {
        background-color: rgb(112, 59, 180);
    }
    
    .container-main .block > button:hover {
        color: #fff;
    }
    
    .card > .item:hover {
        color: #FFC80A;
    }`
);

console.log(doc);