/**
 * NetUitl 网络请求的实现
 * @author lidong
 * @date 2016-03-17
 * https://github.com/facebook/react-native
 */
'use strict';
import React, { Component } from 'react';
import {Platform } from 'react-native';
// const BASE_URL="https://gf.glodon.com/api/";
const BASE_URL="http://192.168.127.175:60/";
 const BASE_URL = 'https://49692w8794.imdo.co/advertising/web/api';
class NetUitl extends Component {

  /**
  *url :请求地址
  *data:参数(Json对象)
  *callback:回调函数
  */
static postJson (url, data, callback) {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    // alert(JSON.stringify(data));
    xhr.addEventListener("readystatechange", function () {
      // alert(JSON.stringify(this));
       if (this.readyState === 4) {
        callback(this);
      }
    });
    xhr.open("POST", BASE_URL+url);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.send(data);
  }
   /**
  *url :请求地址
  *data:参数(Json对象)
  *callback:回调函数
  */
static postJsonBySignUpKey (url, data,signupKey ,callback) {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    // alert(JSON.stringify(data));
    xhr.addEventListener("readystatechange", function () {
      // console.log("request result="+this);
      // alert(JSON.stringify(this));
       if (this.readyState === 4) {
        callback(this);
      }
    });
    xhr.open("POST", BASE_URL+url);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Signup-Key",signupKey);
    xhr.send(data);
  }
  static postList (url, data, callback) {
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      xhr.addEventListener("readystatechange", function () {
         if (this.readyState === 4) {
          callback(this);
        }
      });
      xhr.open("POST", BASE_URL+url);
      xhr.setRequestHeader("content-type", "application/json");
      xhr.setRequestHeader("cache-control", "no-cache");
      xhr.send(data);
    }
  //get请求
  /**
  *url :请求地址
  *callback:回调函数
  */
  static get(url, callback) {
            console.log("url",BASE_URL+url);
            fetch(BASE_URL+url , {
             method: 'GET',
             headers: {  'Accept': 'application/json',
             //表单
             'X-SPONGE-TENANT': 1000,
            'Content-Type': 'application/x-www-form-urlencoded'},
            }).then((response) => {
                console.log("request result=",JSON.stringify(response));
             callback(response);
            }).catch((error) => {
              console.log("下载失败",error);
               callback(error);
            });
    }
     //get请求
    /**
    *url :请求地址
    *callback:回调函数
    */
    static getByHeader(url, headers,callback) {
        if(headers){
            headers['Accept']= 'application/json, text/plain, */*';
            headers['Content-Type']= 'application/json;charset=UTF-8';
            console.log("hdd",headers);
        }else{
            headers= {'Accept': 'application/json, text/plain, */*',
                      'Content-Type': 'application/json;charset=UTF-8'};
        }
        fetch(BASE_URL+url , {
         method: 'GET',
         headers:headers,
         credentials: "include"
        }).then((response) => {
            console.log("request result=",JSON.stringify(response));
         callback(response);
        }).catch((error) => {
          console.log("下载失败",error);
           callback(error);
        });

}
   //post请求
    /**
    *url :请求地址
    *callback:回调函数
    */
   static postByHeader(url,postData, headers,callback) {
    if(headers){
        headers['Accept']= 'application/json';
        headers['Content-Type']= 'application/json;charset=UTF-8';
        console.log("hdd",headers);
    }else{
        headers= {'Accept': 'application/json',
                  'Content-Type': 'application/json;charset=UTF-8'};
    }
    fetch(BASE_URL+url , {
     method: 'POST',
     headers:headers,
     credentials: "include",
     body: JSON.stringify(postData)
    }).then((response) => {
        console.log("request result=",JSON.stringify(response));
     callback(response);
    }).catch((error) => {
      console.log("下载失败",error);
       callback(error);
    });

}
    //put请求
    /**
    *url :请求地址
    *callback:回调函数
    */
    static put(url, callback) {
              console.log("url",BASE_URL+url);
              fetch(BASE_URL+url , {
               method: 'PUT',
               headers: {},
              }).then((response) => {
               console.log("下载完成",response);
               callback(response);
              }).catch((error) => {
                console.log("下载失败",error);
                 callback(error);
              });
      }
}

module.exports = NetUitl;
