FROM node:8

# Create app directory
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 8085:8085
CMD ["npm", "start"]