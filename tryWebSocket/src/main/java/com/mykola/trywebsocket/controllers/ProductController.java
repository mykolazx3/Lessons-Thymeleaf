package com.mykola.trywebsocket.controllers;


import com.mykola.trywebsocket.models.Product;
import com.mykola.trywebsocket.service.BucketSerivce;
import com.mykola.trywebsocket.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/products")
public class ProductController {

	private final ProductService productService;
	private final BucketSerivce bucketSerivce;
	private final SimpMessagingTemplate template;


	@Autowired
	public ProductController(SimpMessagingTemplate template, ProductService productService, BucketSerivce bucketSerivce) {
		this.productService = productService;
		this.bucketSerivce = bucketSerivce;
		this.template = template;
	}

	@GetMapping()
	public String list(Model model) {
		model.addAttribute("products", productService.getAllProducts());
		model.addAttribute("productsFromBucket", productService.getAllProductFromBucketById(1l));
		return "products";
	}








	@MessageMapping("/webSocketProducts")
	public void getMessages(Product product) {
		System.out.println("webSocketProducts");
		System.out.println(product);
		productService.addProductToProductList(product);

	}


	///////////////////////////////////////////////////////////////////////////
	@MessageMapping("/webSocketProducts2")
	public void getMessages2(Product product) {
		System.out.println("webSocketProducts2");
		System.out.println(product);
		productService.addProductToProductList2(product);
	}
	//////////////////////////////////////////////////////////////////////////






//	@GetMapping("/{id}/bucket")
//	public String addProductToBucket(@PathVariable Long id) {
//		productService.addProductToBucket(productService.getOneProduct(id));
//		return "redirect:/products";
//	}
	@MessageMapping("/webSocketProducts3")
	public void getMessages3(Product product) {
		System.out.println("webSocketProducts3");
		System.out.println(product);
		Product productFromService = productService.getOneProduct(product.getId());
		System.out.println(productFromService);

		productService.addProductToBucket(productFromService);
	}


}
