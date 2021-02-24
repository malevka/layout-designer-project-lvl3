install:
	npm install

lint:
	npx htmlhint build/*.html
	npx stylelint ./app/scss/**/*.scss

deploy:
	npx surge build

dev:
	gulp build watch