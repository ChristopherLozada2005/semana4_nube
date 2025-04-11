FROM node:18
LABEL maintainer="christopher.lozada@tecsup.edu.pe"
RUN git clone https://github.com/ChristopherLozada2005/semana4_nube.git
WORKDIR /semana4_nube
RUN npm install
EXPOSE 5000

CMD ["node", "app.js"]