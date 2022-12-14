function setShowResults(setTo){
    if(setTo){
        document.getElementById("autocomplete_list").className = "suggestions";
    }else{
        document.getElementById("autocomplete_list").className = "suggestions-out";
    }
}