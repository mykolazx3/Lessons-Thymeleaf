package com.mykola.trywebsocket.service;

import com.mykola.trywebsocket.models.Bucket;
import com.mykola.trywebsocket.repository.BucketRepository;
import com.mykola.trywebsocket.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class BucketSerivce {

	ProductRepository productRepository;
	BucketRepository bucketRepository;


	@Autowired
	public BucketSerivce(ProductRepository productRepository, BucketRepository bucketRepository) {
		this.productRepository = productRepository;
		this.bucketRepository = bucketRepository;

	}
	@Transactional
	public Bucket getOne(Long id){
		Optional<Bucket> bucketOpt =  bucketRepository.findById(id);
		return bucketOpt.get();
	}
}
