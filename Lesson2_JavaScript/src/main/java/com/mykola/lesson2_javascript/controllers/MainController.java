package com.mykola.lesson2_javascript.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping
    public String IndexPage(){
        return "index";
    }

    @GetMapping("/first")
    public String firstPage(){
        return "first";
    }
    @GetMapping("/functions")
    public String functionsPage(){
        return "functions";
    }
    @GetMapping("/arrays")
    public String arraysPage(){
        return "arrays";
    }
    @GetMapping("/objects")
    public String objectsPage(){
        return "objects";
    }
    @GetMapping("/DOM")
    public String DOMPage(){
        return "DOM";
    }
    @GetMapping("/DOM2")
    public String DOM2Page(){
        return "DOM2";
    }
    @GetMapping("/DOM3")
    public String DOM3Page(){
        return "DOM3";
    }
    @GetMapping("/DOM4")
    public String DOM4Page(){
        return "DOM4";
    }
    @GetMapping("/DOM5")
    public String DOM5Page(){
        return "DOM5";
    }
    @GetMapping("/todo")
    public String todoPage(){
        return "todo";
    }
}
