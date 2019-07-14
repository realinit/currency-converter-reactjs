# 
# Run following command from the current directory
# docker build -t techno-app .
FROM node:6.11.4-alpine
#From jprjr/ubuntu-nodejs:latest

# We want to use nodejs user and not default root
# RUN groupadd -r nodejs \
# && useradd -m -r -g nodejs nodejs
# USER nodejs

# Create app directory
RUN mkdir -p /var/app/frontend

WORKDIR /var/app/frontend

# Install app dependencies
COPY package.json .
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./

RUN npm install webpack -g
RUN npm install

# Bundle app source
COPY . /var/app/frontend


#ENV NODE_ENV production
ENV NODE_ENV production

# Docker image has 3000 port opened -- this is where node server runs internally
EXPOSE 8001

CMD [ "npm", "start" ]
