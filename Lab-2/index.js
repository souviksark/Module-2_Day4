const express = require('express')
const app = express()
const port = 3000


const sampleObject= {
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
}

//GET request we have create for API
//routing => to give rules and provide content
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (request,response) =>{
    response.send('<h2>welcome to twitter web page</h2>')
})
//ES6 => moreden javascript
//callback function: afunction which calls automatically it self

/* (() => {
    //you will write your logic
}) */




//we want to send some json objects
app.get('/youtube', (req, res) => {
    res.send({message: "youtube is blocked currently for your device"})
  })

app.get('/example', (req,res) => {
    res.status(215).send(sampleObject)
})

//pass one object of random user
//https://randomuser.me/api/?results=1
// send one status code as 216

app.get('/:name', (req,res) => {
    const outputName = req.params.name
    res.send({msg: `welcome ${outputName}`})
    console.log(outputName);
    //my logic
})

// challange lab:  need to create a 404 custom request


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })