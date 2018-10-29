# Use Node.js version 10
FROM mhart/alpine-node:10

# Set the working directory
WORKDIR /usr/src

# Copy package manager files to the working directory and run install
COPY package.json ./
RUN yarn install

# Copy all files to the working directory
COPY . .

# Build the app and move the resulting build to the `/public` directory
RUN yarn build
# free plan of zeit.co only allows for 5 mb files. 
# source maps are larger so we delete them
RUN rm build/static/js/*.map
RUN mv ./build /public