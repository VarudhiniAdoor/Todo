# To-Do App with Frontend and Backend Integration

This project is a feature-rich To-Do application with a frontend built using HTML, CSS, and JavaScript, and a backend implemented in Java Spring Boot, integrated with a MongoDB database.

## **Live Demo**
https://varudhiniadoor.github.io/Todo/index
---

## **Features**

### **Frontend**
- Create, read, update, and delete tasks.
- Track task completion with a progress bar.
- Confetti celebration when all tasks are completed.
- Persistent data storage using localStorage for offline use.

### **Backend**
- RESTful APIs for managing tasks (Create, Read, Update, Delete).
- MongoDB integration for storing tasks persistently.

---

## **Project Structure**

### **Frontend**
- **index.html**: Main HTML file.
- **styles.css**: Styling for the application.
- **script.js**: JavaScript to handle task logic and API integration.
- **img/**: Directory containing icons (edit, delete, etc.).

### **Backend**
- **Spring Boot Application**: Provides RESTful APIs.
- **MongoDB**: Stores task data.
- **Controllers**: Handles API requests.
- **Services**: Business logic.
- **Models**: Defines task schema.

---

## **Getting Started**

### **Prerequisites**
- Node.js (for local development)
- Java JDK 17+
- MongoDB (local or cloud)
- Git

---

### **Setup Instructions**

#### **Backend**
1. Clone the repository:
   ```bash
   git clone <REPOSITORY_URL>
   cd backend
   ```

2. Configure MongoDB in `application.properties`:
   ```properties
   spring.data.mongodb.uri=mongodb://localhost:27017/todoapp
   ```

3. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```

4. Verify API is running at `http://localhost:8080/api/tasks`.

#### **Frontend**
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Open `index.html` in your browser.

3. Update the API URL in `script.js` if backend is deployed:
   ```javascript
   const API_URL = "<BACKEND_URL>"; // Replace with your backend URL
   ```

---

### **Deployment**

#### **Frontend (GitHub Pages)**
1. Push frontend code to GitHub.
2. In repository settings, enable GitHub Pages under the "Pages" section.
3. Access the frontend at `https://<USERNAME>.github.io/<REPOSITORY_NAME>/`.

#### **Backend (Render/Heroku)**
1. Push backend code to a GitHub repository.
2. Deploy using platforms like Render, Heroku, or Railway.

---

## **Usage**
1. Add tasks using the input field and the "Add Task" button.
2. Mark tasks as complete using the checkbox.
3. Edit or delete tasks using the respective icons.
4. View real-time updates in the task list and progress bar.
5. Celebrate with confetti when all tasks are completed!

---

## **API Endpoints**
- `GET /api/tasks` - Fetch all tasks.
- `POST /api/tasks` - Create a new task.
- `PUT /api/tasks/{id}` - Update an existing task.
- `DELETE /api/tasks/{id}` - Delete a task.


## **Contact**
For any queries or suggestions, reach out to:
- **Email**: adoorvarudhini@gmail.com
- **GitHub**: https://github.com/VarudhiniAdoor
