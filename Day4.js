function decode(message) {
    let open, close;
    let count = 0;
    for(let i = 0; i < message.length; i++) {
        if(message[i] === '(') {
            count++;
        }
    }
    for(let i = 0; i < count; i++) {
        open = message.lastIndexOf("(");
        close = message.indexOf(")", open);
        
        const firstMes = message.substring(open, close + 1);
        
        const revMes = firstMes.split("").slice(1,-1).reverse().join("");
        
        message = message.replace(firstMes, revMes);
    }
    return message;
}