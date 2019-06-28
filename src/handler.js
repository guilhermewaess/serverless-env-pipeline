'use strict';

export async function helloWorld(event) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: process.env.MESSAGE,
      db: process.env.DB || "Err",
      firebase: process.env.FIREBASE || "Err",
      version: 1
    }, null, 2),
  };
};
