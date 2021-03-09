# Eseuri frontend starter

Acest proiect utilizează `pnpm`.

Instalează dependențele:

```sh
pnpm i
```

Rulează serverul de development:

```sh
pnpm run dev
```

Compilează fișierele pentru producție:

```sh
pnpm run build
```

Servește fișierele de producție:

```sh
pnpm run serve-vite
```

Formatează codul:

```sh
pnpm run format
```

Testează codul:

```sh
pnpm t
```

## Probleme

### Variante Tailwind

Configurarea funcționează foarte bine, nu există probleme la încărcarea conținutului, reîncărcarea paginii sau la build în general.

Există totuși o particularitate la procesarea CSS: variantele Tailwind
(`hover:`, `focus:` etc.) se pot folosi numai în clase. În combinație cu
directiva `@apply` build-ul va eșua. De exemplu, următorul cod nu va
fi compilat cu succes:

```css
.elem {
  @apply bg-white border rounded;
  @apply hover:bg-red;
}
```

Pentru a obține același efect, folosiți pseudo-selectorii clasici CSS:

```css
.elem {
  @apply bg-white border rounded;
}

.elem:hover {
  @apply bg-red;
}
```

sau direct în markup:

```html
<div class="elem bg-white border rounded hover:bg-red" />
```

### Testare cod

La momentul actual, configurarea Jest eșuează în a rula teste pe componentele Svelte. Fișierele `.js` sau `.ts` merg, în schimb.
