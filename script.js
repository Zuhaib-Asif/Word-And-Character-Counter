let textbox = document.getElementById("textbox");
let words = document.getElementById("word");
let char = document.getElementById("char");

textbox.addEventListener('input',function(){
   let ch = this.value.length;
   let text = this.value;
    char.innerHTML = ch;
    text = text.trim();
    let wrd = text.split(" ");
    let cleanList = wrd.filter(function(elm){
        return elm != "";
    })
    words.innerHTML = cleanList.length
})