# Use a lightweight Node.js base image
FROM node:alpine

# Create and set the working directory inside the container
WORKDIR /app

# Copy package files first to leverage Docker's layer caching
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Expose the port the app runs on
EXPOSE 4000

# Command to run the app
CMD ["npm", "run", "dev"]
