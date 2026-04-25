import express from "express";
import URL from "../models/url.js";
import shortid from "shortid";

//this goes inside as callback fn of get so has access to req,res
async function genShortUrl(req,res){
        if(!req.body || !req.body.url)return res.status(400).json(`error : enter some url`);
          const url=req.body.url;
         
          const shortId=shortid();
          await URL.create({
            shortId:shortId,
            redirectUrl:url,
            visitHistory:[]
          })
          console.log(shortId);
          return res.json({id: shortId});
}

//redirect route
async function redirect(req,res){
   const shortId=req.params.shortId;
    const entry=await URL.findOneAndUpdate({
         shortId
    },{
        $push:{
          visitHistory :{
            timestamp: Date.now()
        }
        }
    })

    res.redirect(entry.redirectUrl)
}
//

async function getAanalytics(req,res){
  const shortId=req.params.shortId;
  const result=await URL.findOne({shortId});
  res.json({
    totalclicks: result.visitHistory.length,
    anslytics: result.visitHistory
  })
}

export {genShortUrl,getAanalytics,redirect};