# 🚀 Kubernetes — Express Backend Deployment (End-to-End Guide)

> A complete guide to containerizing a Node.js/Express application with Docker and deploying it on Kubernetes using Deployment, Service, and Ingress configurations.

---

## 📁 Project Structure

```
Kubernetes/
├── Backend/                    # Node.js Express application
│   ├── server.js               # Main server entry point
│   ├── package.json            # Node dependencies & metadata
│   ├── dockerfile              # Docker build instructions
│   ├── .dockerignore           # Files excluded from Docker image
│   ├── .gitignore              # Files excluded from Git
│   └── node_modules/           # Installed packages (not committed)
│
└── K8s/                        # Kubernetes manifest files
    ├── deployment.yml          # Pod & container configuration
    ├── service.yml             # Internal cluster networking
    └── ingress.yml             # External HTTP routing rules
```

---

## 🧠 Core Concepts

### Why Kubernetes?

Before Kubernetes, deploying to EC2 required taking down the old server to spin up a new one — causing **downtime**. Kubernetes solves this problem with **zero-downtime rolling updates** and **automatic scaling**.

| Scenario           | Containers |
|--------------------|------------|
| 1,000 users        | 1 pod/container |
| 2,000 users        | 2 pods/containers |
| Spike / Drop       | Auto-scales up or down |

### Key Kubernetes Components

| Component      | Role |
|----------------|------|
| **Pod**        | Smallest deployable unit — wraps one or more containers |
| **Deployment** | Manages pods: defines image, CPU, RAM, and replica count |
| **Service**    | Provides stable internal networking between pods (ClusterIP / LoadBalancer) |
| **Ingress**    | Defines external HTTP/HTTPS routing rules via an Ingress Controller (e.g., NGINX) |

---

## ⚙️ Backend Application

### `server.js`

```js
import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
        sum += i;
    }
    res
        .status(200)
        .json({ message: "Sum calculated successfully", sum });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
```

> **Note:** The CPU-intensive loop (1 billion iterations) is intentional — it simulates a heavy workload to demonstrate Kubernetes resource limits and horizontal scaling in action.

### `package.json`

```json
{
  "name": "backend",
  "version": "1.0.0",
  "type": "module",
  "dependencies": {
    "express": "^5.2.1",
    "morgan": "^1.11.0"
  }
}
```

- **`"type": "module"`** — Enables ES Module syntax (`import`/`export`)
- **`express`** — Web framework
- **`morgan`** — HTTP request logger middleware

---

## 🐳 Docker Setup

### `dockerfile`

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

| Instruction         | Purpose |
|---------------------|---------|
| `FROM node:20-alpine` | Lightweight Node.js 20 base image |
| `WORKDIR /app`        | Sets the working directory inside the container |
| `COPY package.json ./` | Copies only the manifest first (layer caching) |
| `RUN npm install`     | Installs dependencies |
| `COPY . .`            | Copies the rest of the source code |
| `EXPOSE 3000`         | Documents that the container listens on port 3000 |
| `CMD ["npm", "start"]` | Default command to run the server |

### `.dockerignore`

```
node_modules
.env
```

Prevents `node_modules` and secret `.env` files from being baked into the Docker image, keeping it lean and secure.

---

### Docker Commands

```bash
# Build the Docker image
docker build . -t express-cohort_2:latest

# Run the container locally (map host port 3000 → container port 3000)
docker run -p 3000:3000 express-cohort_2:latest

# List running containers
docker ps

# Stop a running container
docker stop <container_id>

# Remove a container
docker rm <container_id>
```

---

### Push Image to Docker Hub

```bash
# Tag the image with your Docker Hub username
docker tag express-cohort_2:latest piyushgupta251004/cohort_2_express:latest

# Push to Docker Hub
docker push piyushgupta251004/cohort_2_express:latest
```

---

## ☸️ Kubernetes Setup

### Prerequisites

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
2. In Docker Desktop → **Settings → Kubernetes → Enable Kubernetes**
3. Verify installation:

```bash
kubectl version --client
kubectl get nodes
```

---

## 📄 Kubernetes Manifests

