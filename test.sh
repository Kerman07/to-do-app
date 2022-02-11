#!/bin/bash
source venv/Scripts/activate && python manage.py testserver frontend/cypress/fixtures/example.json > /dev/null & pids=$!
npm start --prefix ./frontend & pids+=" $!"
cd frontend && npm run cypress run --spec cypress/integration/*.js

trap "kill $pids" SIGTERM SIGINT
wait $pids