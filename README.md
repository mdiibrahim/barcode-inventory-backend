# Barcode-Driven Inventory System with Kanban Board

This project is a **Barcode-Driven Inventory System** featuring a **Kanban Board** built with **Next.js**, **TypeScript**, **Node.js**, and **MongoDB**. It allows users to:

- Scan barcodes to fetch product details from an external API or the local database.
- Manage inventory efficiently with a responsive Kanban Board.
- Dynamically add categories and persist them in the database.
- Perform CRUD operations on products and categories.

---

## **Tech Stack & Tools Used**

### **Backend:**

- **Node.js with Express**: For building scalable and efficient RESTful APIs.
- **Mongoose**: To model and manage MongoDB data.

---

## **Getting Started**

### **Prerequisites:**

- Node.js (v14 or later)
- MongoDB (local or cloud instance)
- Package Manager (npm or yarn)

### **Backend Setup:**

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd barcode-inventory-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```env
   MONGO_URI=your_mongo_db_connection_string
   PORT=5000
   EXTERNAL_API_URL=https://products-test-aci.onrender.com/product
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### **Frontend Setup:**

1. Navigate to the frontend folder:
   ```bash
   cd barcode-inventory-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

---

## **Features:**

- Barcode Scanning and Product Details Fetching
- Kanban Board with Drag-and-Drop Functionality
- Dynamic Category Management
- Responsive Design for Mobile and Desktop

---

## **Contributing:**

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## **Contact:**

For any inquiries, please contact [Your Name] at [Your Email].
