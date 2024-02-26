# Use an official Node.js runtime as a base image
FROM node:20-buster-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that the app will run on
EXPOSE 19006 

# Start the React Native packager
ENTRYPOINT ["npm", "run"]
CMD ["android"]