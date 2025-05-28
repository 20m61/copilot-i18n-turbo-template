# 🚀 SETUP.md

## 開発環境セットアップ手順

1. **リポジトリをクローン**

   ```bash
   git clone <YOUR_REPO_URL>
   cd copilot-i18n-turbo-template
   ```

2. **ルート依存関係のインストール**

   ```bash
   npm install
   ```

3. **Web アプリ依存関係のインストール**

   ```bash
   cd apps/web
   npm install
   ```

4. **開発サーバー起動**

   ```bash
   npm run dev
   ```

   - `http://localhost:3000/en` または `/ja` でアクセス

5. **ユニットテスト実行**

   ```bash
   npm test
   ```

6. **E2E テスト実行**
   ```bash
   npx playwright install
   npx playwright test
   ```

---

## よくある質問

- **Q: 新しい翻訳キーを追加したい**

  - `apps/web/locales/en.json` と `ja.json` の両方に同じキーを追加してください。

- **Q: Copilot Agent の指示をカスタマイズしたい**
  - `.github/copilot-instructions.md` を編集してください。

---

## 参考

- [Copilot Agent 公式ドキュメント](https://docs.github.com/en/copilot/using-github-copilot/coding-agent)
- [Next.js App Router](https://nextjs.org/docs/app)
- [next-intl](https://next-intl-docs.vercel.app/)
- [Turborepo](https://turbo.build/)
