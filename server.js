import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import dotenv from 'dotenv'
import { z } from 'zod'
dotenv.config();
import connect from "./src/utils/mongoConnection.js";
import { listCollections, fetchSchemaDetails, fetchDocuments } from './src/tools/mongoTools.js'
const server = new McpServer({
    name: "Database MCP Server",
    version: "1.0.0"
})
// console.log("mognoURI", process.env.MONGO_URI)
const client = await connect();

server.tool(
    'list_all_mongoDB_collections',
    {},
    listCollections
)

server.tool(
    'get_schema_details_of_collection',
    {
        collectionName: z.string()
    },
    fetchSchemaDetails
)

server.tool(
    'find_documents_of_collection',
    {
        collectionName: z.string().describe("name of the collection"),
        condition: z.record(z.string(), z.unknown).optional().describe("the condtion object for finding the document"),
        keyProjection: z.record(z.string(), z.any()).optional().describe("the projection object for required keys which should be included in the document")
    },
    fetchDocuments
)


const transport = new StdioServerTransport();
await server.connect(transport)//.then(()=> console.log("server is running...."));