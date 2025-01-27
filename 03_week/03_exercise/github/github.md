# Create a GitHub Repository and push your JS task solutions

1. **Clean Up Your Local Folder:**
   - Make sure your local folder contains only your JavaScript task files.
   - Remove any unnecessary files or folders.

2. **Initialize Git in the Local Folder:**
   - Open your terminal or command prompt.
   - Navigate to the folder containing your JavaScript task files.
  
     ```bash
     cd path/to/your/local/folder
     ```
   - Initialize Git in the folder:
  
     ```bash
     git init
     ```

3. **Add a `.gitignore` File (Optional but recommended):**
   - Create a file named `.gitignore` in your folder.
   - Add the following to exclude unnecessary files (e.g., temporary or system files):

        ```bash
        # Node.js dependencies
        node_modules/

        # Logs
        *.log

        # macOS system files
        .DS_Store

        # Visual Studio Code settings
        .vscode/
        ```

4. **Stage and Commit Your Files:**
   - Add all your files to the staging area:
  
     ```bash
     git add .
     ```
   - Commit your changes with a meaningful message:
  
     ```bash
     git commit -m "Initial commit with JavaScript task solutions"
     ```

5. **Create a Repository on GitHub:**
   - Go to [GitHub](https://github.com/) and log in.
   - Click the green **"New"** button or **"Create a Repository"** option.
   - Fill in the details:
     - **Repository Name:** `javascript-tasks`
     - **Description:** `A collection of solutions for JavaScript tasks.`
     - Choose **Public** or **Private** as preferred.
   - **Do NOT initialize the repository with a README, .gitignore, or license** (your local folder already contains files).

6. **Add the Remote Repository to Your Local Folder:**
   - Copy the **HTTPS URL** of your new GitHub repository.
   - Add it as the remote origin for your local Git repository:
  
     ```bash
     git remote add origin <repository_url>
     ```
     Replace `<repository_url>` with your repository’s HTTPS URL.

7. **Push Your Files to GitHub:**
   - Push your files to the `main` branch of your remote repository:

     ```bash
     git branch -M main
     git push -u origin main
     ```

8. **Verify on GitHub:**
   - Go to your GitHub repository in your browser.
   - Refresh the page to confirm that your files have been successfully uploaded.

9. **Share Your Repository:**
   - Share the link to your repository with your teacher.
   - Example: `https://github.com/yourusername/javascript-tasks`

## Add README

Inside your local repository folder, create a file named README.md.

- Use checkboxes for task lists or progress tracking.
- Make sure to update the README.md file as you complete tasks.
- Commit and push changes to GitHub each time you update your README.md.

## Completed Tasks
- **week_01**
    - [x] data_types
    - [x] operators
    - [x] variables
- **week_02:**
    - [x] basic_functions
    - [ ] numbers
    - [ ] strings
    - [ ] conditions
- **week_03:**
    - [x] github
    - [ ] loops
    - [ ] 8_ball
