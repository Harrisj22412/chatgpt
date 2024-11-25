import OpenAI  from "openai";
import readline from "readline";

const openai = new OpenAI({
    organization: "org-Ia7U2sWBBpy6LxaZjoiA3cDn",
    apiKey: "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",
});

//const openai = new OpenAIApi(configuration);

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

userInterface.prompt();

const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": "Hello!"}],
  });
  console.log(chatCompletion.choices[0].message);