# Init

```
yarn global add pnpm @microsoft/rush

git clone git@github.com:RafalFilipek/asdf.git

cd asdf

rush update

pnpm -r dev --filter pkg-* --filter @hq/*

cd packages/app

pnpm run dev
```

1. ✅ build app
2. ✅ build lib
3. ✅ HMR lib -> app
4. ✅ multiple entrypoints in lib
5. ✅ HMR in lib -> lib -> app
