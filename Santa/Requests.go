package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", index)
	http.ListenAndServe(":8080", nil)
	fmt.Println("Server is running on port 8080")
}

func index(w http.ResponseWriter, r *http.Request) {
	tpl, err := template.ParseFiles("/templates/index.html")
	if err != nil {
		log.Fatalln(err)
	}
	tpl.Execute(w, nil)
}
