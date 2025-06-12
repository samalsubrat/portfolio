FROM node:24
# Install pnpm
WORKDIR /app


# Copy package files
COPY package.json ./

# Install dependencies
RUN npm install

# Copy app source
COPY . .

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 1337

# Start the application
CMD ["npm", "run", "develop"]
