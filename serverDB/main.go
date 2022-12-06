package main

import (
	"io/ioutil"
	"net/http"
	"net/url"
)

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func Handler(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	//add options
	req := http.Request{
		Method: "GET",
		URL:    &url.URL{Scheme: "http", Host: "0.0.0.0:2505", Path: r.URL.Path, RawQuery: r.URL.RawQuery},
		//json
		Header: http.Header{
			"Content-Type": []string{"application/json"},
		},
	}

	//send the request
	resp, err := http.DefaultClient.Do(&req)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	//read the body to []byte
	body, _ := ioutil.ReadAll(resp.Body)

	w.Write(body)
}

func Handlertz(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	//add options
	req := http.Request{
		Method: "GET",
		URL:    &url.URL{Scheme: "http", Host: "10.1.1.4:2004", Path: r.URL.Path, RawQuery: r.URL.RawQuery},
		//json
		Header: http.Header{
			"Content-Type": []string{"application/json"},
		},
	}

	//send the request
	resp, err := http.DefaultClient.Do(&req)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	//read the body to []byte
	body, _ := ioutil.ReadAll(resp.Body)

	w.Write(body)
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/api", Handler)
	mux.HandleFunc("/tz/", Handlertz)

	redirect := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		http.Redirect(w, r, "https://noel.gq"+r.RequestURI, http.StatusMovedPermanently)
	})

	// http.ListenAndServe(":8080", mux)

	go http.ListenAndServe(":http", redirect)

	err := http.ListenAndServeTLS(":https", "/etc/letsencrypt/live/noel.gq/fullchain.pem", "/etc/letsencrypt/live/noel.gq/privkey.pem", mux)
	if err != nil {
		panic(err)
	}
}
