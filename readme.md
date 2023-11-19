## http-minimal-fetch
An http fetcher with basic options to make it simpler

### Usage
This package is instanced using a singleton pattern, so you only need
to import it like this way:
```typescript
import HttpRequest from 'bm-minimal-fetch';
const http = HttpRequest.getInstance('http://your-desired-url-to-fetch');
```
Now if you need to do an HTTP GET request, just type:
```typescript
http.get('/your-endpoint');
```
Also, we would be able to send an HTTP POST request, just typing:
```typescript
http.post('/your-endpoint', {
  user: 'foo',
  lastname: 'bar'
})
```
