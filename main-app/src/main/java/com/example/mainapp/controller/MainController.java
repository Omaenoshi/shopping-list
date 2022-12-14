package com.example.mainapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    @GetMapping("/")
    private String getHome(){
        return "html/index.html";
    }

    @GetMapping("/create")
    private String getCreate() {
        return "html/create.html";
    }

}
