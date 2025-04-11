@echo off

:: Step 1: Run the Python script
echo Running gather-resources.py...
python gather-resources.py

:: Step 2: Navigate to the Angular project directory (replace with your actual directory)
cd stl-collection-viewer

:: Step 3: Install Angular dependencies if not already installed
IF NOT EXIST "node_modules" (
    echo Installing Angular dependencies...
    npm install
)

:: Step 4: Serve the Angular app
echo Starting Angular development server...
nvm use 18
ng serve --open
