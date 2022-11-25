package main

import (
	"embed"
	"io/fs"
	"net/http"

	"golang.org/x/crypto/acme/autocert"
)

//go:embed static
var content embed.FS

func handler() http.Handler {

	fsys := fs.FS(content)
	html, _ := fs.Sub(fsys, "static")

	return http.FileServer(http.FS(html))
}

func main() {
	http.Handle("/", handler())
	m := &autocert.Manager{
		Cache:      autocert.DirCache("secret-dir"),
		Prompt:     autocert.AcceptTOS,
		Email:      "louis.delavenne@algosup.com",
		HostPolicy: autocert.HostWhitelist("catchyoursanta.ml"),
	}
	s := &http.Server{
		Addr:      ":https",
		TLSConfig: m.TLSConfig(),
	}
	s.ListenAndServeTLS("", "")
}
