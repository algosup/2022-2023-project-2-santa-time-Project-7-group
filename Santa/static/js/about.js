const controller=new AbortController,timeoutId=setTimeout(()=>controller.abort(),1e3);function urlExists(link){fetch(link,{method:"HEAD",mode:"no-cors",signal:controller.signal}).then((function(response){inc++,document.getElementById("frame_ref"+inc).href=link,document.getElementById("frame"+inc).src=link})).catch((function(error){inc++,document.getElementById("frame_ref"+inc).style.display="none"}))}inc=0,urlExists("https://xmas.algosup.com/"),urlExists("https://santaclock.algosup.com/"),urlExists("https://santa.algosup.com/");