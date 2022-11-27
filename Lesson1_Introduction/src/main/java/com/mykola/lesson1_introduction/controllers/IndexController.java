package com.mykola.lesson1_introduction.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class IndexController {
    static final String INDEX_PAGE = "index";

    @GetMapping
    public String getIndex(){
        return INDEX_PAGE;
    }
}