### 1. `K8s/deployment.yml` — Pod & Container Management

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: express-deployment
spec:
  replicas: 3                       # Run 3 pods simultaneously
  selector:
    matchLabels:
      app: main-server              # Targets pods with this label
  template:
    metadata:
      labels:
        app: main-server            # Pod label (must match selector)
    spec:
      containers:
        - name: main-server
          image: piyushgupta251004/cohort_2_express:latest
          imagePullPolicy: Always   # Always pull the latest image
          ports:
            - containerPort: 3000   # Port the app listens on
          resources:
            limits:
              memory: "128Mi"       # Max RAM: 128 megabytes
              cpu: "500m"           # Max CPU: 500 millicores (0.5 core)
            requests:
              memory: "64Mi"        # Guaranteed RAM: 64 megabytes
              cpu: "250m"           # Guaranteed CPU: 250 millicores (0.25 core)
```

**Key Concepts:**

| Field              | Meaning |
|--------------------|---------|
| `replicas: 3`      | 3 pod instances run in parallel (load-balanced) |
| `imagePullPolicy: Always` | Forces pull on every deploy (ensures latest image) |
| `resources.limits` | Hard cap — pod is killed/OOMKilled if exceeded |
| `resources.requests` | Minimum guaranteed resources for scheduling |
| `cpu: "500m"`      | 1 core = 1000m; 500m = 0.5 CPU cores |

---

### 2. `K8s/service.yml` — Internal Cluster Networking

```yaml
kind: Service
apiVersion: v1
metadata:
  name: main-server-service
spec:
  selector:
    app: main-server              # Routes traffic to pods with this label
  type: ClusterIP                 # Internal-only access (within the cluster)
  ports:
    - name: name-of-the-port
      port: 80                    # Port exposed by the Service
      targetPort: 3000            # Port on the pod/container
```

**Service Types:**

| Type           | Access |
|----------------|--------|
| `ClusterIP`    | Internal cluster access only (default) |
| `NodePort`     | Exposes on a static port on each node |
| `LoadBalancer` | External access via cloud load balancer |

> The Service acts as a stable DNS entry (`main-server-service`) that routes traffic to healthy pods matching the `app: main-server` label.

---

### 3. `K8s/ingress.yml` — External HTTP Routing

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: express-app
spec:
  ingressClassName: nginx           # Specifies NGINX as the ingress controller
  rules:
    - http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: main-server-service    # Routes to this Service
                port:
                  number: 80
```

**Install the NGINX Ingress Controller first:**

```bash
kubectl apply -f \
  https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.12.1/deploy/static/provider/cloud/deploy.yaml
```

**Ingress Flow:**

```
Internet → NGINX Ingress Controller → Service (port 80) → Pods (port 3000)
```

| Field                  | Purpose |
|------------------------|---------|
| `ingressClassName: nginx` | Required — tells K8s which controller to use |
| `pathType: Prefix`     | Matches all paths starting with `/` |
| `backend.service.name` | Must match the name in `service.yml` |
| `backend.service.port` | Must match the `port` in the Service (not `targetPort`) |

---

## 🚀 Full Deployment Workflow

### Step 1 — Build & Push Docker Image

```bash
# Navigate to the Backend folder
cd Backend

# Build the image
docker build . -t piyushgupta251004/cohort_2_express:latest

# Push to Docker Hub (requires docker login)
docker login
docker push piyushgupta251004/cohort_2_express:latest
```

### Step 2 — Install NGINX Ingress Controller

```bash
kubectl apply -f \
  https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.12.1/deploy/static/provider/cloud/deploy.yaml
```

### Step 3 — Apply Kubernetes Manifests

```bash
# Apply all manifests
kubectl apply -f K8s/deployment.yml
kubectl apply -f K8s/service.yml
kubectl apply -f K8s/ingress.yml
```

### Step 4 — Verify Everything is Running

```bash
# Check deployments
kubectl get deployments

# Check pods (should see 3 running)
kubectl get pods

# Check services
kubectl get services

# Check ingress
kubectl get ingress

# Describe a resource for detailed info
kubectl describe deployment express-deployment
kubectl describe pod <pod-name>
```

### Step 5 — Access the Application

Once ingress is set up and an external IP is assigned:

