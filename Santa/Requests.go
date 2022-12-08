package main

import (
	"crypto/tls"
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
	domains   = []string{"giftcountdown.algosup.com", "catchyoursanta.ml"}
)

func handler(w http.ResponseWriter, r *http.Request) {
	// if r.Host != domains[0] {
	// 	//redirect to giftcountdown.algosup.com
	// 	http.Redirect(w, r, domains[0]+r.RequestURI, http.StatusMovedPermanently)
	// 	return
	// }
	if r.URL.Path != "/" {
		//redirect to home
		http.Redirect(w, r, "/", http.StatusMovedPermanently)
		return
	}
	println(r.URL.Path)
	templates.ExecuteTemplate(w, "index", nil)
}

func otherhandler(w http.ResponseWriter, r *http.Request) {
	if r.Host != domains[0] {
		//redirect to giftcountdown.algosup.com
		http.Redirect(w, r, "https://giftcountdown.algosup.com"+r.RequestURI, http.StatusMovedPermanently)
		return
	}
	templates.ExecuteTemplate(w, r.URL.Path[1:], nil)
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
	mux.HandleFunc("/about", otherhandler)
	mux.HandleFunc("/css/", func(w http.ResponseWriter, r *http.Request) {
		filesHandler(w, r, "css")
	})
	mux.HandleFunc("/js/", func(w http.ResponseWriter, r *http.Request) {
		filesHandler(w, r, "js")
	})
	mux.HandleFunc("/img/", func(w http.ResponseWriter, r *http.Request) {
		filesHandler(w, r, "img")
	})

	templates = template.New("html templates")
	r, _ := content.ReadFile("static/index.html")
	templates.New("index").Parse(string(r))
	r, _ = content.ReadFile("static/about.html")
	templates.New("about").Parse(string(r))
	// http.ListenAndServe(":8080", mux)

	redirect := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		http.Redirect(w, r, "https://giftcountdown.algosup.com"+r.RequestURI, http.StatusMovedPermanently)
	})

	go http.ListenAndServe(":http", redirect)

	tlsConfig := &tls.Config{}

	for _, v := range domains {
		cert, err := tls.LoadX509KeyPair(v+"/fullchain.pem", v+"/privkey.pem")
		if err != nil {
			println(err.Error())
		}
		tlsConfig.Certificates = append(tlsConfig.Certificates, cert)
	}

	//serv redirect to giftcountdown.algosup.com if other domain
	srv := &http.Server{
		Addr:      ":https",
		TLSConfig: tlsConfig,
		// Good practice to set timeouts to avoid Slowloris attacks.
		WriteTimeout: 5 * time.Second,
		ReadTimeout:  5 * time.Second,
		IdleTimeout:  60 * time.Second,
		Handler:      mux, // Pass our instance of gorilla/mux in.
	}

	log.Fatal(srv.ListenAndServeTLS("", ""))
}
