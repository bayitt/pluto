FROM node:17-alpine as final
FROM node:17-alpine as build

# Build step of the Dockerfile. Compiles the application into a smaller, sleeked down, optimized build.
RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

COPY yarn.lock ./

RUN yarn install --ignore-engines

COPY . .

RUN yarn build

# Run step of the Dockerfile. Gets the compiled build of the app from the build step and runs it.
FROM final

RUN mkdir -p /app

WORKDIR /app

COPY --from=build /app/.next /app/.next

COPY --from=build /app/node_modules /app/node_modules

EXPOSE 3000

CMD ["node_modules/.bin/next", "start"]