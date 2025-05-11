export const contentResponse = (textResponse) => {
    if(typeof textResponse !== "string") return {
        content: [
            {
                type: "text",
                text: "invalid type of Text Response, please pass the response in string formate"
            }
        ]
    }
    return {
        content: [
          {
            type: "text",
            text: textResponse,
          },
        ],
      };
}