# 📦 GSK E-Commerce Backend

A Spring Boot–based **E-Commerce Backend API** providing authentication, product management, cart, order handling, and category management. Built with **Java, Spring Boot, Maven**, and integrated with **Swagger API docs**.

---

## 🚀 Features
- 🔐 User authentication & authorization (JWT based)  
- 🛍️ Product & category management  
- 🛒 Shopping cart & checkout flow  
- 📦 Order management  
- 🏠 Address management for users  
- ⚡ RESTful APIs with Swagger documentation  
- 🎯 Centralized exception handling  

---

## 🛠️ Tech Stack
- **Java 17+**  
- **Spring Boot**  
- **Spring Security + JWT**  
- **Maven** (build tool)  
- **Hibernate/JPA** (ORM)  
- **Swagger** (API documentation)  
- **MySQL / PostgreSQL** (configurable database)  

---

## 📂 Project Structure
```
gsk-ecom/
 ┣ src/main/java/com/ecommerce/project/
 ┃ ┣ config/         # App configuration & constants
 ┃ ┣ controller/     # REST controllers (Auth, Cart, Orders, etc.)
 ┃ ┣ exceptions/     # Global exception handling
 ┃ ┣ model/          # Entity models
 ┃ ┗ GskEcomApplication.java
 ┣ src/main/resources/
 ┃ ┣ application.properties   # App configuration
 ┣ pom.xml           # Maven dependencies
 ┣ mvnw / mvnw.cmd   # Maven wrapper
 ┗ README.md
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/gsk-ecom.git
cd gsk-ecom
```

### 2️⃣ Configure database
Update `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/gsk_ecom
spring.datasource.username=your_db_user
spring.datasource.password=your_db_password
spring.jpa.hibernate.ddl-auto=update
```

### 3️⃣ Build & run
```bash
./mvnw spring-boot:run
```
Or with Maven installed:
```bash
mvn spring-boot:run
```

### 4️⃣ Access the API
- Base URL → `http://localhost:8080/api`  
- Swagger UI → `http://localhost:8080/swagger-ui.html`  

---

## ✅ API Modules & Examples

### 🔐 Authentication
**Register**
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "secret123"
}
```

**Login**
```http
POST /api/auth/login
Content-Type: application/json

{
  "username": "john_doe",
  "password": "secret123"
}
```

**Response**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}
```

---

### 🛍️ Products
**Create Product (Admin)**
```http
POST /api/products
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

{
  "name": "iPhone 16",
  "description": "Latest Apple iPhone",
  "price": 999.99,
  "stock": 50,
  "categoryId": 1
}
```

**Get All Products**
```http
GET /api/products
```

**Sample Response**
```json
[
  {
    "id": 1,
    "name": "iPhone 16",
    "price": 999.99,
    "category": "Mobiles"
  }
]
```

---

### 🛒 Cart
**Add Item to Cart**
```http
POST /api/cart/add
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

{
  "productId": 1,
  "quantity": 2
}
```

**Get User Cart**
```http
GET /api/cart
Authorization: Bearer <JWT_TOKEN>
```

---

### 📦 Orders
**Place Order**
```http
POST /api/orders
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

{
  "addressId": 1,
  "paymentMethod": "COD"
}
```

**Sample Response**
```json
{
  "orderId": 1001,
  "status": "PLACED",
  "totalAmount": 1999.98
}
```

---

### 🏠 Address
**Add Address**
```http
POST /api/addresses
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

{
  "street": "123 Main St",
  "city": "New York",
  "state": "NY",
  "zip": "10001",
  "country": "USA"
}
```

---

## 🧪 Running Tests
```bash
mvn test
```

---