```bash
# Get the ingress external IP
kubectl get ingress

# Test the endpoint
curl http://<EXTERNAL-IP>/
```

Expected response:
```json
{
  "message": "Sum calculated successfully",
  "sum": 499999999500000000
}
```

---

## 🔄 Common `kubectl` Commands Reference

```bash
# --- Apply / Delete ---
kubectl apply -f <file.yml>          # Create or update a resource
kubectl delete -f <file.yml>         # Delete a resource from manifest
kubectl delete pod <pod-name>        # Delete a specific pod (restarts automatically)

# --- Inspect ---
kubectl get all                      # List all resources
kubectl get pods -o wide             # Show pods with node info
kubectl describe pod <pod-name>      # Full pod details & events
kubectl logs <pod-name>              # View pod logs
kubectl logs <pod-name> --follow     # Stream logs live

# --- Scaling ---
kubectl scale deployment express-deployment --replicas=5   # Scale to 5 pods
kubectl scale deployment express-deployment --replicas=1   # Scale down to 1

# --- Update Image ---
kubectl set image deployment/express-deployment \
  main-server=piyushgupta251004/cohort_2_express:v2

# --- Rollout ---
kubectl rollout status deployment/express-deployment       # Check rollout status
kubectl rollout undo deployment/express-deployment         # Roll back to previous version

# --- Shell into a pod ---
kubectl exec -it <pod-name> -- sh
```

---

## 📊 Architecture Diagram

```
                        ┌─────────────────────────────────────────┐
                        │           Kubernetes Cluster             │
                        │                                          │
  External Traffic      │  ┌─────────────────────────────────┐    │
  ──────────────────►   │  │    NGINX Ingress Controller      │    │
  (HTTP port 80)        │  │    (express-app ingress)         │    │
                        │  │    path: / → main-server-service │    │
                        │  └──────────────┬──────────────────┘    │
                        │                 │                         │
                        │  ┌──────────────▼──────────────────┐    │
                        │  │    Service: main-server-service  │    │
                        │  │    (ClusterIP, port 80 → 3000)  │    │
                        │  └──────┬──────────┬───────┬───────┘    │
                        │         │          │       │              │
                        │  ┌──────▼──┐ ┌────▼──┐ ┌─▼──────┐      │
                        │  │  Pod 1  │ │ Pod 2 │ │ Pod 3  │      │
                        │  │ :3000   │ │ :3000 │ │ :3000  │      │
                        │  └─────────┘ └───────┘ └────────┘      │
                        │         express-deployment               │
                        └─────────────────────────────────────────┘
```

---

## 📌 Resource Limits Explained

```
CPU Unit Conversion:
  1 core  = 1000m (millicores)
  0.5 core = 500m
  0.25 core = 250m

Memory Unit Conversion:
  1 Mi  = 1 Mebibyte ≈ 1.05 MB
  128Mi = ~134 MB
  64Mi  = ~67 MB

In deployment.yml:
  limits   → Maximum resources a pod can use (hard cap)
  requests → Resources reserved/guaranteed for the pod
```

---

## 📈 Metrics Server — Monitor CPU & RAM

Kubernetes does **not** include resource monitoring out of the box. The **Metrics Server** is a cluster-wide aggregator of resource usage data — it powers `kubectl top` commands and is **required** for HPA to work.

### Step 1 — Install Metrics Server

```bash
# Official manifest with kubelet insecure TLS patch (recommended for Docker Desktop)
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
```

### Step 2 — Patch for Docker Desktop (Self-Signed Cert Fix)

Docker Desktop uses a self-signed TLS certificate for its kubelet. Without this patch, the Metrics Server will fail to connect.

```bash
kubectl patch deployment metrics-server -n kube-system \
  --type=json \
  -p='[{"op":"add","path":"/spec/template/spec/containers/0/args/-","value":"--kubelet-insecure-tls"}]'
```

### Step 3 — Wait for Metrics Server to be Ready

```bash
# Wait for rollout (~30 seconds)
kubectl rollout status deployment/metrics-server -n kube-system
```

### Step 4 — Verify It Works

```bash
# You should see CPU and Memory columns for each node
kubectl top nodes

# You should see CPU and Memory columns for each pod
kubectl top pods
```

