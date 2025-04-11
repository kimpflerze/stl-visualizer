#!/bin/bash

# Step 1: Install Python dependencies if not already installed
echo "Installing Python dependencies..."
if ! python3 -m pip show -q -f -r requirements.txt; then
  python3 -m pip install -r requirements.txt
fi

# Step 2: Run the Python script
echo "Running gather-resources.py..."
python3 gather-resources.py

# Step 3: Navigate to the Angular project directory (replace with your actual directory)
cd /stl-collection-viewer || exit

# Step 4: Install Angular dependencies if not already installed
if [ ! -d "node_modules" ]; then
  echo "Installing Angular dependencies..."
  npm install
fi

# Step 5: Serve the Angular app
echo "Starting Angular development server..."
nvm use 18
ng serve --open
