function showPage(id) {
    var totalNumOfPages = 2;
    for (i = 1; i <= totalNumOfPages; i++) {
        if(document.getElementById('page'+i)) {
            document.getElementById('page'+i).style.display='none';
            document.getElementById(i).style.background='#e9e9e9';
            document.getElementById(i).style.color='#000';
        }
        if(document.getElementById('page'+id)) {
            document.getElementById('page'+id).style.display='block';
            document.getElementById(id).style.background='#4c6acd';
            document.getElementById(id).style.color='#fff';
        }

    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}