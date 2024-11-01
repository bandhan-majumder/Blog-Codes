const express = require('express');

const app1 = express();
const app2 = express();

const PORT1 = "3000"
const PORT2 = "3002"


// route handlers
app1.get("/",(req,res)=>{
    res.json({
        "msg": `greetings from port ${PORT1}`
    })
})

app2.get("/",(req,res)=>{
    res.json({
        "msg": `greetings from port ${PORT2}`
    })
})

// listen
app1.listen(`${PORT1}`, () => {
  console.log(`Started server on ${PORT1}`);
});

app2.listen(`${PORT2}`, () => {
  console.log(`Started server on ${PORT2}`);   
});