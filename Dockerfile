
# 1. Base Image
FROM node:24-slim

# 2. Working Directory
WORKDIR /app

# 3. Copy package files
COPY package*.json ./

# 4. Install production dependencies
RUN npm ci --omit=dev

# 5. Copy application files
COPY . .

# 6. Expose application port
EXPOSE 5000

# 7. Start application
CMD ["npm", "start"]
