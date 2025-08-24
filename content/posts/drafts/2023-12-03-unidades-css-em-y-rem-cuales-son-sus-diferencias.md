---
title: "Unidades CSS: EM y REM, cuales son sus diferencias"
description: ""
date: 2019-12-31T14:23:51.202Z
preview: ""
draft: true
tags:
  - CSS
  - EM
  - REM
categories:
  - Frontend
excerpt: La diferencia básica entre los dos es muy sencilla, lo complicado es escoger bien cuándo utilizar cada una.
---

No estaba pensando en escribir sobre esto, pero mientras planteaba el contenido del próximo articulo y repasaba algunos temas he visto que no siempre se utilizan bien estas unidades de medida, yo tampoco. Así que me ha parecido buena idea darle un repaso rápido al tema.

En realidad, la diferencia básica entre los dos es muy sencilla, **lo complicado es escoger bien** cuándo utilizar cada una. Pero para explicarme mejor voy a hacer un micro repaso a las bases, un poco antes de llegar al punto que ocupa el articulo.

## Unidades absolutas y relativas

Cuando escribimos CSS **hay dos unidades para indicar tamaños, las absolutas y las relativas**. Si estás escribiendo para impresión pueden ser mejor idea las absolutas. Pero probablemente estés haciendo algo para una pantalla y casi con total seguridad no sabes ni su tamaño ni su densidad, lo más probable es que necesites usar las relativas.

- **Unidades absolutas**: `cm`, `mm`, `in`, `px`, `pt` y `pc`.
- **Unidades relativas**: `em`, `ex`, `ch`, `rem`, `vw`, `vh`, `vmin`, `vmax` y `%`.

## Diferencias entre `em` y `rem`

No quiero atascarme ahí, en este artículo me centro en dos de las relativas, `em` y `rem`. El resto creo que son más sencillas de entender y para más información podéis consultar (CSS Units en w3schools)[https://www.w3schools.com/cssref/css_units.asp].

Las relativas lo son siempre a algo. `vw` y `vh` al ancho y alto del _viewport_ respectivamente, `%` al padre, etc. En el caso de `em` y `rem`, lo son las dos al tamaño de fuente. La diferencia reside en cual es el elemento que se toma como referencia.

- `rem` hace referencia al tamaño de fuente del elemento raíz (`html`).
- `em` hace referencia al tamaño de fuente del elemento actual.

## Ejemplo

<iframe height="400" style="width: 100%;" scrolling="no" title="EM and REM test" src="https://codepen.io/emmgfx/embed/wvBrKEm?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/emmgfx/pen/wvBrKEm">
  EM and REM test</a> by Josep Viciana (<a href="https://codepen.io/emmgfx">@emmgfx</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

¿Qué está pasando en el ejemplo? Para empezar, hay un slider que permite cambiar el tamaño de fuente del elemento html. Es decir, que ese cambio se aplica a rem. Al ajustar el tamaño sucede que:

1. Por defecto el elemento `h2` tiene estos valores un tamaño de fuente `1.5em` y unos márgenes de `0.83em`. Además está heredando tamaños de html, así que su comportamiento es que, sea el que sea, su tamaño de fuente es el 150% y sus márgenes un 83% respecto al tamaño de fuente especificado en html.
2. En los **elementos Regular**, tanto `em` como rem, se mantienen las proporciones dado que uno está haciendo referencia a sí mismo y otro a html, y al no tener el tamaño de fuente modificado, tienen el valor indicado por el slider como referencia.
3. Sin embargo, en los **elementos Increased**, uno sigue haciendo referencia a `hmtl` y otro a sí mismo, con lo cual:
   - El elemento que modifica con `rem` **pierde sus propias proporciones**, dado que el texto sí se modifica pero mantiene el mismo `padding` que los que no se han modificado.
   - El elemento que modifica con `em` **no pierde sus propias proporciones**, dado que modifica el texto y después el `padding` en relación al tamaño del texto.

## Cuando usar cada unidad

Hasta aquí puede resultar confuso, pero no complicado. Lo complicado de verdad es escoger en cada caso la unidad correcta. Creo que se puede resumir en unos cuantos puntos:

- Hay que tener en cuenta que si nos equivocamos de unidad, probablemente no será grave. No se verá mal porque ajustaremos el valor a lo que necesitamos. El problema será de comportamiento (zoom) mas que de visualización.
- Si por ejemplo estamos definiendo el `border-radius` o`padding`de un botón, probablemente vamos a querer que sea en referencia al tamaño del botón, no del resto de la página. Usaríamos `em`.
- Si estamos definiendo elementos `h1`, `h2`, `h3`, `p`, etc. Seguramente prefieras usar unidades que hagan referencia al tamaño general de la página. Usaríamos `rem``.

Creo que con esto queda bastante claro, pero estaría bien terminar con un enlace a un artículo de Envato con muchísima información sobre el tema, casi excesivo. Está disponible [en inglés](https://webdesign.tutsplus.com/tutorials/comprehensive-guide-when-to-use-em-vs-rem--cms-23984?ec_unit=translation-info-language) y [en castellano](https://webdesign.tutsplus.com/es/tutorials/comprehensive-guide-when-to-use-em-vs-rem--cms-23984).
