# useless-rng-api

Simple random number generator API built with **Next.js**.

Useful for **n8n**, **Make**, scripts, or any workflow where you just need a quick random number between a minimum and maximum value.

A hosted version is available:

**https://useless-rng-api.vercel.app**

---

## Features

- Simple HTTP API
- Returns a random number between `min` and `max`
- Built with **Next.js**
- Easy to deploy on **Vercel** or any platform that supports Next.js
- Useful for automation tools like **n8n** and **Make**
- Lightweight and stateless

---

## API Endpoint

```

GET /api/rng

```

### Query Parameters

| Parameter | Required | Description |
|----------|----------|-------------|
| `min` | yes | Minimum number |
| `max` | yes | Maximum number |

---

## Example Request

```

[https://useless-rng-api.vercel.app/api/rng?min=1&max=100](https://useless-rng-api.vercel.app/api/rng?min=1&max=100)

````

### Example Response

```json
{
  "min": 1,
  "max": 100,
  "number": 42
}
````

---

## Usage in n8n / Make

Use a standard **HTTP request** node.

Example configuration:

**Method**

```
GET
```

**URL**

```
https://useless-rng-api.vercel.app/api/rng?min=1&max=10
```

The response will contain the generated number which can be used in your workflow logic.

---

## Local Development

Clone the repository:

```bash
git clone https://github.com/your-username/useless-rng-api.git
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The API will be available at:

```
http://localhost:3000/api/rng?min=1&max=10
```

---

## Deploy

### Deploy to Vercel

The easiest way:

1. Fork or clone the repository
2. Import the project in **Vercel**
3. Deploy

Vercel automatically detects **Next.js** projects.

---

### Deploy Anywhere

Since the project uses **Next.js**, it can be deployed to:

* Vercel
* Railway
* Render
* Docker environments
* Any Node.js server supporting Next.js

Build the project:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## Project Structure

```
/pages
  /api
    rng.ts
  index.tsx
```

* `/api/rng` → Random number API endpoint
* `/` → Simple project page with usage instructions and SEO metadata

---

## License

MIT
