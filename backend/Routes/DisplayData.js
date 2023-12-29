const express =require('express')
const router=express.Router()

router.post('/bookdata',(req,res)=>
{
    try {
        console.log('Books:', global.books);
        console.log('Bookcat:', global.bookcat);
        console.log('Users:', global.user)

        res.send([global.books,global.bookcat,global.user]);
        
    } catch (error) {
        console.error(error.message);
        res.send("Sever Error")
    }
})
module.exports=router;