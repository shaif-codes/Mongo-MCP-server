import mongoose from "mongoose";
import {contentResponse} from "../utils/responseFormate.js"

export const listCollections = async () => {
  const db = mongoose.connection.db;
  const collections = await db.listCollections().toArray();
  return {
    content: collections.map((col) => ({
      type: "text",
      text: col.name,
    })),
  };
};

export const fetchSchemaDetails = async ({ collectionName }) => {
  if (!collectionName || typeof collectionName !== "string") {
    return contentResponse(`Invalid collection name: ${collectionName}`);
  }
  const db = mongoose.connection.db;
  const collection = db.collection(collectionName);
  const sampleDoc = await collection.findOne();
  if (!sampleDoc) {
    return contentResponse(`No collection found with name ${collectionName} in database`);
  }
  // Build schema details from sample document
  const schemaDetails = Object.entries(sampleDoc).map(([key, value]) => ({
    field: key,
    type: Array.isArray(value) ? "array" : typeof value,
  }));
  return contentResponse(JSON.stringify(schemaDetails, null, 2));
};
