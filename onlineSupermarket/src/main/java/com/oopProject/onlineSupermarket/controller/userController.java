package com.oopProject.onlineSupermarket.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class userController {
    @RequestMapping("login")
    public void login(){
        System.out.println("Login Successful!");
    }
}
