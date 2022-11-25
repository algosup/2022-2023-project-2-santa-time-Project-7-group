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

	http.ListenAndServeTLS(":443", "/etc/letsencrypt/live/catchyoursanta.ml/fullchain.pem", "/etc/letsencrypt/live/catchyoursanta.ml/privkey.pem", mux)
}
