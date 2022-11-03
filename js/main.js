
// (() => {
// Drum Samples

let samples  = [
    { name: "boom", src: "./sounds/boom.wav", key: "q" },
    { name: "clap", src: "./sounds/clap.wav", key: "w" },
    { name: "hihat", src: "./sounds/hihat.wav", key: "e" },
    { name: "kick", src: "./sounds/kick.wav", key: "r" },
    { name: "openhat", src: "./sounds/openhat.wav", key: "t" },
    { name: "ride", src: "./sounds/ride.wav", key: "a" },
    { name: "snare", src: "./sounds/snare.wav", key: "s" },
    { name: "tink", src: "./sounds/tink.wav", key: "d" },
    { name: "tom", src: "./sounds/tom.wav", key: "f" }
]

//***********/
//** Model **/
//***********/


let model = {
    drums: null
}

//*************/
//*** View ****/
//*************/


let view = {
    init: () => {
         view.render.drums();
         view.event.global();

    },
    render: {
        drums: () => {
            for (let drum of model.drums) {
                let item = view.create.divClassId("drum",drum.id);
                item.innerText = drum.key;
                item.addEventListener("click", drum.play);
                item.addEventListener(drum.key, drum.play);
                drumkit.appendChild(item);
                item.appendChild(view.create.pClass("instrument", drum.id))

                
            }
        }
    },

    event:{
        global: () => document.body.addEventListener("keypress",(e)=>{
            let event = new CustomEvent(e.key,{
                bubbles: true
            })
            let buttons = document.querySelectorAll(".drum");
            for (let button of buttons){
                button.dispatchEvent(event)
            }
        })
    },
    create: {
        divClassId: (className, id) => Object.assign(document.createElement('div'),{className:className, id:id}),
        pClass: (className,text) => Object.assign(document.createElement('p'), {className:className, innerText:text})
            
    }
}
//*************/
// Controller */
//*************/

let controller = {
    init: () => {
        controller.create.drums(samples);
        view.init();

    },
    create: {
        drums: (input) => {
            model.drums = input.map((sample)=>({
                id : sample.name,
                key : sample.key,
                play : () => 
                    {   
                        sample = new Audio(sample.src);
                        sample.play()
                    }

            }))
            }
    },
    delete:{
        drums: () =>{
            model.drums = null
        }
    }
}




controller.init();

// })();