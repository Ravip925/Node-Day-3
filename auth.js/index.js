//default export

// const defaultExp =(req,res)=>{
//     res.send("default")
// }

// module.exports = defaultExp;


//named export

const NamedExp =(req,res)=>{
    res.send("Named export")
}

module.exports = {NamedExp};
