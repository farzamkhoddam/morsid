FROM node:lts-alpine3.13

# set working directory
#WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
#ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
#COPY package.json ./
#COPY pages ./
#COPY package-lock.json ./
#RUN yarn install
#RUN yarn build
#RUN npm install --silent
#RUN npm install react-scripts@3.4.1 -g --silent

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# add app
#COPY . ./

# start app
CMD ["yarn", "start"]
