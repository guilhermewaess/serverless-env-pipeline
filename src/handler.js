'use strict';

export async function helloWorld(event) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: process.env.MESSAGE,
      input: event,
    }, null, 2),
  };
};
