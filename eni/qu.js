const url = 'https://www.example.com scheme = 'https://www.example.com authority;

// Extract the first host segment after the scheme
const firstHostSegment = url.split('/')[2]; // 'www.example.com:8080'

if (firstHostSegment) {
  authority = firstHostSegment.slice(scheme.length - 3); // 'www.example.com:8080'
} else {
  authority = '';
}

console.log(authority); // Output: 'www.example.com:8080'
