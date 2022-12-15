package main

import (
	"io/ioutil"
	"net/http"
	"net/url"
	"os"
	"strconv"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

var (
	//map of file names and their hash
	hashes map[string]string = map[string]string{"lerihcoizhuogeippajidei": "lkdncounter.txt", "ppaubdcizbdevixybgz": "redditcounter.txt", "ceoyabcuzydevbaixdyeuihrbx": "discordcounter.txt", "apzkeiobhixcbziugbdvuf": "twittercounter.txt", "randvisitorsiuezbci": "randvisitors.txt"}
	lkdn   int
	redd   int
	disc   int
	twit   int
	randv  int
)

// function for text file that increments the counter
func counters(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	switch r.URL.Path {
	case "/lerihcoizhuogeippajidei":
		lkdn++
		randv++
	case "/ppaubdcizbdevixybgz":
		redd++
		randv++
	case "/ceoyabcuzydevbaixdyeuihrbx":
		disc++
		randv++
	case "/apzkeiobhixcbziugbdvuf":
		twit++
		randv++
	case "/randvisitorsiuezbci":
		randv++
	}
}

func saveVarsToFiles() {
	// open or create the file matching the hash
	for k, v := range hashes {
		file, err := os.OpenFile(v, os.O_RDWR|os.O_CREATE, 0755)
		if err != nil {
			panic(err)
		}
		defer file.Close()
		switch k {
		case "lerihcoizhuogeippajidei":
			//erase file content and replace with new value
			file.Truncate(0)
			file.Seek(0, 0)
			file.WriteString(strconv.Itoa(lkdn))
		case "ppaubdcizbdevixybgz":
			file.Truncate(0)
			file.Seek(0, 0)
			file.WriteString(strconv.Itoa(redd))
		case "ceoyabcuzydevbaixdyeuihrbx":
			file.Truncate(0)
			file.Seek(0, 0)
			file.WriteString(strconv.Itoa(disc))
		case "apzkeiobhixcbziugbdvuf":
			file.Truncate(0)
			file.Seek(0, 0)
			file.WriteString(strconv.Itoa(twit))
		case "randvisitorsiuezbci":
			file.Truncate(0)
			file.Seek(0, 0)
			file.WriteString(strconv.Itoa(randv))
		}
	}
}

func setVarsFromFiles() {
	// open or create the file matching the hash
	for k, v := range hashes {
		file, err := os.OpenFile(v, os.O_RDWR|os.O_CREATE, 0755)
		if err != nil {
			panic(err)
		}
		defer file.Close()
		body, _ := ioutil.ReadAll(file)
		switch k {
		case "lerihcoizhuogeippajidei":
			lkdn, _ = strconv.Atoi(string(body))
		case "ppaubdcizbdevixybgz":
			redd, _ = strconv.Atoi(string(body))
		case "ceoyabcuzydevbaixdyeuihrbx":
			disc, _ = strconv.Atoi(string(body))
		case "apzkeiobhixcbziugbdvuf":
			twit, _ = strconv.Atoi(string(body))
		case "randvisitorsiuezbci":
			randv, _ = strconv.Atoi(string(body))
		}
	}
}

func getStatus(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	//return all the counters
	w.Write([]byte("LinkedIn: " + strconv.Itoa(lkdn) + " Reddit: " + strconv.Itoa(redd) + " Discord: " + strconv.Itoa(disc) + " Twitter: " + strconv.Itoa(twit) + " TOTAL: " + strconv.Itoa(randv)))
}

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
	//check url size if > 150
	if len(r.URL.Path) > 150 {
		http.Error(w, "URL too long", http.StatusBadRequest)
		return
	}
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
	//call saveVarsToFiles every 1hour
	go func() {
		setVarsFromFiles()
		for {
			saveVarsToFiles()
			time.Sleep(1 * time.Hour)
		}
	}()
	mux := http.NewServeMux()
	mux.HandleFunc("/api", Handler)
	mux.HandleFunc("/tz/", Handlertz)
	mux.HandleFunc("/lerihcoizhuogeippajidei", counters)
	mux.HandleFunc("/ppaubdcizbdevixybgz", counters)
	mux.HandleFunc("/ceoyabcuzydevbaixdyeuihrbx", counters)
	mux.HandleFunc("/apzkeiobhixcbziugbdvuf", counters)
	mux.HandleFunc("/randvisitorsiuezbci", counters)
	mux.HandleFunc("/stats", getStatus)

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
