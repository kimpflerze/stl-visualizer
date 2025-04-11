@echo off

:: Step 1: Install Python dependencies if not already installed
echo Installing Python dependencies...
pip install -r requirements.txt

:: Step 2: Run the Python script
echo Running gather-resources.py...
python gather-resources.py

:: Step 3: Navigate to the Angular project directory (replace with your actual directory)
cd stl-collection-viewer

:: Step 4: Install Angular dependencies if not already installed
IF NOT EXIST "node_modules" (
    echo Installing Angular dependencies...
    npm install
)

:: Step 5: Serve the Angular app
echo Starting Angular development server...
nvm use 18
ng serve --open
