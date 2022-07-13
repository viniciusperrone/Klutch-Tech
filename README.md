
<h1 align="center">
  <img src="https://raw.githubusercontent.com/viniciusperrone/Klutch-Tech/2d413bc61c0425c1fede39a5683a559cbee48c12/frontend/src/assets/icons/logo.svg"/>
<h1>

# 🚀 Klutch-Tech

- Teste técnico para admissão.
- Construir fluxo de solicitação de [empréstimo](https://coggle.it/diagram/X_SVHsi-aSKloIM1/t/desafio-klutch-front-end/9423b0c199f9c5776418e088a35f8a8b925239e1c9ecd6830b3bbcdb4eb40c90)
- Construir interface com (Next.js)[https://xd.adobe.com/view/dbb459d7-d5e1-4d6f-8e1a-00d9a9fb6a32-8ee7/grid/]
- Construir API Restful com Django.

# Dependências Django

```
  asgiref==3.5.2
  autopep8==1.6.0
  dj-database-url==0.5.0
  Django==4.0.6
  django-cors-headers==3.13.0
  django-cors-middleware==1.5.0
  django-debug-toolbar==3.5.0
  django-heroku==0.3.1
  django-on-heroku==1.1.2
  djangorestframework==3.13.1
  gunicorn==20.1.0
  psycopg2==2.9.3
  psycopg2-binary==2.9.3
  pycodestyle==2.8.0
  pypiwin32==223
  pytz==2022.1
  pywin32==304
  sqlparse==0.4.2
  toml==0.10.2
  tzdata==2022.1
  whitenoise==6.2.0
```

# Dependências Next.js

```json
  {
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "axios": "^0.27.2",
    "classnames": "^2.3.1",
    "firebase": "^9.9.0",
    "next": "12.2.1",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-icons": "^4.4.0",
    "react-input-mask": "^2.0.4",
    "react-spinners": "^0.13.3",
    "remask": "^0.1.0-alpha.5",
    "vanilla-masker": "^1.2.0"
  },
  "devDependencies": {
    "@types/node": "^18.0.3",
    "@types/react": "^18.0.15",
    "@typescript-eslint/eslint-plugin": "^5.30.5",
    "@typescript-eslint/parser": "^5.30.5",
    "autoprefixer": "^10.4.7",
    "eslint": "^7.32.0 || ^8.2.0",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-config-next": "12.2.1",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-import": "^2.25.3",
    "eslint-plugin-jsx-a11y": "^6.5.1",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-react": "^7.28.0",
    "eslint-plugin-react-hooks": "^4.3.0",
    "postcss": "^8.4.14",
    "prettier": "^2.7.1",
    "tailwindcss": "^3.1.5",
    "typescript": "^4.7.4"
  }
}

```

# 📁 Setup do projeto

```bash

    # Clonar repositório
    $ git clone https://github.com/viniciusperrone/Klutch-Tech

    # Iniciando setup do backend
    $ cd backend

    # Criar ambiente virtual específico para esse projeto
    $ python -m venv venv 
    
    # Ativar a venv
    $ source ./venv/Scripts/activate

    # Instalar todas as dependências
    $ pip install -r requirements.txt

    # Criar um super user
    $ python manage.py createsuperuser

    # Rodar as migrations 
    $ python manage.py migrate

    # Rodar projeto
    $ python manage.py runserver
    
    # Iniciando setup do frontend
    $ cd frontend
    
    # Instalar todas as depedências
    $ yarn
    
    # Rodar aplicação
    
    $ yarn dev
```

# 🌐 Configurações

- Na raiz da pasta frontend, é necessário criar um arquivo .env.local semelhante ao .env.example

```
NEXT_API_URL="URL DE SUA API"

# Firebase Credentials

NEXT_FIREBASE_API_KEY=
NEXT_FIREBASE_DOMAIN=
NEXT_FIREBASE_PROJECT_ID=
NEXT_FIREBASE_STORAGE_BUCKET=
NEXT_FIREBASE_MESSAGING_SENDER_ID=
NEXT_FIREBASE_APP_ID=
NEXT_FIREBASE_MEASUREMENT_ID=
```

# 🚀 Technologies used

- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Next.js](https://https://nextjs.org/)
- [Django](https://www.djangoproject.com/)
- [Django Rest Framework](https://www.django-rest-framework.org/)
- [Firebase](https://firebase.google.com/)
