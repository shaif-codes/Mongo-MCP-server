# MongoDB Tools Project

This project provides utility tools to interact with MongoDB, including listing collections and inspecting schema details.

---

## 📁 Project Structure

```
.env
.gitignore
.vscode/
  └── settings.json
package.json
server.js
src/
tools/
  └── mongoTools.js
utils/
  └── mongoConnection.js
```

---

## ⚙️ Environment Setup

1. **Clone the repository**
2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**  
   Create a \`.env\` file in the root directory and add your MongoDB connection string:

```env
MONGO_URI=<your-mongodb-connection-string>
```

---
## Setup the MCP Server in Cursor
if the above three setup steps are working, then you are good to go to setup the MCP server in Cursor. Now navigate to settings > MCP then click on "+ add new global MCP server" and paste the below code:
```JSON
"mongoDB": {
      "command": "node",
      "args": ["FULL_PATH_OF_server.js_FILE"],
      "env": {
        "MONGO_URI": "<YOUR_MONGODB_URI_OF_DB>"
      }
    }
```
---

## 🚀 Usage

### Start the Server

- For production:

\`\`\`bash
npm start
\`\`\`

- For development with live reloading:

\`\`\`bash
npm run dev
\`\`\`

---

## 🛠️ Available Tools

### 1. \`list_all_mongoDB_collections()\`

- **Description**: Lists all collections in the connected MongoDB database.  
- **Input**: None  
- **Output**: Array of collection names.

### 2. \`get_schema_details_of_collection(collectionName)\`

- **Description**: Fetches schema details of a collection by analyzing a sample document.  
- **Input**:
  - \`collectionName\` *(string)*: Name of the MongoDB collection  
- **Output**: JSON object representing schema details.

---

## 🧪 Development Notes

### 🏗️ Project Type

- Uses **ES Modules** (\`"type": "module"\` in \`package.json\`)

### 📜 Scripts

- \`npm start\`: Runs the server  
- \`npm run dev\`: Runs the server with \`nodemon\` for live reloading

### 📦 Dependencies

- [\`@modelcontextprotocol/sdk\`](https://www.npmjs.com/package/@modelcontextprotocol/sdk) - MCP SDK  
- [\`dotenv\`](https://www.npmjs.com/package/dotenv) - Load environment variables  
- [\`mongoose\`](https://mongoosejs.com/) - MongoDB ODM  
- [\`zod\`](https://zod.dev/) - Schema validation  
- [\`nodemon\`](https://www.npmjs.com/package/nodemon) - Development auto-reloader

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to fork the repository and submit a pull request for any improvements or bug fixes.

---

## 📄 License

This project is licensed under the **ISC License**.
