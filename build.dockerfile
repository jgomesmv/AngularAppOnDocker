### STAGE 1: Build ###

# The image we start from
FROM node:12.13.1 AS build

# Identify the person who maitains the docker file
MAINTAINER José Gomes

# The working directory name used inside the container
WORKDIR /usr/src/app

# Copies the package.json file from the local  machine into the working directory of the container
COPY package.json ./

# Install all app dependencies of the app
RUN npm install

# Copy all files from the local machine into the the working directory of the container
COPY . .

# Build the app
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/dist/UsersManagerSPA /usr/share/nginx/html

### Instructions ###
# Build Image
# docker build --file build.dockerfile --tag users-manager-spa-image:v1.0 .
# Run image:
# docker run --name users-manager-spa-container -d -p 8888:80 users-manager-spa-image:v1.0