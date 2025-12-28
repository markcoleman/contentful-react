#!/bin/bash

# Docker Container Testing Script
# This script builds and tests the Docker container locally
#
# Usage: ./test-docker.sh [dockerfile]
#   dockerfile: Optional path to Dockerfile (default: Dockerfile)
#
# Examples:
#   ./test-docker.sh                    # Uses Dockerfile
#   ./test-docker.sh Dockerfile.simple  # Uses Dockerfile.simple

set -e

IMAGE_NAME="contentful-react"
IMAGE_TAG="test"
CONTAINER_NAME="contentful-react-test"
PORT=8080
DOCKERFILE="${1:-Dockerfile}"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "🐳 Docker Container Test Script"
echo "================================"
echo "Using Dockerfile: $DOCKERFILE"
echo ""

# Cleanup function
cleanup() {
    echo "🧹 Cleaning up..."
    docker stop $CONTAINER_NAME 2>/dev/null || true
    docker rm $CONTAINER_NAME 2>/dev/null || true
}

# Set trap to cleanup on exit
trap cleanup EXIT

# Build the image
echo "📦 Building Docker image..."
docker build -f "$DOCKERFILE" -t $IMAGE_NAME:$IMAGE_TAG .

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Docker build failed${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Docker image built successfully${NC}"
echo ""

# Run the container
echo "🚀 Starting container..."
docker run -d --name $CONTAINER_NAME -p $PORT:8080 $IMAGE_NAME:$IMAGE_TAG

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to start container${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Container started${NC}"
echo ""

# Wait for container to be ready
echo "⏳ Waiting for container to be healthy..."
timeout=30
counter=0

while [ $counter -lt $timeout ]; do
    status=$(docker inspect --format='{{.State.Health.Status}}' $CONTAINER_NAME 2>/dev/null || echo "unknown")
    
    if [ "$status" == "healthy" ]; then
        echo -e "${GREEN}✅ Container is healthy${NC}"
        break
    fi
    
    echo "Waiting... ($counter/$timeout)"
    sleep 1
    counter=$((counter + 1))
done

if [ $counter -eq $timeout ]; then
    echo -e "${RED}❌ Container health check timed out${NC}"
    echo "Container logs:"
    docker logs $CONTAINER_NAME
    exit 1
fi

echo ""

# Test endpoints
echo "🧪 Testing endpoints..."

# Test main page
echo -n "Testing main page... "
if curl -f -s http://localhost:$PORT/ > /dev/null; then
    echo -e "${GREEN}✅ Passed${NC}"
else
    echo -e "${RED}❌ Failed${NC}"
    exit 1
fi

# Test health endpoint
echo -n "Testing health endpoint... "
response=$(curl -f -s http://localhost:$PORT/health)
if [ "$response" == "healthy" ]; then
    echo -e "${GREEN}✅ Passed${NC}"
else
    echo -e "${RED}❌ Failed${NC}"
    exit 1
fi

# Test SPA routing
echo -n "Testing SPA routing... "
if curl -f -s http://localhost:$PORT/some-route > /dev/null; then
    echo -e "${GREEN}✅ Passed${NC}"
else
    echo -e "${RED}❌ Failed${NC}"
    exit 1
fi

echo ""

# Test security headers
echo "🔒 Testing security headers..."
headers=$(curl -I -s http://localhost:$PORT/)

check_header() {
    if echo "$headers" | grep -qi "$1"; then
        echo -e "  ${GREEN}✅${NC} $1"
    else
        echo -e "  ${RED}❌${NC} $1"
        return 1
    fi
}

check_header "X-Frame-Options"
check_header "X-Content-Type-Options"
check_header "X-XSS-Protection"
check_header "Content-Security-Policy"

echo ""

# Check non-root user
echo "👤 Checking container user..."
user=$(docker exec $CONTAINER_NAME whoami)
if [ "$user" != "root" ]; then
    echo -e "${GREEN}✅ Container running as non-root user: $user${NC}"
else
    echo -e "${RED}❌ Container running as root - security violation!${NC}"
    exit 1
fi

echo ""

# Show image info
echo "📊 Image information:"
docker images $IMAGE_NAME:$IMAGE_TAG --format "  Size: {{.Size}}"
echo ""

echo -e "${GREEN}🎉 All tests passed!${NC}"
echo ""
echo "To view the app, open: http://localhost:$PORT"
echo "To stop the container: docker stop $CONTAINER_NAME"
