# Build stage
FROM node:22 AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy remaining source code
COPY . .

# Build the React project using Vite
RUN npm run build

# Production stage: serve built files with Nginx
FROM nginx:alpine
# Copy built output from builder stage to Nginx html folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 and start Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]