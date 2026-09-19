const http=require('http'),fs=require('fs'),path=require('path');
const root=process.cwd();
http.createServer((req,res)=>{ const route=decodeURIComponent(req.url.split('?')[0]); const file=path.resolve(root,'.'+(route==='/'?'/index.html':route)); if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end();} fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);return res.end();}res.setHeader('Content-Type',({'.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.json':'application/json; charset=utf-8','.webmanifest':'application/manifest+json; charset=utf-8','.svg':'image/svg+xml'}[path.extname(file)] || 'text/html; charset=utf-8'));res.end(data);});}).listen(5173,'127.0.0.1');

