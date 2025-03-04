# OpenAI Story and Image Generator
- Laravel 12
- Inertia With ReactJS
- OpenAI API
- OpenAI DALL E

## Requirements

-   PHP 8.2 or higher
-   Laravel 12.x
-   Composer
-   MySQL/PostgreSQL
-   API keys for OpenAI

## Installation

1. Clone the repository:

```bash
git clone https://github.com/mhdprojects/openai-story-and-image-generator.git
cd openai-story-and-image-generator
```

2. Install dependencies PHP:

```bash
composer install
```

3. Install dependencies NodeJS:

```bash
npm install
```
4. Copy environment file and configure:

```bash
cp .env.example .env
```

5. Set up your database and OpenAI API keys in `.env`:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=openai_story_image_db
DB_USERNAME=root
DB_PASSWORD=

OPENAI_API_KEY=your_openai_key
OPENAI_ORGANIZATION=your_organization_id
```

6. Generate application key:

```bash
php artisan key:generate
```

7. Run migrations:

```bash
php artisan migrate
php artisan db:seed
```

8. Start the development server:

```bash
php artisan serve
```
```bash
npm run dev
```
