function validateURL(link)
{
    if (link.indexOf("http://") == 0 || link.indexOf("https://") == 0) {
        console.log("The link has http or https.");
    }
    else{
        console.log("The link doesn't have http or https.");
    }
}

validateURL("https://xmas.algosup.com/");
validateURL("https://santaclock.algosup.com/")
validateURL("https://santa.algosup.com/")