function c(){
    var inp = document.getElementById('in');
    if(inp.value == null || inp.value == "")
        alert("你還沒輸入");
    else
        alert(document.getElementById('in').value);
}