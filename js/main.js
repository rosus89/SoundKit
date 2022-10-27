
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
                item.addEventListener("click", drum.play);
                drumkit.appendChild(item);
                
            }
        }
    },
    event:{
        global: () => document.body.addEventListener("keypress",(e)=>{
            console.log(e)
        })
    },
    create: {
        divClassId: (className, id) => Object.assign(document.createElement('div'),{className:className, id:id},)
            
    }
}
//*************/
// Controller */
//*************/

let controller = {
    init: () => {
        controller.create.drums();
        view.init();

    },
    create: {
        drums: () => {
            model.drums = samples.map((sample)=>({
                id : sample.name,
                key : sample.key,
                play : () => 
                    {   
                        sample = new Audio(sample.src);
                        sample.play()
                    }
            }))
            }
        }
}




controller.init();

console.log(model.drums)
// })();