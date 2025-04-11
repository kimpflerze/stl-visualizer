#!/bin/bash

# Step 1: Navigate to the Angular project directory (replace with your actual directory)
echo "About to step into web app directory"
cd stl-collection-viewer || exit

# Step 2: Install Angular dependencies if not already installed
if [ ! -d "node_modules" ]; then
  echo "Installing Angular dependencies..."
  npm install
fi

# Step 3: Serve the Angular app
echo "Starting Angular development server..."
nvm use 18
ng serve --open
