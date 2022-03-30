var book = {
    topic: "JavaScript",
    fat: true
}
//as propriedades de um objeto podem ser acessadas com . ou []
book.topic;
book['fat'];




function superior() {
    var varsuperior = 'superior';
    console.log(varsuperior);
    console.log(varintermediaria);
    console.log(varinferior);
    
    function intermediaria() {
        var varintermediaria = 'intermediaria';
        console.log(varsuperior);
        console.log(varintermediaria);
        console.log(varinferior);
        
        function inferior() {
            var varinferior = 'inferior';
            console.log(varsuperior);
        console.log(varintermediaria);
        console.log(varinferior);
            
        
        }
    
    }

}
