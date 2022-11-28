package main

import (
	"embed"
	"io/fs"
	"net/http"
)

//go:embed static
var content embed.FS

func handler() http.Handler {

	fsys := fs.FS(content)
	html, _ := fs.Sub(fsys, "static")

	return http.FileServer(http.FS(html))
}

func main() {
	mux := http.NewServeMux()
	mux.Handle("/", handler())
	redirect := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		http.Redirect(w, r, "https://catchyoursanta.ml"+r.RequestURI, http.StatusMovedPermanently)
	})

	go http.ListenAndServe(":http", redirect)

	http.ListenAndServeTLS(":https", "keys/fullchain.pem", "keys/privkey.pem", mux)
}
