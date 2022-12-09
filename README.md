## Project installation process:
1. Clone the repo
2. Run the following commands in terminal from project root directory
   - 'composer install'
   - 'cp .env.example .env'
   - 'php artisan key:generate'
   - 'npm install && npm run dev'
3. Create a database & Update database info in .env file
4. Run 'php artisan migrate --seed' in terminal from project root directory
5. Run 'php artisan serve' in terminal from project root directory

### All set! You are ready to go, project is running at http://localhost:8000