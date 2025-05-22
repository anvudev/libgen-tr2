FROM node:20

# Tạo thư mục làm việc
WORKDIR /app
RUN npm i -g pnpm
COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .
# Build Typescript
RUN pnpm build

# Expose port App
EXPOSE 3333

# Run the application
CMD ["node", "build/bin/server.js"]
