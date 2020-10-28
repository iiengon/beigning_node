const express = require('express');
const students = require ('./data/students.json');
const PORT = 9001;
const app = express();
const buildUrl = (version,path) => `/api/${version}/${path}`
const STUDENT_BASE_URL = buildUrl('v1','students')
// app.use(function (req, res, next) {
//     console.log('Time:', Date.now())
//     next()
//   })
app.get(STUDENT_BASE_URL, (req,res) =>{
    res.json(students)
});

app.post(STUDENT_BASE_URL, (req,res) =>{ 
     console.log('handing POST request...');
     res.end();
});
app.put(STUDENT_BASE_URL, (req,res) =>{ 
    console.log('handing PUT request...')
});
app.delete(STUDENT_BASE_URL, (req,res) =>{ 
    console.log('handing DELETE request...')
});
app.listen(9001 ,() => {
    console.log(`server start on port ${PORT}`);
})
