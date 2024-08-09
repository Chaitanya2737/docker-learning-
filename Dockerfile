FROM node:20.16.0

WORKDIR /myapp

COPY .  .

RUN npm i 

EXPOSE  3000

CMD [ "npm" , "start" ]
