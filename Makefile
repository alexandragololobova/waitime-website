.PHONY: help build up down restart ps clean export save load deploy

APP_NAME := waitime-web
VERSION := latest
IMAGE := waitime-website
COMPOSE := docker-compose
REMOTE_HOST ?= deploy@your-server.com
TIMESTAMP := $(shell date +%Y%m%d-%H%M%S)

# Show help - describes all available make targets
help:
	@echo "Available make targets:"
	@echo ""
	@echo "  make build     - Build Docker image (no cache)"
	@echo "  make up        - Start Docker Compose services"
	@echo "  make down      - Stop Docker Compose services"
	@echo "  make restart   - Restart services (down + up)"
	@echo "  make ps        - Show status of running containers"
	@echo "  make clean     - Remove containers, images, and volumes"
	@echo "  make rebuild   - Full rebuild without cache (down + build + up)"
	@echo "  make shell     - Open shell inside the web container"
	@echo "  make export    - Export Docker image to tar file in exports/"
	@echo "  make deploy    - Deploy image to remote server (set REMOTE_HOST)"
	@echo ""
	@echo ""
	@echo "Variables:"
	@echo "  REMOTE_HOST   - SSH host for deploy (default: deploy@your-server.com)"
	@echo "  VERSION       - Docker image tag (default: latest)"
	@echo ""
	@echo "Examples:"
	@echo "  make build VERSION=0.0.1                                       # Build with custom tag"
	@echo "  make export VERSION=0.0.1                                      # Export specific version"
	@echo "  make deploy VERSION=0.0.1 REMOTE_HOST=prod@192.168.1.100       # Deploy to specific host"
	@echo ""

# Build Docker image (no cache)
build:
	docker build --no-cache -t $(IMAGE):$(VERSION) .

# Start services
up:
	$(COMPOSE) up -d

# Stop services
down:
	$(COMPOSE) down

# Restart services
restart: down up

# Show status
ps:
	$(COMPOSE) ps

# Clean up containers and images
clean:
	$(COMPOSE) down --rmi local --volumes

# Rebuild without cache
rebuild: down build up

# Shell into container
shell:
	$(COMPOSE) exec web sh

# Export image to tar
export:
	mkdir -p "exports"
	docker save $(IMAGE):$(VERSION) -o exports/$(APP_NAME)-$(VERSION)-$(TIMESTAMP).tar

# Deploy to remote host via SSH (direct docker load via pipe)
deploy:
	@echo "Transferring image to $(REMOTE_HOST)..."
	docker save $(IMAGE):$(VERSION) | ssh $(REMOTE_HOST) "docker load"