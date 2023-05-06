import OAuth from "oauth-1.0a";
import CryptoJS from "crypto-js";

const url = "http://ravi-wordpress.local/wp-json/wc/v3";
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

export { url, api, headers, options };