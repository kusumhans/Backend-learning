import express from 'express'

// port=3000
const app = express()

// to start listening 
app.listen(8080, () => {
    console.log('app is listening on port 8080')
  })


// to start send request 
// app.use((res, req) => {
    // console.log(req);
    // console.log("request send")
    // req.send("hello i am kusum") send basic request 
    // req.send({
    //     name : "Apple",
    //     color : "red"
    // }); send obj req
  
    // const html = "<h1>Apple<ul><li>red</li> <li>green</li> <li>yellow</li></ul></h1>"
    // req.send(html);
// })

// Now we study about nodemone and routing 
// app.get("/about", (req, res) => {
//      let html = "<h1>hello all i am learning nodemon package</h1>"
//      res.send(`yes this is interesteing topic ${html}`);
// })

// now we study about path params
// app.get("/:username/:id/:color", (req, res) => {
//      console.log(req.params)
//      res.send("hello")
// })

// now we study about query param
app.get("/search", (req, res) => {
  console.log(req.query)
  let { q } = (req.query)
  res.send(`<h1>search for query ${q} </h1>`)
})  