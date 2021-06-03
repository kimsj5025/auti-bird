const cheerio = require('cheerio')
const express = require('express')
var app = express()
const axios = require("axios");

const getHtml = async () => {
  try {
    return await axios.get("https://steamcommunity.com/profiles/76561198964938469");
  } catch (error) {
    console.error(error);
  }
};

getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    var n = $('body > div.responsive_page_frame.with_header > div.responsive_page_content > div.responsive_page_template_content > div.no_header.profile_page.private_profile > div.profile_header_bg > div > div > div > div.profile_header_centered_persona > div > span.actual_persona_name').text()

  app.get('/', function(req,res) {
    res.send(`<h1>현재 버드 닉네임 : `+n+`</h1>


    




<a href = https://toss.me/kimsj5025>>>개발자 후원하기<<</a>    `)
})




  app.listen(80)
})