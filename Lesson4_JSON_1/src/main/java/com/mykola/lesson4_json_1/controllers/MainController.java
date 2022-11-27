package com.mykola.lesson4_json_1.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
	@GetMapping("/json1")
	public String json1(){
		return "json1";
	}

	@GetMapping("/fetch1")
	public String fetch1(){
		return "fetch1";
	}
}
