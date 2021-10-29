import React from "react";
import ReactDom from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../like"

let container;

beforeEach(()=>{
    container = document.createElement("div");
    document.body.appendChild(container);
    act(()=>{
        ReactDom.render(<Like/>, container);
    })
});

afterEach(()=>{
    document.body.removeChild(container);
    container = null;
});

describe("Testing Like Component", ()=> {
    // 1. Que por defecto, el componente muestra en el párrafo el valor 'Likes: 0'.
    it("Cero likes por defecto", ()=>{
        const parrafo = container.querySelector("p");
        expect(parrafo.textContent).toBe("Likes: 0");
    })

    // 2. Que cuando se hace click en el botón Like, el número de likes se incremente en uno.
    it("Incremento en uno al hacer en el botón Like", ()=>{
        const parrafo = container.querySelector("p");
        const buttonLike = document.getElementById("increment");
        act(()=>{
            buttonLike.dispatchEvent(new MouseEvent("click", {bubbles: true}));
        });
        expect(parrafo.textContent).toBe("Likes: 1");
    })

    // 3. Que cuando se hace click en el botón Dislike el número de likes se decrementa en uno.
    it("Decremento en uno al hacer click en el botón Dislike", ()=>{
        const parrafo = container.querySelector("p");
        const buttonDislike = document.getElementById("decrement");
        act(()=>{
            buttonDislike.dispatchEvent(new MouseEvent("click", {bubbles: true}));
        });
        expect(parrafo.textContent).toBe("Likes: -1");
    })
})