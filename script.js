body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: url("https://images.unsplash.com/photo-1501004318641-b39e6451bec6") no-repeat center center/cover;
}

header {
  background: rgba(46,125,50,0.9);
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card {
  background: rgba(255,255,255,0.95);
  max-width: 420px;
  margin: 30px auto;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
  text-align: center;
}

input, button, select {
  width: 100%;
  margin-top: 10px;
  padding: 10px;
}

button {
  background: #388e3c;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
}

button:hover {
  background: #1b5e20;
}

#preview {
  width: 100%;
  display: none;
  margin-top: 10px;
  border-radius: 10px;
}

.result, .treatment {
  background: #f1f8e9;
  margin-top: 15px;
  padding: 10px;
  border-radius: 8px;
}

footer {
  text-align: center;
  color: white;
  padding: 10px;
  background: rgba(46,125,50,0.9);
}

/* Mobile Friendly */
@media (max-width: 600px) {
  .card {
    margin: 15px;
  }
}
