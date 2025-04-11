# Project Setup and Execution Guide

This project involves running a Python script (`gather-resources.py`) followed by launching an Angular 17 web application. To automate this process, we provide two scripts for macOS/Linux (`run.sh`, `first-run.sh`) and Windows (`run.bat`, `first-run.bat`). 

- **`first-run.sh`** or **`first-run.bat`**: Used for the first-time setup, which installs the required Python dependencies and prepares the environment.
- **`run.sh`** or **`run.bat`**: Used for normal execution after the initial setup.

## Prerequisites

Before running the scripts, ensure the following dependencies are installed:

### 1. Python 3.x
   - Install Python 3 from [python.org](https://www.python.org/).
   - Verify Python is installed by running:
     ```bash
     python3 --version
     ```

### 2. Node.js and npm
   - Install Node.js and npm from [nodejs.org](https://nodejs.org/).
   - Verify installation by running:
     ```bash
     node -v
     npm -v
     ```

### 3. Angular CLI
   - Install Angular CLI globally:
     ```bash
     npm install -g @angular/cli
     ```

### 4. Python Dependencies
   - The Python script `gather-resources.py` requires certain Python packages. These are listed in the `requirements.txt` file.
   - The first time you run the project, the `first-run.sh` (or `first-run.bat` for Windows) script will automatically install these dependencies.

---

## How to Execute the Scripts

### 1. **For macOS and Linux Users**:

#### Step 1: Execute the `first-run.sh` script for the initial setup
   - The `first-run.sh` script will install the Python dependencies from `requirements.txt`, Angular dependencies, and set up the environment.
   - Run the following command to start the initial setup:
     ```bash
     ./first-run.sh
     ```

   After executing `first-run.sh`, you can run the project normally with `run.sh` from now on.

#### Step 2: Make the `run.sh` script executable
   - First, ensure the `run.sh` script is executable by running the following command:
     ```bash
     chmod +x run.sh
     ```

#### Step 3: Execute the `run.sh` script for subsequent runs
   - Once the initial setup is done, you can run the project with the `run.sh` script:
     ```bash
     ./run.sh
     ```

#### What `first-run.sh` does:
   1. Installs Python dependencies listed in `requirements.txt`.
   2. Installs Angular dependencies if they're not already installed.
   3. Runs the Python script `gather-resources.py`.
   4. Starts the Angular development server and opens it in the default browser at `http://localhost:4200`.

#### What `run.sh` does:
   1. Executes the Python script `gather-resources.py`.
   2. Installs Angular dependencies (if not already installed).
   3. Starts the Angular development server and opens it in the default browser at `http://localhost:4200`.

---

### 2. **For Windows Users**:

#### Step 1: Execute the `first-run.bat` script for the initial setup
   - The `first-run.bat` script will install the Python dependencies from `requirements.txt`, Angular dependencies, and set up the environment.
   - Run the following command to start the initial setup:
     ```batch
     first-run.bat
     ```

   After executing `first-run.bat`, you can run the project normally with `run.bat` from now on.

#### Step 2: Execute the `run.bat` script for subsequent runs
   - Once the initial setup is done, you can run the project with the `run.bat` script:
     ```batch
     run.bat
     ```

#### What `first-run.bat` does:
   1. Installs Python dependencies listed in `requirements.txt`.
   2. Installs Angular dependencies if they're not already installed.
   3. Runs the Python script `gather-resources.py`.
   4. Starts the Angular development server and opens it in the default browser at `http://localhost:4200`.

#### What `run.bat` does:
   1. Executes the Python script `gather-resources.py`.
   2. Installs Angular dependencies (if not already installed).
   3. Starts the Angular development server and opens it in the default browser at `http://localhost:4200`.

---

## Troubleshooting
- If you encounter an error while running the script, ensure that the required dependencies are properly installed.
- Ensure that Python, Node.js, npm, and Angular CLI are correctly installed by running the respective version check commands.
- Make sure that the path to your Angular project and `gather-resources.py` script are correct in the respective shell script (`run.sh` or `run.bat`).
- If you're having trouble executing the `.sh` files (e.g., `first-run.sh` or `run.sh`), it might be due to insufficient file permissions. To grant execute permissions, run the following command:
   ```bash
   chmod +x first-run.sh
   chmod +x run.sh
