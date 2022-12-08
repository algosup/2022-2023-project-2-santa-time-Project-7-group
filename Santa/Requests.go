package main

import (
	"embed"
	"log"
	"net/http"
	"text/template"
	"time"
)

var (
	//go:embed static
	content   embed.FS
	templates *template.Template
)

func handler(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		//redirect to home
		http.Redirect(w, r, "/", http.StatusMovedPermanently)
		return
	}
	println(r.URL.Path)
	templates.ExecuteTemplate(w, "index", nil)
}

func abouthandler(w http.ResponseWriter, r *http.Request) {
	templates.ExecuteTemplate(w, "aboutus", nil)
}

func filesHandler(w http.ResponseWriter, r *http.Request, ty string) {
	//get file from content
	html, _ := content.ReadFile("static" + r.URL.Path)
	//set content type
	w.Header().Set("Content-Type", "text/"+ty)
	//write html to response
	w.Write(html)
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/", handler)
	mux.HandleFunc("/about", abouthandler)
	mux.HandleFunc("/css/", func(w http.ResponseWriter, r *http.Request) {
		filesHandler(w, r, "css")
	})
	mux.HandleFunc("/js/", func(w http.ResponseWriter, r *http.Request) {
		filesHandler(w, r, "js")
	})
	mux.HandleFunc("/img/", func(w http.ResponseWriter, r *http.Request) {
		filesHandler(w, r, "img")
	})

	redirect := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		http.Redirect(w, r, "https://giftcountdown.algosup.com"+r.RequestURI, http.StatusMovedPermanently)
	})

	templates = template.New("html templates")
	r, _ := content.ReadFile("static/index.html")
	templates.New("index").Parse(string(r))
	r, _ = content.ReadFile("static/about.html")
	templates.New("aboutus").Parse(string(r))
	// http.ListenAndServe(":8080", mux)

	go http.ListenAndServe(":http", redirect)
	//serv redirect to giftcountdown.algosup.com if other domain
	srv := &http.Server{
		Addr: ":https",
		// Good practice to set timeouts to avoid Slowloris attacks.
		WriteTimeout: 5 * time.Second,
		ReadTimeout:  5 * time.Second,
		IdleTimeout:  60 * time.Second,
		Handler:      mux, // Pass our instance of gorilla/mux in.
	}

	log.Fatal(srv.ListenAndServeTLS("giftcountdown.algosup.com/fullchain.pem", "giftcountdown.algosup.com/privkey.pem"))
}
