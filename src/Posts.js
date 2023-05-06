import React, { useEffect, useState } from 'react'
import OAuth from 'oauth-1.0a';
import CryptoJS from 'crypto-js';

let url = `http://ravi-wordpress.local/wp-json/wc/v2/products`;
const consumerKey = "ck_a3c08f285dcb7580c01078326fac5f38feff6464";
const consumerSecret = "cs_f19cbab6d8aa320b196e5474e2b8a855f0e61a28";
const api = "wc/v3";

const oauth = OAuth({
  consumer: {
    key: consumerKey,
    secret: consumerSecret,
  },
  signature_method: "HMAC-SHA1",
  hash_function(base_string, key) {
    return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
  },
});

const headers = oauth.toHeader(oauth.authorize({ url, method: "GET" }));

const options = {
  headers: {
    Authorization: headers["Authorization"],
    "Content-Type": "application/json",
  },
};

const Posts = () => {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        fetchProducts();
    },[])
    const fetchProducts= async()=>{
            const response=await fetch(url,options);
            const data=await response.json();
            console.log(data)
            setPosts(data);
    }
    console.log("bolo");
    
  return (
    <div>
        <h1>hi ravi</h1>
      <ul>
        {posts.map((each)=><li>
            <div>{each.name}</div>
            <div>{each.price}</div>
            <img src={each.images[0].src} alt=""/>
        </li>)}
      </ul>
    </div>
  )
}

export default Posts