Expected output:
```
NAME       CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%
node-1     142m         7%     1024Mi          53%

NAME                                      CPU(cores)   MEMORY(bytes)
express-deployment-abc-xyz                320m         48Mi
```

---

## 🔍 Monitoring Tools

### Watch CLI — Live Resource Monitoring

`watch` re-runs a command at a fixed interval, giving you a **live auto-refreshing terminal dashboard**.

```bash
# Refresh kubectl top nodes every 2 seconds
watch -n 2 kubectl top nodes

# Refresh kubectl top pods every 2 seconds
watch -n 2 kubectl top pods

# Watch HPA scaling decisions live
watch -n 2 kubectl get hpa
```

| Flag | Meaning |
|------|---------|
| `-n 2` | Refresh interval in seconds (every 2s) |

> **Tip (Windows):** `watch` is not natively available on Windows. Install it via [Git Bash](https://git-scm.com/), WSL, or use `kubectl get pods -w` as an alternative.

---

### Hey CLI — HTTP Load Testing

`hey` is a lightweight HTTP load generator used to **simulate real traffic** on your server to trigger autoscaling and observe CPU/RAM behavior.

```bash
# Send load for 2 minutes with 200 concurrent workers
hey -z 2m -c 200 http://localhost
```

| Flag | Meaning |
|------|---------|
| `-z 2m` | Duration — run for 2 minutes |
| `-c 200` | Concurrency — 200 simultaneous connections |

**Install Hey:**
```bash
# macOS
brew install hey

# Windows (via Go)
go install github.com/rakyll/hey@latest

# Or download binary from:
# https://github.com/rakyll/hey/releases
```

**Typical Testing Workflow:**
```bash
# Terminal 1 — Watch CPU usage live
watch -n 2 kubectl top pods

# Terminal 2 — Watch HPA scaling live
watch -n 2 kubectl get hpa

# Terminal 3 — Fire load at the server
hey -z 2m -c 200 http://localhost
```

---

## ⚡ HPA — Horizontal Pod Autoscaler

By default, Kubernetes does **not** auto-scale pods. The **Horizontal Pod Autoscaler (HPA)** watches CPU (or memory) usage and automatically **scales pods up or down** based on a target threshold.

> ⚠️ **Prerequisite:** Metrics Server must be installed and working (`kubectl top pods` must return data) before HPA can function.

### Enable HPA

```bash
kubectl autoscale deployment express-deployment \
  --min=1 \
  --max=5 \
  --cpu-percent=50
```

| Flag | Meaning |
|------|---------|
| `--min=1` | Minimum number of pods (won't scale below 1) |
| `--max=5` | Maximum number of pods (won't scale above 5) |
| `--cpu-percent=50` | Target average CPU utilization across pods (50%) |

### How HPA Works

```
CPU Usage > 50%  →  HPA adds more pods  (scale UP)
CPU Usage < 50%  →  HPA removes pods    (scale DOWN)
```

### Monitor the HPA

```bash
# Check current HPA status
kubectl get hpa

# Watch HPA decisions in real time
watch -n 2 kubectl get hpa

# Detailed HPA info (shows events & scaling history)
kubectl describe hpa express-deployment
```

Expected `kubectl get hpa` output:
```
NAME                  REFERENCE                      TARGETS   MINPODS   MAXPODS   REPLICAS
express-deployment    Deployment/express-deployment   72%/50%   1         5         3
```

### Remove HPA

```bash
kubectl delete hpa express-deployment
```

### HPA vs Manual Scaling Comparison

| Feature              | Manual `kubectl scale` | HPA |
|----------------------|------------------------|-----|
| Triggered by         | You manually           | CPU/Memory metrics |
| Reacts to load       | ❌ No                  | ✅ Yes |
| Scales down          | ❌ Manual              | ✅ Automatic |
| Requires Metrics Server | ❌ No              | ✅ Yes |

---

## 🧩 Microservices with Kubernetes

Kubernetes is purpose-built for **microservices architecture**. Instead of one monolithic app, you split functionality into small, independently deployable services — each running in its own pods, with its own Deployment, Service, and scaling rules.

### Example: E-Commerce Microservices

```
┌─────────────────────────────────────────────────────────┐
│                   Kubernetes Cluster                     │
│                                                          │
│  ┌─────────────┐  ┌──────────────┐  ┌───────────────┐  │
│  │ auth-server │  │product-server│  │  order-server │  │
│  │  (pods: 2)  │  │  (pods: 3)   │  │  (pods: 2)    │  │
│  └─────────────┘  └──────────────┘  └───────────────┘  │
│                                                          │
│  ┌──────────────┐  ┌─────────────┐                      │
│  │payment-server│  │  user-server│                      │
│  │  (pods: 2)   │  │  (pods: 1)  │                      │
│  └──────────────┘  └─────────────┘                      │
│                                                          │
│         Each service has its own:                        │
│         ✅ Deployment   ✅ Service   ✅ HPA              │
└─────────────────────────────────────────────────────────┘
```

### Microservice Breakdown

| Service | Responsibility | Port |
|---------|---------------|------|
| **auth-server** | Login, JWT token generation & validation | 3001 |
| **product-server** | Product catalog, search, inventory | 3002 |
| **order-server** | Order creation, order history | 3003 |
| **payment-server** | Payment processing, refunds | 3004 |
| **user-server** | User profile, preferences | 3005 |

### Each Microservice Gets Its Own K8s Files

```
K8s/
├── auth/
│   ├── deployment.yml
│   ├── service.yml
│   └── hpa.yml
├── product/
│   ├── deployment.yml
│   ├── service.yml
│   └── hpa.yml
├── order/
│   ├── deployment.yml
│   └── service.yml
├── payment/
│   ├── deployment.yml
│   └── service.yml
├── user/
│   ├── deployment.yml
│   └── service.yml
└── ingress.yml             # Single ingress routes to all services
```

### Ingress Routing for Microservices

A single **Ingress** can route different URL paths to different services:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: microservices-ingress
spec:
  ingressClassName: nginx
  rules:
    - http:
        paths:
          - path: /auth
            pathType: Prefix
            backend:
              service:
                name: auth-service
                port:
                  number: 80
          - path: /products
            pathType: Prefix
            backend:
              service:
                name: product-service
                port:
                  number: 80
          - path: /orders
            pathType: Prefix
            backend:
              service:
                name: order-service
                port:
                  number: 80
          - path: /payments
            pathType: Prefix
            backend:
              service:
                name: payment-service
                port:
                  number: 80
          - path: /users
            pathType: Prefix
            backend:
              service:
                name: user-service
                port:
                  number: 80
```

### Benefits of Microservices on Kubernetes

| Benefit | Description |
|---------|-------------|
| **Independent Scaling** | Scale only the `product-server` during a sale, not auth or user |
| **Isolated Failures** | A crash in `payment-server` doesn't bring down `auth-server` |
| **Independent Deploys** | Deploy a new version of `order-server` without touching others |
| **Technology Flexibility** | Each service can use a different language or framework |
| **Resource Efficiency** | Assign different CPU/RAM limits per service based on its load |

---

## 🛠️ Troubleshooting

| Issue | Command | Fix |
|-------|---------|-----|
| Pod stuck in `Pending` | `kubectl describe pod <name>` | Check resource limits vs node capacity |
| Pod in `CrashLoopBackOff` | `kubectl logs <name>` | Check application logs for errors |
| Ingress not routing | `kubectl get ingress` | Ensure NGINX controller is installed and running |
| Image pull error | `kubectl describe pod <name>` | Verify image name on Docker Hub; check `imagePullPolicy` |
| Service not found | `kubectl get svc` | Ensure service name in ingress matches service.yml |

---

## 🔗 References

- [Kubernetes Official Docs](https://kubernetes.io/docs/)
- [NGINX Ingress Controller](https://kubernetes.github.io/ingress-nginx/)
- [Metrics Server — GitHub](https://github.com/kubernetes-sigs/metrics-server)
- [HPA — Kubernetes Docs](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/)
- [Hey CLI — HTTP Load Testing](https://github.com/rakyll/hey)
- [Docker Hub — piyushgupta251004](https://hub.docker.com/u/piyushgupta251004)
- [Express.js v5 Docs](https://expressjs.com/)
- [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)
