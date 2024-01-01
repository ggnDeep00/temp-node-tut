const http =require('http');

const server=http.createServer((req,res)=>{
    
    try { if (req.url === '/') {
        res.end('Welcome to our home page')
      } else if (req.url === '/about') {
        res.end('Here is our short history')
      } else {
        res.write(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)
      }
      res.end()
    } catch (error){
        console.log('Error',error.message)
        res.statusCode=500;
        res.end('Internal Server Error')
    }

    })

    server.on('error', (error) => {
        console.error('Server error:', error.message);
    });
    
    server.listen(5000, () => {
        console.log('Server is listening on port 5000');
    });