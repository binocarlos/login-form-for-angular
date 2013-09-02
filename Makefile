build: components
	@component convert template.html
	@component build --dev

templates:
	@component convert template.html

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

.PHONY: clean
