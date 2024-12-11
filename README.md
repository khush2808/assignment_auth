# Assignment Auth

## API Structure

### Endpoints

#### User Registration
- **URL:** `/api/auth/signup`
- **Method:** POST
- **Description:** Registers a new user.
- **Request Body:**
  ```json
  {
    
    "password": ,
    "email": 
  }
  ```
- **Response:**
  ```json
  {
  "email": ,
    "id": 
	}
  ```

#### User Login
- **URL:** `/api/signin`
- **Method:** POST
- **Description:** Authenticates a user and returns a token.
- **Request Body:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response:**
  ```json
  {
  "message": "Sign-in successful"
	}
  ```


### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/khush2808/assignment_auth.git
   ```
2. Navigate to the project directory:
   ```bash
   cd assignment_auth
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Configuration
1. Create a `.env` file in the root directory and add the following environment variables:
   ```
   PORT=3000
   DATABASE_URL=your_database_url
   ```

### Running the Project
1. Start the server:
   ```bash
   npm start
   ```
2. The server will be running at `http://localhost:3000`.

### Testing the API
Use a tool like Postman to test the API endpoints.

