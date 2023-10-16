FROM node:16.14.2 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy all the application code to the working directory
COPY . .

# Build the Angular app for production
RUN node_modules/.bin/ng build --configuration production

# Use a smaller base image for the production build
FROM nginx:alpine

# Copy the Angular app from the builder stage to the NGINX web server
COPY --from=builder /app/dist/app /usr/share/nginx/html

# Expose port 80 for NGINX
EXPOSE 80

# Start NGINX web server when the container runs
CMD ["nginx", "-g", "daemon off;"]