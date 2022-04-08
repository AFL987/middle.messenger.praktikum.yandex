FROM node
WORKDIR /var/www
COPY ["package.json", "./"]
COPY ./ ./
RUN npm install 
EXPOSE 3000
CMD npm run start