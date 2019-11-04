# Optimist Digital | ESLint rules

This is a set of rules for ESLint. Based originally on Airbnb's config, we made some rules less strict.
Specifically, the goal is to ensure that most stylistic errors (whitespace, etc) are warnings and not errors.
This means that we can show more invasive error modals for actual logic errors, but smaller stuff can be ignored
during some quick debugging because they only show up in the console.

## Usage


### With React

Add `"extends": "@optimistdigital/eslint-config-rules/react"` to your `.eslintrc` file.

(make sure you have the eslint-plugin-react plugin installed)

### Without React

Add `"extends": "@optimistdigital/eslint-config-rules"` to your `.eslintrc` file.
