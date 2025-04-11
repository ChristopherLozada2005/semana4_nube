# Usar imagen base de Node.js
FROM node:18
LABEL maintainer="johan.lopez@tecsup.edu.pe"
RUN git clone https://github.com/RageJohan/LAB4_Cloud.git
WORKDIR /LAB4_Cloud
RUN npm install
EXPOSE 5000

CMD ["node", "app.js"]