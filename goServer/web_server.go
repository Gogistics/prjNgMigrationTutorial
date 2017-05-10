package main

import (
    "fmt"
    "log"
    "flag"
    "net/http"
)

// functions
func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
}


// server entry
func main() {
    port := flag.String("p", "8082", "port")
    dir := flag.String("d", ".", "dir")
    flag.Parse()
    http.Handle("/", http.FileServer(http.Dir(*dir)))
    
    // staticFS := http.FileServer(http.Dir("static"))
    // http.Handle("/static/", http.StripPrefix("/static/", staticFS))
    // ngFS := http.FileServer(http.Dir("ng"))
    // http.Handle("/ng/", http.StripPrefix("/ng/", ngFS))

    log.Printf("Serving %s Http port: %s\n", *dir, *port)
    log.Fatal(http.ListenAndServe(":" + *port, nil))
    // http.ListenAndServe(":8080", nil)
}