# 🤝 Contributing Guide

Thank you for considering contributing to this project!

## Workflow

1. Fork this repository  
2. Create your feature branch: `git checkout -b feature/your-feature-name`  
3. Commit your changes: `git commit -m '[Feature] Add awesome thing'`  
4. Push to the branch: `git push origin feature/your-feature-name`  
5. Create a Pull Request

## Requirements

- Pass all lint and test checks  
- Write clear and concise commit messages  
- For UI changes, add or update E2E and unit tests  
- If you update any translations, reflect those in all `locales/*.json` files

## Translation Notes

- All user-facing strings must go through `useTranslations()` from `next-intl`  
- Do not hardcode strings in JSX  
- If adding a new string, add keys to `locales/en.json` and `ja.json`

Happy coding!
