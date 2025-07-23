# ───────────── STAGE 1: Build ─────────────
FROM node:18-alpine AS builder

# Create app directory
WORKDIR /app

# Copy only essential files
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# Install dependencies
RUN npm install

# Copy the rest of the source
COPY . .

# Build the app (includes pre-rendering if applicable)
RUN npm run build

# ───────────── STAGE 2: Run ─────────────
FROM node:18-alpine AS runner

WORKDIR /app

# Set NODE_ENV to production
ENV NODE_ENV=production

# Install only production dependencies
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
