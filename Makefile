install:
	npm install

lint:
	npx htmlhint ./app/*.html
	npx stylelint ./app/scss/**/*.scss

sass:
	npx sass ./app/scss/app.scss ./src/css/style.css --watch

deploy:
	npx surge ./app/
