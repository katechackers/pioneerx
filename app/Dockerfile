FROM node:22-alpine

WORKDIR /usr/src/app

COPY .yarn/releases /usr/src/app/.yarn/releases/
COPY package.json yarn.lock .yarnrc.yml tsconfig.json /usr/src/app/
COPY /app/package.json /usr/src/app/app/package.json

RUN yarn install --immutable

# Copy source code and build
COPY app/ /usr/src/app/app/
RUN yarn workspace @boilerplate-demo/app build

# Set environment variables
ENV NODE_ENV production
ENV NODE_OPTIONS=--max_old_space_size=2048
ENV PORT=10000

# Expose port
EXPOSE 10000

# Run app
CMD ["yarn", "workspace", "@boilerplate-demo/app", "start"]
