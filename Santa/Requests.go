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

	http.ListenAndServe(":8080", mux)
}
