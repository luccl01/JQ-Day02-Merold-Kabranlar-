container = new Array(9)
for (i=1;i<11;i++){
    // zahl = Math.floor(Math.random()*10)
        do {
        console.log ("funktioniert")
        index = Math.floor(Math.random()*10)
    }
    while (typeof container[index] !== 'undefined')  // solange container[zahl] defined generiere eine neue random Zahl 
    console.log (container[index])
    container[index] = i 
}
console.table (container)

for (i=0; i<10; i++){
    console.log (container[i])
    $(`#gray`).append(`<div class = "grayElement" draggable="true" serri="${i}">${container[i]}</div>`)
}


function init() {
    $('#makeMeDraggable').draggable( {
      containment: '#content',
      cursor: 'move',
      snap: '#content'
    } );
  }