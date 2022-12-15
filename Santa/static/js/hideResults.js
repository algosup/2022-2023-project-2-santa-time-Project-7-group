function setShowResults(setTo){
    if(setTo){
        document.getElementById("autocomplete_list").className = "suggestions";
    }else{
        setTimeout(() => {
            document.getElementById("autocomplete_list").className = "suggestions-out";
        }, 300);
    }
}