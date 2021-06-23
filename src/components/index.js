import React from 'react';
import { useState } from 'react';
import quotes from './../services/quotes.json';

const Index = () => {


const [author, setAuthor] = useState("Author");
const [text, setText] = useState("Text");


const AuthorRandom = ()=>{

let dataAll =  quotes.quotes;
let random = Math.floor(Math.random() * dataAll.length);
let randomAuthor = dataAll[random]

setAuthor(randomAuthor.author);
setText(randomAuthor.quote)

}

const changeRandom = ()=>{
    AuthorRandom();
}




    return (
        
        <section className="container">

            <div className="card animate__animated animate__rollIn">

               <h6>{author}</h6>
                <div className="card-body">
                    <h5>{text}</h5>

                </div>

                <button onClick = {()=> changeRandom()}>Next</button>

            </div>

        </section>
    )
}

export default Index;
