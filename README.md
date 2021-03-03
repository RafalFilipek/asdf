# Wymagania

Wystarczy zainstalować w systemie **[volta.sh](https://volta.sh)** i zapomnieć o zależnościach zewnętrznych. Lista wszystkich elementów wymaganych do uruchomienia monorepo znajduje się w pliku `./package.json` wewnątrz klucza `volta`.

# Uruchomienie

Po sklonowaniu repozytorium oraz opcjonalnym, ręcznym zainstalowaniu zależności globalnych należy zainstalować wszystkie zależności pakietów. W tym celu wystarczy wykonać komendę `rush update`.

Koniec.

# Katalogi

- `common` - elementy konfiguracyjne **[rushjs](http://rushjs.io)**
- `app` - aplikacje
- `libs` - biblioteki

## Katalog `apps`

Katalog `apps` przechowuje wszystkie aplikacje. Struktura tego katalug jest zawsze płaska. Aplkacje powinny być prefixowane przy użyciu _identyfikatora przestrzeni aplikacji_(scope), np. `opl-portal`.

## Katalog `libs`

Katalog `libs` przechowuje wszystkie biblioteki pogrupowane w katalogi których nazwy to _identyfikatora przestrzeni aplikacji_ (scope), np. `nju/api-auth`. Wewnątrz katalogu biblioteki powinny być pefixowane typem biblioteki np. `api`, `utils`, `data`.

---

# Rules of OMNI 🤴🏻

1. Biblioteki nigdy nie mogą importować aplikacji
2. Aplikacje nigdy nie mogą importować bibliotek
3. Biblioteki ze scope innym niż `shared` mogą importować jedynie biblioteki o takim samym scope oraz `shared`
4. Biblioteki ze scope `shared` mogą importować jedynie biblioteki z tego `scope`.
5. Każda aplikacj oraz biblioteka musi jawnie określać 100% swoich zależności
6. Każda aplikacja i biblioteka musi _działać_ w każdym momencie życia repozytorium
7. **〝Everything is WIP〞** — _Rafał_

# Przydatne komendy

Istalacja wszystkich zależności

```
rush update
```

Włącz tryb dev dla wszystkich zależności aplikacji o nazwie `app-name`

```
rush -T app-name dev
```

Zbuduj aplikację `app-name` (uprzednio budując wszystkie jej zależności)

```
rush build -t app-name
```

rus

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
