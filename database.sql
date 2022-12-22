CREATE TABLE Customers (
	customer_id INT AUTO_INCREMENT,
	customer_name VARCHAR(50) NOT NULL,
	phone INT(11),
	customer_type VARCHAR(20) NOT NULL DEFAULT 'Non-regular', 
	num_of_orders INT,
	PRIMARY KEY (customer_id, phone)
);

CREATE TABLE Items (
	item_id INT AUTO_INCREMENT,
	item_name VARCHAR(30) NOT NULL,
	description VARCHAR(200), 
	price INT NOT NULL,
	PRIMARY KEY (item_id, item_name)
);

CREATE TABLE Cart (
	customer_id INT NOT NULL,
	item_ids JSON,
	total_price INT NOT NULL,
	location VARCHAR(150) NOT NULL,
	order_type VARCHAR(10) NOT NULL,
	confirmation TINYINT NOT NULL DEFAULT 0,
	FOREIGN KEY (customer_id) REFERENCES Customers(customer_id),
	PRIMARY KEY (customer_id)
);

CREATE TABLE Delivery_man (
	dm_id INT AUTO_INCREMENT,
	dm_name VARCHAR(50) NOT NULL,
	status TINYINT DEFAULT 1,
	PRIMARY KEY (dm_id)
);


CREATE TABLE Orders (
	order_id INT NOT NULL AUTO_INCREMENT,
	customer_id INT,
	item_ids JSON,
	total_price INT NOT NULL,
	location VARCHAR(150) NOT NULL,
	order_type VARCHAR(10) NOT NULL,
	delivery_man INT,
	PRIMARY KEY (order_id),
	FOREIGN KEY (delivery_man) REFERENCES Delivery_man(dm_id),
	FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

CREATE TABLE Prev_orders (
	order_id INT NOT NULL,
	customer_id INT,
	item_name INT NOT NULL,
	price INT NOT NULL,
	order_type VARCHAR(10) NOT NULL,
	day_of_order DATE,
	FOREIGN KEY (customer_id) REFERENCES Customers(customer_id),
	FOREIGN KEY (item_name) REFERENCES Items(item_name)
)
