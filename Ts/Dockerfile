FROM node:latest
RUN mkdir frontend
WORKDIR /frontend
COPY . .
RUN npm install && npm run build && npm install -g typescript
EXPOSE 3000
CMD [ "npm", "run", "start" ]
