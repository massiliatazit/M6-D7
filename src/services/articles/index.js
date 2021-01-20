const express = require("express")
const Model = require("../../utils/model")
const Articles = new Model("articles")
const articleroute = express.Router()
articleroute.get("/",async(req,res)=>{
    try {
        const response = await Articles.findOne(req.body);
        res.send(response)
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
        
    }
})
articleroute.get("/:id",async(req,res)=>{
    try {
        const response = await Articles.findById(req.params.id);
        res.send(response)
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
        
    }
})
articleroute.put("/:id", async (req, res) => {
    try {
      const updatedArticle = await Articles.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.send(updatedArticle);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });
  
  articleroute.post("/", async (req, res) => {
    try {
        console.log("here")
      const newArticle = await Articles.save(req.body);
      res.send(newArticle);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });
module.exports=articleroute