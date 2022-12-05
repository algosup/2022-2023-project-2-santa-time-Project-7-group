package main

import (
	"embed"
	"net/http"
	"text/template"
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
		http.Redirect(w, r, "https://catchyoursanta.ml"+r.RequestURI, http.StatusMovedPermanently)
	})

	templates = template.New("html templates")
	r, _ := content.ReadFile("static/index.html")
	templates.New("index").Parse(string(r))
	// http.ListenAndServe(":8080", mux)

	go http.ListenAndServe(":http", redirect)

	http.ListenAndServeTLS(":https", "keys/fullchain.pem", "keys/privkey.pem", mux)
}
