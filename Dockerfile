FROM node:22-slim
WORKDIR /app
COPY package.json index.js ./
EXPOSE 8080
CMD ["node", "index.js"]
