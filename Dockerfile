FROM node

WORKDIR /app/

EXPOSE 80

COPY . . 

RUN npm install

CMD ["node", "app.js"]
