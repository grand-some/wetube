import app from './app'
const PORT=8800;

const handleListening=()=>{console.log(`Listening on : http:localhost:${PORT}`)};

app.listen(PORT, handleListening);