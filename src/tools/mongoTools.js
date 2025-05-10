import mongoose from "mongoose";

export const listCollections = async () => {
    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    return {
        content: collections.map((col) => ({
            type: "text",
            text: col.name
        }))
    }
}

export const fetchSchemaDetails = async ({ collectionName }) => {
    const db = mongoose.connection.db;
    const collection = db.collection(collectionName);
    const sampleDoc = await collection.findOne();
    if (!sampleDoc) {
        return { content: `No documents found in collection: ${collectionName}` };
    }
    // Build schema details from sample document
    const schemaDetails = Object.entries(sampleDoc).map(([key, value]) => ({
        field: key,
        type: Array.isArray(value) ? 'array' : typeof value
    }));
    return {
        content: {
            type: "text",
            text: JSON.stringify(schemaDetails, null, 2)
        }
    };
}