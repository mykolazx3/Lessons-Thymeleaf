package com.mykola.trywebsocket.service;

import com.mykola.trywebsocket.models.Bucket;
import com.mykola.trywebsocket.models.Product;
import com.mykola.trywebsocket.repository.BucketRepository;
import com.mykola.trywebsocket.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

	private final ProductRepository productRepository;
	private final BucketRepository bucketRepository;
	private final BucketSerivce bucketSerivce;
	private final SimpMessagingTemplate template;

	@Autowired
	public ProductService(SimpMessagingTemplate template, ProductRepository productRepository, BucketRepository bucketRepository, BucketSerivce bucketSerivce) {
		this.productRepository = productRepository;
		this.bucketRepository = bucketRepository;
		this.bucketSerivce = bucketSerivce;
		this.template = template;
	}

	@Transactional
	public List<Product> getAllProducts(){
		return productRepository.findAll();
	}

	public Product getOneProduct(Long id){
		Optional<Product> productOpt = productRepository.findById(id);
		return productOpt.get();
	}

	@Transactional
	public void addProductToBucket(Product product){

		Optional<Bucket> bucketOpt = bucketRepository.findById(1l);
		Bucket bucket = bucketOpt.get();

		bucket.getProducts().add(product);
		bucketRepository.save(bucket);

		product.setSizeOfProductInBucket(getAllProductFromBucketById(1l).size());


		template.convertAndSend("/topic/activity3", product);//@SendTo

	}

	@Transactional
	public List<Product> getAllProductFromBucketById(Long id){
		Bucket bucket = bucketSerivce.getOne(id);
		return bucket.getProducts();
	}

	@Transactional
	public void addProductToProductList(Product product){
		productRepository.save(product);
		product.setSizeOfProductQuantity(getAllProducts().size());
		template.convertAndSend("/topic/activity", product);//@SendTo
	}
/////////////////////////////////////////////////////////////////////////////////
	@Transactional
	public void addProductToProductList2(Product product){
		productRepository.save(product);
		template.convertAndSend("/topic/activity2", product);//@SendTo
	}
/////////////////////////////////////////////////////////////////////////////////


}
