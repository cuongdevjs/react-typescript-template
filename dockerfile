FROM node:12-alpine as build

COPY package.json package-lock.json ./

RUN npm install && mkdir /panoee-studio && mv ./node_modules ./panoee-studio

WORKDIR /panoee-studio


COPY . .


ENV REACT_APP_API_URL=http://localhost:3003


RUN npm run build



FROM nginx:alpine
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /panoee-studio/build/ /usr/share/nginx/html

# Fire up nginx
EXPOSE 80:80
CMD ["nginx", "-g", "daemon off;"]
