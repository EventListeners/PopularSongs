FROM node:8
WORKDIR /app
COPY package.json /app
RUN npm install --production
COPY . /app
# CMD node index.js
CMD [ "npm", "start" ]
EXPOSE 3003
