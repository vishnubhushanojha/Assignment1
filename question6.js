function callHim(id, callHer)
{
    callHer();  
}

function calling() {
    document.write('calling her.....');
}

callHim(1, calling);
