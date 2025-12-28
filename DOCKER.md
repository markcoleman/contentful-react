# Docker Deployment Guide

This project includes Docker support for containerizing the React application with security best practices.

## Overview

Two Dockerfiles are provided:

1. **Dockerfile** - Multi-stage build (builds app in Docker)
2. **Dockerfile.simple** - Single-stage build (requires pre-built dist folder)

## Quick Start

### Option 1: Using Pre-built Dist (Recommended)

```bash
# Build the React app locally
npm run build

# Build and run the Docker image
docker build -f Dockerfile.simple -t contentful-react .
docker run -d -p 8080:8080 contentful-react
```

### Option 2: Multi-stage Build

```bash
# Build image (builds app inside Docker)
docker build -t contentful-react .
docker run -d -p 8080:8080 contentful-react
```

## Testing

Run the included test script to validate the container:

```bash
./test-docker.sh
```

This script will:

- Build the Docker image
- Start the container
- Run health checks
- Test all endpoints
- Verify security headers
- Confirm non-root user execution

## Security Features

The Docker container includes several security best practices:

- **Non-root user**: Container runs as unprivileged user (UID 1001)
- **Security headers**: X-Frame-Options, X-Content-Type-Options, X-XSS-Protection, CSP
- **Minimal base image**: Uses nginx:alpine for small attack surface
- **Health checks**: Built-in health monitoring
- **Non-privileged port**: Runs on port 8080 (not 80)
- **Read-only filesystem compatible**: Static files only

## Container Details

- **Base Image**: nginx:alpine
- **Exposed Port**: 8080
- **User**: appuser (UID: 1001, GID: 1001)
- **Health Check**: HTTP GET on /health endpoint
- **Image Size**: ~50MB (compressed)

## Configuration

### Nginx Configuration

The container uses a custom nginx configuration (`nginx.conf`) that includes:

- SPA routing support (all routes serve index.html)
- Compression (gzip)
- Security headers
- Static asset caching
- Health check endpoint at `/health`

### Environment Variables

Currently, the container does not require environment variables. To add runtime configuration:

1. Update `nginx.conf` to include environment variable support
2. Use `envsubst` in the Docker CMD to replace placeholders

## CI/CD Integration

The GitHub Actions workflow (`.github/workflows/docker.yml`) automatically builds and pushes Docker images to the GitHub Container Registry (GHCR).

### Automatic Triggers

The workflow runs automatically when:

1. **Release is published**: When you create a GitHub release, the workflow builds and pushes the image with version tags
2. **Tag is pushed**: When you push a tag matching `v*.*.*` (e.g., `v1.0.0`, `v2.1.3`)

### Version Tagging

Images are automatically tagged with:

- Semantic version tags (e.g., `v1.0.0`, `1.0`, `1`)
- `latest` tag (for main branch)
- SHA-based tags (for commits)

Example:

```bash
# When you create release v1.2.3, these tags are pushed:
ghcr.io/markcoleman/contentful-react:1.2.3
ghcr.io/markcoleman/contentful-react:1.2
ghcr.io/markcoleman/contentful-react:1
ghcr.io/markcoleman/contentful-react:latest
```

### Manual Workflow Dispatch

You can also trigger the workflow manually:

1. Go to Actions tab in GitHub
2. Select "Docker Build and Push" workflow
3. Click "Run workflow"
4. Optionally specify a custom tag

### Workflow Permissions

The workflow has the following permissions:

- `contents: write` - To read repository content and access git metadata
- `packages: write` - To push images to GitHub Container Registry

### Using Published Images

Pull and run published images:

```bash
# Pull latest version
docker pull ghcr.io/markcoleman/contentful-react:latest

# Pull specific version
docker pull ghcr.io/markcoleman/contentful-react:1.0.0

# Run the container
docker run -d -p 8080:8080 ghcr.io/markcoleman/contentful-react:latest
```

### Creating Releases

To publish a new version:

1. **Tag your commit**:

   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

2. **Or create a GitHub release**:
   - Go to Releases → Create new release
   - Enter tag (e.g., `v1.0.0`)
   - Add release notes
   - Publish

The workflow will automatically build and push the Docker image with appropriate tags.

## Troubleshooting

### Container won't start

```bash
# Check logs
docker logs <container-id>

# Verify permissions
docker exec <container-id> ls -la /usr/share/nginx/html
```

### Port already in use

```bash
# Use a different host port
docker run -d -p 3000:8080 contentful-react
```

### Build fails

```bash
# Ensure dist folder exists (for Dockerfile.simple)
npm run build

# Check .dockerignore isn't excluding required files
cat .dockerignore
```

## Production Deployment

For production deployments, images are automatically published to GitHub Container Registry (GHCR). To deploy:

1. **Pull from GHCR**:

   ```bash
   docker pull ghcr.io/markcoleman/contentful-react:1.0.0
   ```

2. **Tag images with version numbers** (handled automatically by CI/CD)

3. **Use orchestration** (Kubernetes, ECS, Docker Compose, etc.)

4. **Configure external monitoring and logging**

5. **Set up proper TLS/SSL termination** (use a reverse proxy or load balancer)

6. **Consider read-only root filesystem** with `--read-only` flag

Example production run:

```bash
docker run -d \
  --name contentful-react \
  --read-only \
  --tmpfs /var/cache/nginx \
  --tmpfs /var/run \
  -p 8080:8080 \
  --restart unless-stopped \
  ghcr.io/markcoleman/contentful-react:1.0.0
```

### Image Visibility

By default, GitHub Container Registry images are private. To make them public:

1. Go to https://github.com/markcoleman/contentful-react/pkgs/container/contentful-react
2. Click "Package settings"
3. Change visibility to "Public" if desired
