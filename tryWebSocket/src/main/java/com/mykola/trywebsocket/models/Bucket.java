package com.mykola.trywebsocket.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "buckets")
public class Bucket {
	private static final String SEQ_NAME = "bucket_seq";

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@ManyToMany
	@JoinTable(name = "buckets_products",
			joinColumns = @JoinColumn(name = "bucket_id"),
			inverseJoinColumns = @JoinColumn(name = "product_id"))
	private List<Product> products;

	public Bucket() {
	}

	public Bucket(List<Product> products) {

		this.products = products;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}
}
