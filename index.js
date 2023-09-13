import fetch from "node-fetch";
import express from "express";
import { Bot,webhookCallback } from "grammy";
import {} from 'dotenv/config'

const bot = new Bot(process.env.BOT_TOKEN);

// bot.command("start",  );
// bot.on("message", (ctx) => ctx.reply("Got another message!"));
// haha

// if (process.env.NODE_ENV === "production") {
//     const app = express();
//     app.use(express.json());
//     app.use(webhookCallback(bot, "express"));
  
//     const PORT = process.env.PORT || 3000;
//     app.listen(PORT, () => {
//       console.log(`Bot listening on port ${PORT}`);
//     });
//   } else {
//     bot.start();
//   }
  
  

  async function sendMessages(ctx) {
    try {
      while (true) {
        await bot.api.sendMessage('-927409071', 'Tin nhắn của bạn');
        await new Promise(resolve => setTimeout(resolve, 1000)); // Đợi 1 giây trước khi gửi tin nhắn tiếp theo
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  // Gọi hàm gửi tin nhắn liên tục
  sendMessages();

  bot.start();

  process.once("SIGINT", () => bot.stop("SIGINT"));
  process.once("SIGTERM", () => bot.stop("SIGTERM"));