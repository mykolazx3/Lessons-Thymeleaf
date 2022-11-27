package com.mykola.trywebsocket.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "products")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	@Column(name = "title")
	private String title;

	@JsonIgnore
	@ManyToMany
	@JoinTable(name = "buckets_products",
			joinColumns = @JoinColumn(name = "product_id"),
			inverseJoinColumns = @JoinColumn(name = "bucket_id"))
	private List<Bucket> buckets;

	@Transient
	private int sizeOfProductQuantity;

	@Transient
	private int sizeOfProductInBucket;

	public Product() {
	}

	public Product(String title) {
		this.title = title;
	}

	public Product(Long id, String title, List<Bucket> buckets, int sizeOfProductQuantity, int sizeOfProductInBucket) {
		this.id = id;
		this.title = title;
		this.buckets = buckets;
		this.sizeOfProductQuantity = sizeOfProductQuantity;
		this.sizeOfProductInBucket = sizeOfProductInBucket;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public List<Bucket> getBuckets() {
		return buckets;
	}

	public void setBuckets(List<Bucket> buckets) {
		this.buckets = buckets;
	}

	public int getSizeOfProductQuantity() {
		return sizeOfProductQuantity;
	}

	public void setSizeOfProductQuantity(int size) {
		this.sizeOfProductQuantity = size;
	}

	public int getSizeOfProductInBucket() {
		return sizeOfProductInBucket;
	}

	public void setSizeOfProductInBucket(int sizeOfProductInBucket) {
		this.sizeOfProductInBucket = sizeOfProductInBucket;
	}

	@Override
	public String toString() {
		return "Product{" +
				"id=" + id +
				", title='" + title + '\'' +
				", sizeOfProductQuantity=" + sizeOfProductQuantity +
				", sizeOfProductInBucket=" + sizeOfProductInBucket +
				'}';
	}
}
