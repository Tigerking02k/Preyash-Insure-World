# API Documentation

## Endpoints

### Visitor Counter

#### GET /api/visitor-count
Returns the current visitor count.

**Response**
```json
{
  "count": number
}
```

#### POST /api/visitor-count
Increments the visitor count and returns the new value.

**Response**
```json
{
  "count": number
}
```

### Error Responses
All endpoints can return these errors:

```json
{
  "error": "Error message description"
}
```

## Rate Limiting
- API calls are limited to 100 requests per 15 minutes per IP
- Visitor counter updates are limited to one per session
