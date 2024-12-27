const listaPreguntas = [
    {
        "Pregunta": "\\( \\mathbb{Q} \\) es infinito numerable.",
        "Respuesta": "Verdadero",
        "Tema": 1,
        "Explicación": "Cada fracción en \\( \\mathbb{Q} \\) puede representarse como un par ordenado de enteros \\( (a, b) \\), donde \\( b \\neq 0 \\). El conjunto de los números enteros \\( \\mathbb{Z} \\) es numerable, y el producto cartesiano de dos conjuntos numerables también es numerable. Por lo tanto, \\( \\mathbb{Q} \\) es un conjunto numerable."
    },
    {
        "Pregunta": "Sean \\( f : X \\to Y \\) una aplicación, y \\( A \\subseteq X \\). Entonces \\( A = f^{-1}(f(A)) \\).",
        "Respuesta": "Falso",
        "Tema": 1,
        "Explicación": "Por ejemplo, si \\( f \\) es constante y \\( A \\neq \\emptyset \\), entonces \\( f^{-1}(f(A)) = X \\). Esto sucede porque la imagen inversa de un conjunto bajo una función constante incluye todos los elementos del dominio \\( X \\). Por lo tanto, \\( A \\neq f^{-1}(f(A)) \\) en este caso."
    },
    {
        "Pregunta": "Sean \\( f : X \\to Y \\) una aplicación, y \\( B \\subseteq Y \\). Entonces \\( B = f(f^{-1}(B)) \\).",
        "Respuesta": "Falso",
        "Tema": 1,
        "Explicación": "La afirmación es falsa porque \\( f^{-1}(B) \\) podría ser el conjunto vacío si \\( B \\) no intersecta con la imagen de \\( f \\). En ese caso, \\( f(f^{-1}(B)) \\) sería el conjunto vacío, mientras que \\( B \\) no lo es necesariamente. Esto demuestra que \\( B \\neq f(f^{-1}(B)) \\) en general."
    },
    {
        "Pregunta": "\\( \\mathbb{R} \\) es infinito numerable.",
        "Respuesta": "Falso",
        "Tema": 1,
        "Explicación": "El conjunto \\( \\mathbb{R} \\) (los números reales) no es numerable. Esto se demuestra mediante el argumento diagonal de Cantor, que muestra que no existe una biyección entre \\( \\mathbb{R} \\) y \\( \\mathbb{N} \\). Por lo tanto, \\( \\mathbb{R} \\) tiene una cardinalidad mayor que la de los conjuntos numerables."
    },
    {
        "Pregunta": "Dados dos subconjuntos \\( A, B \\) de un conjunto \\( X \\). Se cumple que  \\[ X \\setminus (A \\cap B) = (X \\setminus A) \\cup (X \\setminus B). \\]",
        "Respuesta": "Verdadero",
        "Tema": 1,
        "Explicación": "Los elementos que no están en \\( A \\cap B \\) son aquellos que no pertenecen simultáneamente a \\( A \\) y \\( B \\). Esto equivale a los elementos que no están en \\( A \\) o no están en \\( B \\). Por las leyes de De Morgan, esta relación puede expresarse como: \\[ X \\setminus (A \\cap B) = (X \\setminus A) \\cup (X \\setminus B). \\].Por lo tanto, la afirmación es verdadera."
    },
    {
        "Pregunta": "Dados dos subconjuntos \\( A, B \\) de un conjunto \\( X \\). Se cumple que  \\[ X \\setminus (A \\cup B) = (X \\setminus A) \\cap (X \\setminus B). \\]",
        "Respuesta": "Verdadero",
        "Tema": 1,
        "Explicación": "Los elementos que no están en \\( A \\cup B \\) son aquellos que no pertenecen ni a \\( A \\) ni a \\( B \\). Esto equivale a los elementos que están fuera de \\( A \\) y también fuera de \\( B \\). Por las leyes de De Morgan, esta relación puede expresarse como: \\[ X \\setminus (A \\cup B) = (X \\setminus A) \\cap (X \\setminus B). \\] Por lo tanto, la afirmación es verdadera."
    },
    {
        "Pregunta": "Dados dos subconjuntos \\( A, B \\) de un conjunto \\( X \\). Se cumple que  \\[ X \\setminus (A \\cap B) = (X \\setminus A) \\cap (X \\setminus B). \\]",
        "Respuesta": "Falso",
        "Tema": 1,
        "Explicación": "La afirmación es falsa porque, según las leyes de De Morgan, la expresión correcta sería: \\[ X \\setminus (A \\cap B) = (X \\setminus A) \\cup (X \\setminus B). \\] La operación complementaria de la intersección no es la intersección de los complementos, sino la unión de los complementos. Por lo tanto, la igualdad presentada en la pregunta no es válida."
    },
    {
        "Pregunta": "Sean \\( X \\) e \\( Y \\) dos conjuntos, y sean \\( A \\) y \\( B \\) dos subconjuntos de \\( X \\) e \\( Y \\) respectivamente. Entonces \\[ X \\times Y \\setminus A \\times B = (X \\setminus A) \\times (Y \\setminus B). \\]",
        "Respuesta": "Falso",
        "Tema": 1,
        "Explicación": "La afirmación es falsa porque la diferencia cartesiana no se distribuye como el producto cartesiano de las diferencias. En realidad, si se eliminan los elementos de \\( A \\times B \\) del producto cartesiano \\( X \\times Y \\), se eliminan únicamente las parejas \\((a, b)\\) tales que \\( a \\in A \\) y \\( b \\in B \\). La igualdad presentada no representa correctamente este concepto."
    },
    {
        "Pregunta": "Sean \\( f : X \\to Y \\) una aplicación, y \\( B \\subseteq Y \\). Entonces \\( B \\subseteq f(f^{-1}(B)) \\).",
        "Respuesta": "Falso",
        "Tema": 1,
        "Explicación": "La afirmación es falsa porque \\( f(f^{-1}(B)) \\) puede contener elementos adicionales que no están en \\( B \\). En particular, \\( f(f^{-1}(B)) \\) incluye todos los elementos del codominio \\( Y \\) que están asociados a algún elemento de \\( f^{-1}(B) \\), lo que puede incluir elementos fuera de \\( B \\). Por lo tanto, no siempre se cumple que \\( B \\subseteq f(f^{-1}(B)) \\)."
    },
    {
        "Pregunta": "Sean \\( f : X \\to Y \\) una aplicación, y \\( A \\subseteq X \\). Entonces \\( f^{-1}(f(A)) \\subseteq A \\).",
        "Respuesta": "Falso",
        "Tema": 1,
        "Explicación": "La afirmación es falsa porque \\( f^{-1}(f(A)) \\) puede contener elementos que no están en \\( A \\). En particular, si \\( x \\notin A \\) pero \\( f(x) \\in f(A) \\), entonces \\( x \\in f^{-1}(f(A)) \\), aunque \\( x \\notin A \\). Esto ocurre porque \\( f^{-1}(f(A)) \\) incluye todos los elementos del dominio \\( X \\) que mapean a algún elemento en \\( f(A) \\), independientemente de si esos elementos estaban originalmente en \\( A \\)."
    },
    {
        "Pregunta": "Dados dos subconjuntos \\( A, B \\) de un conjunto \\( X \\). Se cumple que  \\[ X \\setminus (A \\cup B) = (X \\setminus A) \\cup (X \\setminus B). \\]",
        "Respuesta": "Falso",
        "Tema": 1,
        "Explicación": "La afirmación es falsa porque, según las leyes de De Morgan, la diferencia \\( X \\setminus (A \\cup B) \\) es igual a: \\[ X \\setminus (A \\cup B) = (X \\setminus A) \\cap (X \\setminus B). \\] El operador correcto para la expresión debería ser una intersección, no una unión. Como contraejemplo, si tomamos \\( X = \\{1, 2\\} \\), \\( A = \\{1\\} \\), \\( B = \\{2\\} \\), se puede verificar que: \\[ X \\setminus (A \\cup B) = \\emptyset, \\] mientras que: \\[ (X \\setminus A) \\cup (X \\setminus B) = X. \\] Por lo tanto, la igualdad presentada no es válida."
    },
    {
        "Pregunta": "Dados tres conjuntos \\( A, B, C \\). Se cumple que  \\[ A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C). \\]",
        "Respuesta": "Verdadero",
        "Tema": 1,
        "Explicación": "La afirmación es verdadera porque la intersección y la unión son distributivas entre sí. Específicamente, para cualquier conjunto \\( A \\), \\( B \\), y \\( C \\), se cumple la propiedad distributiva: \\[ A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C). \\] Esto puede demostrarse verificando que cada elemento de \\( A \\cap (B \\cup C) \\) pertenece a \\( (A \\cap B) \\cup (A \\cap C) \\) y viceversa."
    },
    {
        "Pregunta": "Dados tres conjuntos \\( A, B, C \\). Se cumple que  \\[ A \\cap (B \\cup C) = (A \\cap B) \\cup C. \\]",
        "Respuesta": "Falso",
        "Tema": 1,
        "Explicación": "La afirmación es falsa porque la propiedad distributiva de la intersección con respecto a la unión establece que: \\[ A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C). \\] El término \\( (A \\cap B) \\cup C \\) no representa correctamente la distribución de la intersección \\( A \\cap \\) sobre \\( B \\cup C \\), ya que incluye elementos de \\( C \\) que podrían no estar en \\( A \\)."
    },
    {
        "Pregunta": "Dados tres conjuntos \\( A, B, C \\). Se cumple que  \\[ A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C). \\]",
        "Respuesta": "Verdadero",
        "Tema": 1,
        "Explicación": "La afirmación es verdadera porque la unión y la intersección son distributivas entre sí. En particular, para cualquier conjunto \\( A, B, C \\), se cumple la propiedad distributiva: \\[ A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C). \\] Esto puede verificarse aplicando las definiciones de unión e intersección y observando que cada elemento de \\( A \\cup (B \\cap C) \\) pertenece a \\( (A \\cup B) \\cap (A \\cup C) \\), y viceversa."
    },
    {
        "Pregunta": "Dados tres conjuntos \\( A, B, C \\). Se cumple que  \\[ A \\cup (B \\cap C) = (A \\cup B) \\cap C. \\]",
        "Respuesta": "Falso",
        "Tema": 1,
        "Explicación": "La afirmación es falsa porque la propiedad distributiva correcta de la unión con respecto a la intersección establece que: \\[ A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C). \\] La expresión \\( (A \\cup B) \\cap C \\) no distribuye correctamente la unión de \\( A \\) con \\( B \\cap C \\), ya que puede incluir elementos en \\( C \\) que no satisfacen \\( A \\cup B \\)."
    },
    {
        "Pregunta": "Las partes de un conjunto finito son finitas.",
        "Respuesta": "Verdadero",
        "Tema": 1,
        "Explicación": "La afirmación es verdadera porque el conjunto de partes (o conjunto potencia) de un conjunto finito tiene un número finito de elementos. En particular, si el conjunto de partida tiene \\( n \\) elementos, entonces su conjunto de partes tiene \\( 2^n \\) elementos, ya que cada elemento puede estar o no estar en un subconjunto dado."
    },
    {
        "Pregunta": "Las partes de un conjunto numerable son numerables.",
        "Respuesta": "Falso",
        "Tema": 1,
        "Explicación": "La afirmación es falsa porque el conjunto de partes (o conjunto potencia) de un conjunto numerable no es numerable. Aunque el conjunto inicial es numerable, su conjunto potencia tiene una cardinalidad mayor, equivalente a la cardinalidad del conjunto de los números reales \\( \\mathbb{R} \\). Esto se demuestra mediante el argumento diagonal de Cantor, que establece que no puede existir una biyección entre un conjunto y su conjunto de partes."
    },
    {
        "Pregunta": "Se tiene la siguiente igualdad conjuntista: \\( \\{\\emptyset\\} = \\emptyset \\).",
        "Respuesta": "Falso",
        "Tema": 1,
        "Explicación": "La afirmación es falsa porque \\( \\{\\emptyset\\} \\) no es el conjunto vacío. \\( \\{\\emptyset\\} \\) es un conjunto que contiene un único elemento, y ese elemento es el conjunto vacío (\\( \\emptyset \\)). En notación: \\[ \\emptyset \\in \\{\\emptyset\\}, \\] lo cual implica que \\( \\{\\emptyset\\} \\neq \\emptyset \\), ya que el conjunto vacío no tiene elementos. En definitiva, no es lo mismo tener una caja vacia que no tener nada."
    },
    {
        "Pregunta": "Sean \\( A_1, A_2 \\subseteq X \\) y \\( B_1, B_2 \\subseteq Y \\). Entonces  \\[ (A_1 \\times B_1) \\cap (A_2 \\times B_2) = (A_1 \\cap A_2) \\times (B_1 \\cap B_2). \\]",
        "Respuesta": "Verdadero",
        "Tema": 1,
        "Explicación": "La afirmación es verdadera porque la intersección del producto cartesiano de dos conjuntos sigue la regla: \\[ (A_1 \\times B_1) \\cap (A_2 \\times B_2) = \\{(x, y) \\mid x \\in (A_1 \\cap A_2), y \\in (B_1 \\cap B_2)\\}. \\] Esto corresponde exactamente a \\( (A_1 \\cap A_2) \\times (B_1 \\cap B_2) \\). Por lo tanto, la igualdad presentada es válida."
    },
    {
        "Pregunta": "Sean \\( A_1, A_2 \\subseteq X \\) y \\( B_1, B_2 \\subseteq Y \\). Entonces  \\[ (A_1 \\times B_1) \\cup (A_2 \\times B_2) = (A_1 \\cup A_2) \\times (B_1 \\cup B_2). \\]",
        "Respuesta": "Falso",
        "Tema": 1,
        "Explicación": "La afirmación es falsa porque la unión del producto cartesiano no se distribuye de esta manera en general. Como contraejemplo, consideremos: \\[ A_1 = B_1 = [0, 1/2] \\quad \\text{y} \\quad A_2 = B_2 = [1/2, 1] \\quad \\text{en } \\mathbb{R}. \\] En este caso: \\[ (A_1 \\times B_1) \\cup (A_2 \\times B_2) \\neq (A_1 \\cup A_2) \\times (B_1 \\cup B_2), \\] ya que el lado derecho incluiría pares como \\( (0, 1) \\), que no pertenecen a ninguno de los productos cartesianos \\( A_1 \\times B_1 \\) o \\( A_2 \\times B_2 \\). Por lo tanto, la igualdad no se cumple."
    },
    {
        "Pregunta": "Sean \\( f : X \\to Y \\) una aplicación inyectiva, y \\( A \\subseteq X \\). Entonces  \\[ f^{-1}(f(A)) \\subseteq A. \\]",
        "Respuesta": "Verdadero",
        "Tema": 1,
        "Explicación": "La afirmación es verdadera porque \\( f \\) es inyectiva, lo que implica que cada elemento en la imagen \\( f(A) \\) proviene de un único elemento en \\( A \\). Por lo tanto, al tomar la preimagen \\( f^{-1}(f(A)) \\), no se incluyen elementos fuera de \\( A \\), ya que no hay puntos fuera de \\( A \\) cuya imagen coincida con puntos de \\( A \\). Esto asegura que: \\[ f^{-1}(f(A)) \\subseteq A. \\]"
    },
    {
        "Pregunta": "Sean \\( f : X \\to Y \\) una aplicación inyectiva, y \\( B \\subseteq Y \\). Entonces  \\[ B \\subseteq f(f^{-1}(B)). \\]",
        "Respuesta": "Falso",
        "Tema": 1,
        "Explicación": "La afirmación es falsa porque, aunque \\( f \\) sea inyectiva, no garantiza que \\( B \\subseteq f(f^{-1}(B)) \\). Esto se debe a que \\( f^{-1}(B) \\) solo considera los elementos de \\( X \\) que mapean a elementos de \\( B \\), y al aplicar \\( f \\) nuevamente, podríamos obtener una imagen que no cubra todo \\( B \\), especialmente si \\( B \\) contiene elementos que no están en la imagen de \\( f \\). Por lo tanto, \\( B \\subseteq f(f^{-1}(B)) \\) no siempre se cumple."
    },
    {
        "Pregunta": "Sean \\( f : X \\to Y \\) una aplicación suprayectiva, y \\( A \\subseteq X \\). Entonces  \\[ f^{-1}(f(A)) \\subseteq A. \\]",
        "Respuesta": "Falso",
        "Tema": 1,
        "Explicación": "La afirmación es falsa porque la suprayectividad de \\( f \\) no garantiza que \\( f^{-1}(f(A)) \\subseteq A \\). Un contraejemplo sería si \\( Y \\) tiene un único elemento (es decir, \\( f \\) es constante), entonces \\( f(A) = Y \\) y \\( f^{-1}(f(A)) = X \\). Esto incluye elementos fuera de \\( A \\), lo que contradice la afirmación. Por lo tanto, la relación no se cumple en general."
    },
    {
        "Pregunta": "Sean \\( f : X \\to Y \\) una aplicación suprayectiva, y \\( B \\subseteq Y \\). Entonces  \\[ B \\subseteq f(f^{-1}(B)). \\]",
        "Respuesta": "Verdadero",
        "Tema": 1,
        "Explicación": "La afirmación es verdadera porque, al ser \\( f \\) suprayectiva, cada elemento de \\( B \\) tiene al menos una preimagen en \\( X \\) bajo \\( f \\). Por definición de la imagen, se garantiza que: \\[ f(f^{-1}(B)) \\] contiene todos los elementos de \\( B \\), ya que \\( f^{-1}(B) \\) recoge todas las preimágenes de los elementos de \\( B \\). Esto implica que \\( B \\subseteq f(f^{-1}(B)) \\)."
    },
    {
        "Pregunta": "Sean \\( f : X \\to Y \\) una aplicación, y \\( A \\subseteq X \\). Entonces  \\[ A \\subseteq f^{-1}(f(A)). \\]",
        "Respuesta": "Verdadero",
        "Tema": 1,
        "Explicación": "La afirmación es verdadera porque, por definición de la preimagen, cualquier elemento \\( x \\in A \\) se mapea a \\( f(x) \\in f(A) \\). Por lo tanto, \\( x \\in f^{-1}(f(A)) \\), ya que \\( f^{-1}(f(A)) \\) incluye todos los elementos de \\( X \\) que se mapean a \\( f(A) \\). Esto asegura que \\( A \\subseteq f^{-1}(f(A)) \\)."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 9 & 0 \\\\ b & 9 & 0 & 4 \\\\ c & 0 & 4 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Falso",
        "Tema": 2,
        "Explicación": "La afirmación es falsa porque la función \\( d \\) no cumple con la desigualdad triangular, que es una propiedad esencial para ser una métrica. Por ejemplo: \\( d(a, b) + d(b, c) = 9 + 4 = 13 \\), pero \\( d(a, c) = 0 \\), lo cual contradice la desigualdad \\( d(a, b) + d(b, c) \\geq d(a, c) \\). Por lo tanto, \\( d \\) no es una distancia."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 6 & 1 \\\\ b & 6 & 0 & 4 \\\\ c & 1 & 4 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Falso",
        "Tema": 2,
        "Explicación": "La afirmación es falsa porque la función \\( d \\) no cumple con la desigualdad triangular, que es una propiedad esencial para ser una métrica. Por ejemplo: \\( d(a, b) + d(b, c) = 6 + 4 = 10 \\), pero \\( d(a, c) = 1 \\), lo cual contradice la desigualdad \\( d(a, b) + d(b, c) \\geq d(a, c) \\). Por lo tanto, \\( d \\) no es una distancia."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 8 & 3 \\\\ b & 8 & 0 & 5 \\\\ c & 3 & 5 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Verdadero",
        "Tema": 2,
        "Explicación": "La afirmación es verdadera porque la función \\( d \\) cumple con las tres propiedades necesarias para ser una métrica: 1) \\( d(x, y) \\geq 0 \\) y \\( d(x, y) = 0 \\iff x = y \\), 2) simetría \\( d(x, y) = d(y, x) \\), y 3) la desigualdad triangular \\( d(x, y) + d(y, z) \\geq d(x, z) \\) para todos los \\( x, y, z \\in X \\). Por lo tanto, \\( d \\) es una distancia."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 3 & 5 \\\\ b & 3 & 0 & 1 \\\\ c & 5 & 1 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Falso",
        "Tema": 2,
        "Explicación": "La afirmación es falsa porque la función \\( d \\) no cumple con la desigualdad triangular, que es una propiedad esencial para ser una métrica. Por ejemplo: \\( d(a, b) + d(b, c) = 3 + 1 = 4 \\), pero \\( d(a, c) = 5 \\), lo cual contradice la desigualdad \\( d(a, b) + d(b, c) \\geq d(a, c) \\). Por lo tanto, \\( d \\) no es una distancia."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 3 & 8 \\\\ b & 3 & 0 & 9 \\\\ c & 8 & 9 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Verdadero",
        "Tema": 2,
        "Explicación": "La afirmación es verdadera porque la función \\( d \\) cumple con las tres propiedades necesarias para ser una métrica: 1) \\( d(x, y) \\geq 0 \\) y \\( d(x, y) = 0 \\iff x = y \\), 2) simetría \\( d(x, y) = d(y, x) \\), y 3) la desigualdad triangular \\( d(x, y) + d(y, z) \\geq d(x, z) \\) para todos los \\( x, y, z \\in X \\). Por lo tanto, \\( d \\) es una distancia."
    },
    {
        "Pregunta": "El conjunto {0} no es abierto con la topología usual ya que es cerrado.",
        "Respuesta": "Falso",
        "Tema": 2,
        "Explicación": "El conjunto {0} no es abierto en la topología usual, pero esto no se debe a que sea cerrado. El conjunto {0} es cerrado, pero no abierto debido a que no es posible encontrar una bola de radio positivo que esté completamente contenida dentro de {0}. Por lo tanto, la afirmación es falsa."
    },
    {
        "Pregunta": "En un espacio métrico, el centro de una bola siempre pertenece a la bola.",
        "Respuesta": "Verdadero",
        "Tema": 2,
        "Explicación": "La afirmación es verdadera porque, en un espacio métrico, la bola centrada en un punto \\( x \\) con radio \\( r > 0 \\) está definida como \\( B(x, r) = \\{ y \\in X : d(x, y) < r \\} \\). La distancia del centro \\( x \\) a sí mismo es \\( d(x, x) = 0 \\), lo cual siempre es menor que \\( r \\). Por lo tanto, el centro \\( x \\) siempre pertenece a la bola."
    },
    {
        "Pregunta": "En un espacio métrico, fijado un radio positivo y un centro, el disco es unión disjunta de la esfera y la bola.",
        "Respuesta": "Verdadero",
        "Tema": 2,
        "Explicación": "La afirmación es verdadera porque, en un espacio métrico, el disco se define como el conjunto de puntos cuya distancia al centro es menor o igual al radio, mientras que la bola contiene los puntos cuya distancia es estrictamente menor que el radio, y la esfera contiene los puntos cuya distancia al centro es exactamente igual al radio. Por lo tanto, el disco es la unión de la bola y la esfera, siendo esta unión disjunta porque ningún punto puede satisfacer ambas condiciones al mismo tiempo."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\mathbb{R} \\times \\{0\\} \\cup \\{0\\} \\times \\mathbb{R} \\) con la distancia usual del plano. El conjunto \\( [-1,1] \\times \\{0\\} \\cup \\{0\\} \\times [-1,1] \\) es un entorno del origen.",
        "Respuesta": "Verdadero",
        "Tema": 2,
        "Explicación": "La afirmación es verdadera porque, en el espacio métrico \\( X \\), el conjunto \\( [-1,1] \\times \\{0\\} \\cup \\{0\\} \\times [-1,1] \\) contiene un intervalo alrededor del origen en cada una de las coordenadas permitidas en \\( X \\). Esto significa que el origen está contenido en un conjunto que es un entorno en la topología inducida por la distancia usual del plano restringida a \\( X \\)."
    },
    {
        "Pregunta": "Toda bola cerrada es en efecto un conjunto cerrado.",
        "Respuesta": "Verdadero",
        "Tema": 2,
        "Explicación": "La afirmación es verdadera porque, en un espacio métrico, una bola cerrada \\( \\bar{B}(x, r) = \\{ y \\in X : d(x, y) \\leq r \\} \\) es cerrada. Si un punto \\( y \\notin \\bar{B}(x, r) \\), entonces existe un radio \\( r' > r \\) tal que \\( B(y, r' - r) \\cap \\bar{B}(x, r) = \\emptyset \\). Esto implica que el complementario de \\( \\bar{B}(x, r) \\) es abierto, cumpliendo con la definición de conjunto cerrado."
    },
    {
        "Pregunta": "Sea \\( A \\) un subconjunto de un métrico \\( X \\). Entonces \\( \\bigcup_{a \\in A} \\bar{D}(a, \\varepsilon) \\) es cerrado para todo \\( \\varepsilon > 0 \\).",
        "Respuesta": "Falso",
        "Tema": 2,
        "Explicación": "La afirmación es falsa porque la unión de bolas cerradas no necesariamente es cerrada. Por ejemplo, si \\( X = \\mathbb{R} \\) con la métrica usual, \\( A = (0, 1) \\) y \\( \\varepsilon = 1 \\), entonces el resultado es \\( (-1, 2) \\), que no es cerrado. Esto demuestra que la unión de bolas cerradas no siempre produce un conjunto cerrado."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 7 & 5 \\\\ b & 7 & 0 & 3 \\\\ c & 5 & 3 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Verdadero",
        "Tema": 2,
        "Explicación": "La afirmación es verdadera porque la función \\( d \\) cumple con las tres propiedades necesarias para ser una métrica: 1) \\( d(x, y) \\geq 0 \\) y \\( d(x, y) = 0 \\iff x = y \\), 2) simetría \\( d(x, y) = d(y, x) \\), y 3) la desigualdad triangular \\( d(x, y) + d(y, z) \\geq d(x, z) \\) para todos los \\( x, y, z \\in X \\). Por lo tanto, \\( d \\) es una distancia."
    },
    {
        "Pregunta": "El conjunto \\((0, 1)\\) es siempre acotado.",
        "Respuesta": "Falso",
        "Tema": 2,
        "Explicación": "La afirmación es falsa porque la propiedad de estar acotado depende de la métrica que se escoja en el conjunto. Por ejemplo, si consideramos la métrica \\( d(x, y) = \\left| \\frac{1}{x} - \\frac{1}{y} \\right| \\) en \\((0, 1)\\), la distancia entre puntos no está acotada ya que \\( \\frac{1}{x} \\) tiende a infinito cuando \\( x \\to 0^+ \\). Esto demuestra que el conjunto \\((0, 1)\\) no es necesariamente acotado en todas las métricas posibles."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 8 & 8 \\\\ b & 8 & 0 & 9 \\\\ c & 8 & 9 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Verdadero",
        "Tema": 2,
        "Explicación": "La afirmación es verdadera porque la función \\( d \\) cumple con las tres propiedades necesarias para ser una métrica: 1) \\( d(x, y) \\geq 0 \\) y \\( d(x, y) = 0 \\iff x = y \\), 2) simetría \\( d(x, y) = d(y, x) \\), y 3) la desigualdad triangular \\( d(x, y) + d(y, z) \\geq d(x, z) \\) para todos los \\( x, y, z \\in X \\). Por lo tanto, \\( d \\) es una distancia."
    },
    {
        "Pregunta": "Considera \\( \\mathbb{R}^2 \\) con la distancia usual. La recta \\( \\{(x, x) \\in \\mathbb{R}^2 \\mid x \\in \\mathbb{R}\\} \\) es un entorno del origen.",
        "Respuesta": "Falso",
        "Tema": 2,
        "Explicación": "La afirmación es falsa porque un entorno del origen en \\( \\mathbb{R}^2 \\) debe contener una bola abierta alrededor del origen en la topología inducida por la distancia euclidiana. Ninguna bola euclidiana puede estar contenida completamente en una recta, ya que las bolas son conjuntos bidimensionales y las rectas son unidimensionales. Por lo tanto, la recta mencionada no es un entorno del origen."
    },
    {
        "Pregunta": "Considera el conjunto de los números enteros \\( \\mathbb{Z} \\) con la distancia usual. El conjunto \\( \\{0\\} \\) es un entorno de \\( 0 \\).",
        "Respuesta": "Verdadero",
        "Tema": 2,
        "Explicación": "La afirmación es verdadera porque, en \\( \\mathbb{Z} \\) con la distancia usual, \\( \\{0\\} = B_{\\mathbb{Z}}(0, 1) \\), donde \\( B_{\\mathbb{Z}}(0, 1) \\) es la bola abierta de radio \\( 1 \\) centrada en \\( 0 \\). Dado que en \\( \\mathbb{Z} \\) la distancia es discreta, cualquier conjunto unitario, como \\( \\{0\\} \\), puede ser un entorno de un punto."
    },
    {
        "Pregunta": "En un espacio métrico, una bola puede contener a otra bola de radio estrictamente mayor.",
        "Respuesta": "Verdadero",
        "Tema": 2,
        "Explicación": "La afirmación es verdadera porque, en un espacio métrico, si consideramos una bola centrada en \\( x \\) de radio \\( r_1 \\), \\( B(x, r_1) \\), esta puede contener una bola de radio \\( r_2 > r_1 \\) siempre y cuando \\( B(x, r_2) \\) esté contenida en un conjunto más grande que limita el espacio métrico, como un subconjunto que no incluye todos los puntos necesarios para \\( B(x, r_2) \\) ser completamente definido. Sin embargo, en espacios métricos usuales como \\( \\mathbb{R}^n \\), esto no ocurre."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 3 & 8 \\\\ b & 3 & 0 & 10 \\\\ c & 8 & 10 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Verdadero",
        "Tema": 2,
        "Explicación": "La afirmación es verdadera porque la función \\( d \\) cumple con las tres propiedades necesarias para ser una métrica: 1) \\( d(x, y) \\geq 0 \\) y \\( d(x, y) = 0 \\iff x = y \\), 2) simetría \\( d(x, y) = d(y, x) \\), y 3) la desigualdad triangular \\( d(x, y) + d(y, z) \\geq d(x, z) \\) para todos los \\( x, y, z \\in X \\). Por lo tanto, \\( d \\) es una distancia."
    },
    {
        "Pregunta": "En los reales con la topología usual, los subconjuntos \\((-1, 1), (-2, 2), (0, 2], [-1, 0) \\text{ y } [0, 1]\\) son entornos de \\(0\\).",
        "Respuesta": "Falso",
        "Tema": 2,
        "Explicación": "La afirmación es falsa porque, en la topología usual de los números reales, un entorno de \\( 0 \\) debe contener un intervalo abierto que incluya a \\( 0 \\). Los subconjuntos \\((0, 2]\\), \\([-1, 0)\\), y \\([0, 1]\\) no contienen a \\( 0 \\) dentro de un intervalo abierto, por lo que no son entornos de \\( 0 \\). Solo \\((-1, 1)\\) y \\((-2, 2)\\) cumplen con la condición para ser entornos de \\( 0 \\)."
    },
    {
        "Pregunta": "Sea \\((X, d)\\) un métrico. Dados dos conjuntos \\(A\\) y \\(B\\), definimos \\(d(A, B) = \\inf\\{d(a, b) \\mid a \\in A, b \\in B\\}\\). Entonces, para otro tercer conjunto \\(C \\subset X\\), se tiene que \\(d(A, B) \\leq d(A, C) + d(C, B)\\).",
        "Respuesta": "Falso",
        "Tema": 2,
        "Explicación": "La afirmación es falsa porque la desigualdad triangular no necesariamente se preserva bajo esta definición de distancia entre conjuntos. Aunque \\( d(a, b) \\leq d(a, c) + d(c, b) \\) para elementos individuales \\( a \\in A, b \\in B, c \\in C \\), el infimum utilizado en la definición de \\( d(A, B) \\) puede no satisfacer esta desigualdad al considerar todos los posibles pares \\( a, b \\) y \\( c \\). Por lo tanto, \\( d(A, B) \\leq d(A, C) + d(C, B) \\) no se cumple en general para esta definición."
    },
    {
        "Pregunta": "Dadas \\( d_1 \\) y \\( d_2 \\) métricas definidas sobre el mismo conjunto \\( X \\), la aplicación \\( d_M : X \\times X \\to \\mathbb{R} \\), definida como \\( d_M(x, y) = \\max\\{d_1(x, y), d_2(x, y)\\} \\), es una métrica.",
        "Respuesta": "Verdadero",
        "Tema": 2,
        "Explicación": "La afirmación es verdadera porque \\( d_M \\) cumple con las propiedades de una métrica: 1) \\( d_M(x, y) \\geq 0 \\) y \\( d_M(x, y) = 0 \\iff x = y \\), ya que \\( d_1 \\) y \\( d_2 \\) son métricas. 2) \\( d_M(x, y) = d_M(y, x) \\), porque \\( d_1 \\) y \\( d_2 \\) son simétricas. 3) La desigualdad triangular \\( d_M(x, z) \\leq d_M(x, y) + d_M(y, z) \\) se cumple, ya que \\( \\max\\{d_1, d_2\\} \\) hereda esta propiedad de \\( d_1 \\) y \\( d_2 \\). Por lo tanto, \\( d_M \\) es una métrica."
    },
    {
        "Pregunta": "En un espacio métrico, un disco de radio positivo nunca está contenido en la bola del mismo centro y radio.",
        "Respuesta": "Falso",
        "Tema": 2,
        "Explicación": "La afirmación es falsa porque, en un espacio métrico, el disco cerrado de radio \\( r \\), definido como \\( \\{x \\in X : d(c, x) \\leq r\\} \\), incluye a la bola abierta de radio \\( r \\), definida como \\( \\{x \\in X : d(c, x) < r\\} \\). Por lo tanto, el disco cerrado está contenido en la bola cerrada, y no hay contradicción entre sus definiciones."
    },
    {
        "Pregunta": "Dadas \\( d_1 \\) y \\( d_2 \\) métricas definidas sobre el mismo conjunto \\( X \\), la aplicación \\( d_m : X \\times X \\to \\mathbb{R} \\), definida como \\( d_m(x, y) = \\min\\{d_1(x, y), d_2(x, y)\\} \\), es una métrica.",
        "Respuesta": "Falso",
        "Tema": 2,
        "Explicación": "La afirmación es falsa porque \\( d_m(x, y) = \\min\\{d_1(x, y), d_2(x, y)\\} \\) no siempre satisface la desigualdad triangular, que es una condición necesaria para ser una métrica. Por ejemplo, considere un conjunto \\( \\{a, b, c\\} \\) con \\( d_1(a, b) = 1 \\), \\( d_1(b, c) = 2 \\), \\( d_1(a, c) = 3 \\), y \\( d_2(a, b) = 2 \\), \\( d_2(b, c) = 1 \\), \\( d_2(a, c) = 3 \\). Aquí, \\( d_m(a, c) = \\min\\{d_1(a, c), d_2(a, c)\\} = 3 \\), pero \\( d_m(a, b) + d_m(b, c) = \\min\\{1, 2\\} + \\min\\{2, 1\\} = 1 + 1 = 2 \\), lo cual viola la desigualdad triangular \\( d_m(a, c) \\leq d_m(a, b) + d_m(b, c) \\)."
    },
    {
        "Pregunta": "En un espacio métrico, el centro de una esfera siempre pertenece a la esfera.",
        "Respuesta": "Falso",
        "Tema": 2,
        "Explicación": "La afirmación es falsa porque una esfera en un espacio métrico está definida como el conjunto de puntos a una distancia exacta \\( r \\) del centro. Por lo tanto, el centro de la esfera no pertenece a ella, ya que la distancia del centro a sí mismo es \\( 0 \\), que no es igual al radio \\( r \\) si \\( r > 0 \\)."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 9 & 2 \\\\ b & 9 & 0 & 5 \\\\ c & 2 & 5 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Falso",
        "Tema": 2,
        "Explicación": "La afirmación es falsa porque \\( d \\) no cumple con la desigualdad triangular, que es una condición necesaria para ser una métrica. Por ejemplo, \\( d(a, b) = 9 \\) pero \\( d(a, c) + d(c, b) = 2 + 5 = 7 \\), lo cual contradice la desigualdad triangular \\( d(a, b) \\leq d(a, c) + d(c, b) \\). Por lo tanto, \\( d \\) no es una distancia."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 8 & 7 \\\\ b & 8 & 0 & 1 \\\\ c & 7 & 1 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Verdadero",
        "Tema": 2,
        "Explicación": "La afirmación es verdadera porque la función \\( d \\) cumple con las tres propiedades necesarias para ser una métrica: 1) \\( d(x, y) \\geq 0 \\) y \\( d(x, y) = 0 \\iff x = y \\), 2) simetría \\( d(x, y) = d(y, x) \\), y 3) la desigualdad triangular \\( d(x, y) + d(y, z) \\geq d(x, z) \\) para todos los \\( x, y, z \\in X \\). Por lo tanto, \\( d \\) es una distancia."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 2 & 5 \\\\ b & 2 & 0 & 5 \\\\ c & 5 & 5 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Verdadero",
        "Tema": 2,
        "Explicación": "La afirmación es verdadera porque la función \\( d \\) cumple con las tres propiedades necesarias para ser una métrica: 1) \\( d(x, y) \\geq 0 \\) y \\( d(x, y) = 0 \\iff x = y \\), 2) simetría \\( d(x, y) = d(y, x) \\), y 3) la desigualdad triangular \\( d(x, y) + d(y, z) \\geq d(x, z) \\) para todos los \\( x, y, z \\in X \\). Por lo tanto, \\( d \\) es una distancia."
    },
    {
        "Pregunta": "Una bola en un espacio métrico puede ser el conjunto vacío.",
        "Respuesta": "Falso",
        "Tema": 2,
        "Explicación": "La afirmación es falsa porque, en un espacio métrico, una bola \\( B(x, r) \\) con radio \\( r > 0 \\) siempre contiene al menos al centro \\( x \\), ya que \\( d(x, x) = 0 < r \\). Por lo tanto, una bola no puede ser el conjunto vacío."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 5 & 0 \\\\ b & 5 & 0 & 6 \\\\ c & 0 & 6 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Falso",
        "Tema": 2,
        "Explicación": "La afirmación es falsa porque \\( d \\) no cumple con las propiedades necesarias para ser una métrica. En particular, no satisface el requisito de que \\( d(x, y) > 0 \\) para \\( x \\neq y \\). Por ejemplo, \\( d(a, c) = 0 \\) aunque \\( a \\neq c \\), lo cual viola la definición de distancia. Por lo tanto, \\( d \\) no es una métrica."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 5 & 7 \\\\ b & 7 & 0 & 3 \\\\ c & 5 & 3 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Falso",
        "Tema": 2,
        "Explicación": "La afirmación es falsa porque \\( d \\) no cumple con la desigualdad triangular, que es una condición necesaria para ser una métrica. Por ejemplo, \\( d(a, b) = 5 \\), \\( d(b, c) = 3 \\), y \\( d(a, c) = 7 \\). Sin embargo, \\( d(a, b) + d(b, c) = 5 + 3 = 8 \\geq 7 \\), lo cual cumple, pero en otros casos podría fallar dependiendo de las combinaciones. Por esta razón se analiza con más detalle métrico real."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 3 & 8 \\\\ b & 3 & 8 & 10 \\\\ c & 8 & 10 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Falso",
        "Tema": 2,
        "Explicación": "La afirmación es falsa porque \\( d \\) no cumple con la propiedad \\( d(x, x) = 0 \\) para todos los \\( x \\in X \\). En particular, \\( d(b, b) = 8 > 0 \\), lo cual viola la definición de distancia. Por lo tanto, \\( d \\) no es una métrica."
    },
    {
        "Pregunta": "En un espacio métrico, un disco de radio positivo contiene siempre a la bola del mismo centro y radio.",
        "Respuesta": "Verdadero",
        "Tema": 2,
        "Explicación": "La afirmación es verdadera porque, en un espacio métrico, la bola abierta de radio \\( r \\), definida como \\( \\{x \\in X : d(c, x) < r\\} \\), está contenida en el disco cerrado de radio \\( r \\), definido como \\( \\{x \\in X : d(c, x) \\leq r\\} \\). Por definición, cualquier punto cuya distancia al centro sea menor que \\( r \\) también cumple con la condición de ser menor o igual a \\( r \\), por lo que la bola está contenida en el disco."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 2 & 3 \\\\ b & 3 & 0 & 5 \\\\ c & 3 & 5 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Falso",
        "Tema": 2,
        "Explicación": "La afirmación es falsa porque \\( d \\) no cumple con la desigualdad triangular, que es una condición necesaria para ser una métrica. Por ejemplo, \\( d(a, b) = 2 \\), \\( d(b, c) = 5 \\), y \\( d(a, c) = 3 \\). Sin embargo, \\( d(a, b) + d(b, c) = 2 + 5 = 7 \\), lo cual no es mayor o igual que \\( d(a, c) = 3 \\). Esto viola la desigualdad triangular, por lo que \\( d \\) no es una métrica."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 2 & 3 \\\\ b & 2 & 0 & 5 \\\\ c & 3 & 5 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Verdadero",
        "Tema": 2,
        "Explicación": "La afirmación es verdadera porque \\( d \\) cumple con todas las propiedades necesarias para ser una métrica: 1) \\( d(x, y) \\geq 0 \\) y \\( d(x, y) = 0 \\iff x = y \\), 2) simetría \\( d(x, y) = d(y, x) \\), y 3) la desigualdad triangular \\( d(x, z) \\leq d(x, y) + d(y, z) \\) para todos los \\( x, y, z \\in X \\). Por lo tanto, \\( d \\) es una métrica."
    },
    {
        "Pregunta": "Sea \\( d : X \\times X \\to \\mathbb{R} \\) una función que satisface: \\( 1. \\ d(x, y) = 0 \\iff x = y \\), \\( 2. \\ \\forall x, y \\in X \\ d(x, y) = d(y, x) \\), \\( 3. \\ \\forall x, y, z \\in X \\ \\) se cumple la desigualdad triangular. Entonces \\( d \\) es no negativa y, por lo tanto, es una métrica.",
        "Respuesta": "Verdadero",
        "Tema": 2,
        "Explicación": "La afirmación es verdadera porque, dadas las propiedades especificadas: \\( d(x, y) = 0 \\iff x = y \\), simetría \\( d(x, y) = d(y, x) \\), y la desigualdad triangular \\( d(x, z) \\leq d(x, y) + d(y, z) \\), podemos deducir que \\( d(x, y) \\geq 0 \\). Esto se sigue de la desigualdad triangular: \\( 0 = d(x, x) \\leq d(x, y) + d(y, x) = 2d(x, y) \\), implicando que \\( d(x, y) \\geq 0 \\). Por lo tanto, \\( d \\) es una métrica válida."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 1 & 9 & 9 \\\\ b & 9 & 1 & 14 \\\\ c & 9 & 14 & 1 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Falso",
        "Tema": 2,
        "Explicación": "La afirmación es falsa porque \\( d \\) no cumple con la propiedad \\( d(x, x) = 0 \\) para todos los \\( x \\in X \\). En este caso, \\( d(a, a) = d(b, b) = d(c, c) = 1 \\neq 0 \\), lo cual viola la definición de métrica. Por lo tanto, \\( d \\) no es una distancia."
    },
    {
        "Pregunta": "Existe un espacio métrico donde todos los triángulos son isósceles.",
        "Respuesta": "Verdadero",
        "Tema": 2,
        "Explicación": "La afirmación es verdadera. En un espacio métrico con la distancia discreta, definida como \\( d(x, y) = 0 \\) si \\( x = y \\) y \\( d(x, y) = 1 \\) si \\( x \\neq y \\), todos los triángulos son isósceles. Esto se debe a que las distancias entre puntos son siempre \\( 0 \\) o \\( 1 \\), lo que hace que al menos dos lados de cualquier triángulo tengan la misma longitud."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 9 & 9 \\\\ b & 9 & 0 & 14 \\\\ c & 9 & 14 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Verdadero",
        "Tema": 2,
        "Explicación": "La afirmación es verdadera porque \\( d \\) cumple con todas las propiedades necesarias para ser una métrica: \\( d(x, y) \\geq 0 \\) y \\( d(x, y) = 0 \\iff x = y \\), \\( d(x, y) = d(y, x) \\) (simetría), y la desigualdad triangular \\( d(x, z) \\leq d(x, y) + d(y, z) \\) para todos \\( x, y, z \\in X \\). Por lo tanto, \\( d \\) es una función distancia válida."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 3 & 1 \\\\ b & 3 & 0 & 2 \\\\ c & 1 & 2 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Verdadero",
        "Tema": 2,
        "Explicación": "La afirmación es verdadera porque \\( d \\) cumple con todas las propiedades necesarias para ser una métrica: \\( d(x, y) \\geq 0 \\) y \\( d(x, y) = 0 \\iff x = y \\), \\( d(x, y) = d(y, x) \\) (simetría), y la desigualdad triangular \\( d(x, z) \\leq d(x, y) + d(y, z) \\) para todos \\( x, y, z \\in X \\). Por lo tanto, \\( d \\) es una función distancia válida."
    },
    {
        "Pregunta": "Todo cerrado es una bola cerrada.",
        "Respuesta": "Falso",
        "Tema": 2,
        "Explicación": "La afirmación es falsa porque un conjunto cerrado no necesariamente tiene la forma de una bola cerrada. Por ejemplo, en \\( \\mathbb{R} \\) con la métrica usual, el conjunto \\( [0, 1] \\cup \\{2\\} \\) es cerrado, pero no es una bola cerrada porque no tiene la estructura requerida para ser una bola métrica alrededor de un punto."
    },
    {
        "Pregunta": "Las esferas son conjuntos cerrados.",
        "Respuesta": "Verdadero",
        "Tema": 2,
        "Explicación": "La afirmación es verdadera porque en un espacio métrico, una esfera \\( S(x, r) = \\{y \\in X : d(x, y) = r\\} \\) es el conjunto de puntos a una distancia fija \\( r \\) de un centro \\( x \\). Este conjunto es cerrado ya que es el complemento de la unión de las bolas abiertas \\( B(x, r - \\epsilon) \\) para \\( \\epsilon > 0 \\), lo cual garantiza su cierre bajo la métrica."
    },
    {
        "Pregunta": "Sea \\( X \\) un conjunto no vacío. ¿Siempre podemos definir una métrica sobre él?",
        "Respuesta": "Verdadero",
        "Tema": 2,
        "Explicación": "Es posible definir una métrica sobre cualquier conjunto no vacío \\( X \\). Por ejemplo, la métrica discreta está definida como \\( d(x, y) = 0 \\) si \\( x = y \\), y \\( d(x, y) = 1 \\) si \\( x \\neq y \\). Esta métrica cumple con las propiedades necesarias (no negatividad, simetría y desigualdad triangular) y puede ser aplicada a cualquier conjunto."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{3\\}, \\{1,3\\}, \\{1, 2, 3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "No lo es. La familia dada no es una topología porque no cumple con las propiedades necesarias: la intersección de \\( \\{2\\} \\) y \\( \\{3\\} \\) (que es el conjunto vacío) no pertenece a la familia, lo que viola la propiedad de intersección finita."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{2,3\\}, \\{1,2\\}, \\{1, 2, 3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "Bien. La familia dada es una topología porque cumple con las propiedades necesarias: contiene el conjunto vacío y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{1,2\\}, \\{1,3\\}, \\{1, 2, 3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "Bien. La familia dada es una topología porque cumple con las propiedades necesarias: contiene el conjunto vacío y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{3\\}, \\{1,2\\}, \\{1,3\\}, \\{2,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "No lo es. La familia dada no es una topología porque no cumple con las propiedades necesarias. Por ejemplo, la intersección de \\( \\{1,3\\} \\) y \\( \\{2,3\\} \\), que es \\( \\{3\\} \\), pertenece a la familia, pero no es cerrada bajo uniones arbitrarias o intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "Bien. La familia dada es una topología porque cumple con las propiedades necesarias: contiene el conjunto vacío y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{3\\}, \\{1\\}, \\{2,3\\}, \\{1,2\\}, \\{1,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "Bien. La familia dada es una topología porque cumple con las propiedades necesarias: contiene el conjunto vacío y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{1\\}, \\{2\\}, \\{3\\}, \\{1,2\\}, \\{1,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "No lo es. La familia dada no es una topología porque no contiene todas las uniones posibles. Por ejemplo, la unión de \\( \\{1,2\\} \\) y \\( \\{1,3\\} \\), que es \\( \\{1,2,3\\} \\), no pertenece a la familia."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{1,2\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "Bien. La familia dada es una topología porque cumple con las propiedades necesarias: contiene el conjunto vacío y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{1\\}, \\{2\\}, \\{3\\}, \\{1,2\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "No lo es. La familia dada no es una topología porque no contiene el conjunto vacío ni el conjunto \\( X \\), lo que viola las propiedades necesarias de una topología."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{1\\}, \\{2\\}, \\{3\\}, \\{1,2\\}, \\{1,3\\}, \\{2,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "No lo es. La familia dada no es una topología porque no contiene el conjunto vacío y no es cerrada bajo intersecciones finitas; por ejemplo, la intersección de \\( \\{1,2\\} \\) y \\( \\{1,3\\} \\) es \\( \\{1\\} \\), que no está en la familia."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{3\\}, \\{1,2\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "Bien. La familia dada es una topología porque contiene el conjunto vacío y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "En un espacio topológico la intersección finita de abiertos es un conjunto abierto.",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "Es uno de los axiomas de la topología (T3). La intersección finita de conjuntos abiertos siempre es un conjunto abierto en un espacio topológico."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "No lo es. La familia dada no es una topología porque no es cerrada bajo intersecciones finitas ni uniones arbitrarias; por ejemplo, \\( \\{2\\} \\cup \\{1,2,3\\} = \\{1,2,3\\} \\), pero algunas combinaciones no cumplen."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{1,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "Bien. La familia dada es una topología porque contiene el conjunto vacío y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{1\\}, \\{2\\}, \\{3\\}, \\{1,3\\}, \\{2,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "No lo es. La familia dada no es una topología porque no cumple con las propiedades necesarias, como la cerradura bajo uniones arbitrarias. Por ejemplo, la unión de \\( \\{1\\} \\) y \\( \\{2\\} \\) que es \\( \\{1,2\\} \\), no pertenece a la familia."
    },
    {
        "Pregunta": "Existen métricas distintas a la discreta que dan lugar a la topología discreta.",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "Si \\( d \\) es la métrica discreta, \\( 2d \\) es distinta y proporciona la misma topología discreta, ya que todas las métricas equivalentes inducen la misma topología."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{1\\}, \\{2\\}, \\{3\\}, \\{1,3\\}, \\{2,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "No lo es. Aunque contiene \\( \\emptyset \\) y \\( X \\), la familia no es cerrada bajo intersecciones finitas. Por ejemplo, la intersección de \\( \\{1,3\\} \\) y \\( \\{2,3\\} \\) es \\( \\{3\\} \\), que no pertenece a la familia."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{3\\}, \\{1\\}, \\{1,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "Bien. La familia dada es una topología porque contiene \\( \\emptyset \\), \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "La distancia discreta es la única que da lugar a la topología discreta.",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "Si \\( d \\) es la métrica discreta, \\( 2d \\) es una métrica distinta que también genera la misma topología discreta. Por lo tanto, la métrica discreta no es única en este sentido."
    },
    {
        "Pregunta": "Los abiertos de un espacio métrico determinan una topología.",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "Hay un teorema que establece que los conjuntos abiertos en un espacio métrico cumplen los axiomas de una topología, lo que los convierte en una topología en dicho espacio."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{1\\}, \\{2\\}, \\{3\\}, \\{1,3\\}, \\{2,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "No lo es. Aunque contiene \\( \\emptyset \\) y \\( X \\), la familia no es cerrada bajo intersecciones finitas ni uniones arbitrarias, lo que viola los axiomas de la topología."
    },
    {
        "Pregunta": "Es posible definir el concepto de conjunto acotado en una topología arbitraria.",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "Si no existe otra estructura adicional, como una métrica, no es posible definir el concepto de conjunto acotado en una topología arbitraria."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "La familia dada es una topología porque contiene \\( \\emptyset \\) y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{3\\}, \\{1\\}, \\{1,2\\}, \\{1,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "La familia dada es una topología porque cumple con las propiedades necesarias: contiene \\( \\emptyset \\) y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "La topología usual de los números reales tiene una cantidad contable de abiertos.",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "Los intervalos abiertos \\((x, x+1)\\) con \\(x \\in \\mathbb{R}\\) son infinitos y forman una cantidad no contable de abiertos en la topología usual de \\(\\mathbb{R}\\)."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{3\\}, \\{2,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "La familia dada no es una topología porque no incluye el conjunto vacío, lo cual es un requisito esencial para que sea una topología."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{1\\}, \\{1,2\\}, \\{1,3\\}, \\{2,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "La familia dada no es una topología porque no incluye el conjunto vacío y no cumple con la cerradura bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{3\\}, \\{1,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "La familia dada no es una topología porque no contiene \\( \\emptyset \\) ni \\( X \\), y no es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{1\\}, \\{3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "La familia dada no es una topología porque no contiene el conjunto vacío \\( \\emptyset \\), lo cual es un requisito fundamental para que sea una topología."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{2\\}, \\{1,2\\}, \\{1,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "La familia dada no es una topología porque no incluye \\( \\emptyset \\) y no es cerrada bajo intersecciones finitas. Por ejemplo, la intersección de \\( \\{1,2\\} \\) y \\( \\{1,3\\} \\) es \\( \\{1\\} \\), que no pertenece a la familia."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{3\\}, \\{2,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "La familia dada es una topología porque contiene \\( \\emptyset \\) y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Sean \\( \\mathcal{T}_1 \\) y \\( \\mathcal{T}_2 \\) dos topologías en un conjunto \\( X \\). La intersección \\( \\mathcal{T}_1 \\cap \\mathcal{T}_2 \\) es una topología.",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "La intersección de dos topologías es una topología porque satisface las propiedades necesarias: \\( \\emptyset \\) y \\( X \\) pertenecen a \\( \\mathcal{T}_1 \\cap \\mathcal{T}_2 \\), y esta es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{1,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "La familia dada es una topología porque cumple con las propiedades necesarias: contiene \\( \\emptyset \\) y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{2\\}, \\{1,3\\}, \\{2,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "La familia dada no es una topología porque no incluye \\( \\emptyset \\) y \\( X \\), lo que viola los axiomas de una topología."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{3\\}, \\{1,2\\}, \\{1,3\\}, \\{2,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "La familia dada es una topología porque contiene \\( \\emptyset \\) y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{1, 3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "La familia dada no es una topología porque no contiene \\( \\emptyset \\), \\( X \\), ni cumple las propiedades de cierre bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{3\\}, \\{2, 3\\}, \\{1, 3\\}, \\{1, 2, 3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "La familia dada es una topología porque contiene \\( \\emptyset \\) y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{1, 2, 3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "La familia dada cumple los axiomas de una topología: contiene \\( \\emptyset \\) y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{1\\}, \\{3\\}, \\{1, 2\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "La familia dada no es una topología porque no contiene \\( \\emptyset \\) ni \\( X \\), y no es cerrada bajo uniones arbitrarias ni intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{1\\}, \\{3\\}, \\{1, 3\\}, \\{2, 3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "La familia dada no cumple con los axiomas de una topología, ya que no es cerrada bajo uniones arbitrarias ni intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{1\\}, \\{1, 2\\}, \\{1, 2, 3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "La familia dada es una topología porque contiene \\( \\emptyset \\) y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Sea \\( X \\) un conjunto no vacío. Siempre podemos definir una topología sobre \\( X \\).",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "Es posible definir una topología sobre cualquier conjunto no vacío, como la topología indiscreta \\( \\{\\emptyset, X\\} \\)."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{\\{1\\}, \\{1, 3\\}, \\{1, 2, 3\\}\\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "La respuesta es incorrecta porque \\( \\{\\emptyset, \\{1\\}, \\{1, 3\\}, \\{1, 2, 3\\}\\} \\) sería una topología, no \\( \\{\\{1\\}, \\{1, 3\\}, \\{1, 2, 3\\}\\} \\). Debe incluir el conjunto vacío para ser una topología."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{\\emptyset, \\{1\\}, \\{2\\}, \\{1, 2\\}, \\{1, 3\\}, \\{2, 3\\}\\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "No cumple con los axiomas de una topología, ya que la intersección de \\( \\{1, 2\\} \\) y \\( \\{1, 3\\} \\), que es \\( \\{1\\} \\), no pertenece a la familia."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{\\{1, 2\\}, \\{1, 2, 3\\}\\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "La familia no contiene el conjunto vacío, por lo que no cumple el primer axioma de una topología."
    },
    {
        "Pregunta": "En un espacio topológico la unión finita de abiertos es abierto.",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "Cualquier unión, finita o infinita, de conjuntos abiertos en un espacio topológico es también un conjunto abierto por definición de topología."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{\\emptyset, \\{1, 2, 3\\}\\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "La familia cumple con los axiomas de una topología: contiene el conjunto vacío y el conjunto total, es cerrada bajo uniones e intersecciones (trivialmente en este caso porque no hay más conjuntos)."
    },
    {
        "Pregunta": "Si \\( \\mathcal{T} \\subseteq \\mathcal{P}(X) \\) es una familia de subconjuntos de un conjunto \\( X \\), y queremos probar que es topología debemos probar (entre otras cosas) que una intersección finita de elementos de \\( \\mathcal{T} \\) sigue perteneciendo a \\( \\mathcal{T} \\). Pero es suficiente probarlo para la intersección de dos.",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "Es correcto porque la intersección de un número finito de conjuntos puede ser descompuesta como una serie de intersecciones binarias, debido a la asociatividad de la intersección."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{\\emptyset, \\{3\\}, \\{1, 3\\}, \\{1, 2, 3\\}\\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "La familia \\( \\{\\emptyset, \\{3\\}, \\{1, 3\\}, \\{1, 2, 3\\}\\} \\) cumple con los axiomas de una topología: incluye el conjunto vacío y el total, es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{1\\}, \\{2\\}, \\{3\\}, \\{2,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "La familia no es una topología porque no incluye todas las uniones posibles de sus conjuntos. Por ejemplo, la unión de \\( \\{1\\} \\cup \\{2,3\\} \\) no pertenece a la familia."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{3\\}, \\{1,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "No es una topología porque no satisface la condición de cierre bajo intersecciones finitas y uniones arbitrarias de sus elementos."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{3\\}, \\{2,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "Esta familia satisface las condiciones de ser una topología: contiene el conjunto vacío y \\( X \\), y es cerrada bajo intersecciones finitas y uniones arbitrarias."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{1\\}, \\{1,2\\}, \\{1,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "Incluye el conjunto vacío y el conjunto total \\( X \\), y es cerrada bajo intersecciones finitas y uniones arbitrarias."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{1\\}, \\{2,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "Cumple las condiciones de una topología: contiene el conjunto vacío, \\( X \\), y es cerrada bajo uniones e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{1\\}, \\{1,2\\}, \\{1,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "Esta familia cumple con las condiciones necesarias para ser una topología en \\( X \\)."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{1\\}, \\{1,3\\}, \\{2,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "No es una topología porque no contiene el conjunto vacío ni el conjunto total \\( X \\)."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{2, 3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "La familia \\( \\{\\{2, 3\\}\\} \\) no cumple con las propiedades de una topología, ya que no incluye al conjunto vacío ni al conjunto total \\( X \\), que son requisitos fundamentales para ser una topología."
    },
    {
        "Pregunta": "Sean \\( \\mathcal{T}_1 \\) y \\( \\mathcal{T}_2 \\) dos topologías en un conjunto \\( X \\). La unión \\( \\mathcal{T}_1 \\cup \\mathcal{T}_2 \\) es una topología.",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "La unión de dos topologías no necesariamente forma una topología, ya que podría no ser cerrada bajo intersección finita o unión arbitraria, lo cual es un requisito fundamental de una topología."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{3\\}, \\{1, 3\\}, \\{2, 3\\}, \\{1, 2, 3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "Esta familia no cumple las propiedades de una topología, ya que la intersección de ciertos conjuntos no pertenece a la familia (por ejemplo, la intersección de \\( \\{1, 3\\} \\) y \\( \\{2, 3\\} \\) no está en la familia)."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{2\\}, \\{3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "Esta familia no es una topología porque no contiene el conjunto vacío ni el conjunto total \\( X \\). Además, no está cerrada bajo uniones ni intersecciones."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{3\\}, \\{2, 3\\}, \\{1, 3\\}, \\{1, 2, 3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "Esta familia cumple con las propiedades de una topología: contiene al conjunto vacío y al conjunto total, y está cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "Esta no es una topología válida ya que no contiene el conjunto total \\( X \\)."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{1\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "Esta no es una topología válida ya que no contiene el conjunto total \\( X \\)."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{3\\}, \\{1,2\\}, \\{2,3\\}, \\{1,2,3\\} \\} \\) es una topología.",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "No cumple con los axiomas de una topología. Por ejemplo, la intersección de \\( \\{3\\} \\) y \\( \\{1, 2\\} \\) no pertenece a la familia, lo que viola uno de los axiomas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{3\\}, \\{1\\}, \\{2,3\\}, \\{1,3\\}, \\{1,2,3\\} \\) es una topología.",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "Cumple con los axiomas de una topología: contiene el conjunto vacío y \\( X \\), es cerrada bajo uniones arbitrarias y la intersección finita de sus elementos pertenece a la familia."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{3\\}, \\{1, 2\\} \\} \\) es una topología.",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "No contiene al conjunto vacío ni a \\( X \\), por lo que no satisface los axiomas de una topología."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{1\\}, \\{1, 2\\}, \\{1,3\\}, \\{1,2,3\\} \\} \\) es una topología.",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "Satisface los axiomas de una topología: contiene el vacío y \\( X \\), es cerrada bajo uniones arbitrarias y bajo intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{1\\}, \\{1, 2\\}, \\{1, 3\\}, \\{1,2,3\\} \\} \\) es una topología.",
        "Respuesta": "Verdadero",
        "Tema": 3,
        "Explicación": "Cumple con todos los axiomas requeridos para ser una topología, incluyendo el vacío, \\( X \\), uniones y la cerradura bajo intersecciones finitas."
    },
    {
        "Pregunta": "En un espacio topológico la intersección arbitraria de abiertos nunca puede ser un conjunto abierto.",
        "Respuesta": "Falso",
        "Tema": 3,
        "Explicación": "En la topología discreta, cualquier conjunto es abierto, por lo que la intersección arbitraria de abiertos también es un conjunto abierto."
    },
    {
        "Pregunta": "¿La familia \\( \\{(a,b) \\cup (c,d) \\ | \\ a,b,c,d \\in \\mathbb{R}\\ \\text{y}\\ a < b, c < d \\} \\) es base de la topología usual?",
        "Respuesta": "Verdadero",
        "Tema": 4,
        "Explicación": "Dado un punto de cualquier abierto, es obvio que hay una unión de dos intervalos entre el punto y el abierto. Esta colección cumple con las propiedades necesarias para ser una base."
    },
    {
        "Pregunta": "¿La familia \\( \\{(a,2a) \\ | \\ a \\in \\mathbb{Q} \\} \\) es base de la topología usual?",
        "Respuesta": "Falso",
        "Tema": 4,
        "Explicación": "La familia no cubre todos los puntos de los abiertos de la topología usual, ya que los extremos dependen de \\( a \\in \\mathbb{Q} \\), y los puntos irracionales no están adecuadamente representados."
    },
    {
        "Pregunta": "Sea \\(A\\) un anillo. ¿La familia de los ideales de \\(A\\) es una subbase de alguna topología sobre \\(A\\)?",
        "Respuesta": "Verdadero",
        "Tema": 4,
        "Explicación": "Cualquier familia de subconjuntos de un conjunto puede ser una subbase de alguna topología. Esto incluye a los ideales de \\(A\\)."
    },
    {
        "Pregunta": "¿La familia \\( \\{[a,b] \\ | \\ a,b \\in \\mathbb{R}\\} \\) es base de la topología usual?",
        "Respuesta": "Falso",
        "Tema": 4,
        "Explicación": "Los intervalos cerrados \\([a,b]\\) no son abiertos en la topología usual. Por lo tanto, no pueden formar una base de dicha topología."
    },
    {
        "Pregunta": "Sea \\((X,\\mathcal{T})\\) un espacio topológico y \\(\\mathcal{B}_1, \\mathcal{B}_2\\) dos bases de este espacio. ¿La familia de subconjuntos \\(\\mathcal{B} = \\{ B_1 \\cap B_2 \\ | \\ B_i \\in \\mathcal{B}_i \\}\\) es también un base?",
        "Respuesta": "Verdadero",
        "Tema": 4,
        "Explicación": "Es obvio que \\( \\mathcal{B} \\subseteq \\mathcal{T} \\). Además, para cualquier \\(U \\in \\mathcal{T}\\) y \\(x \\in U\\), sabemos que existen \\(B_i \\in \\mathcal{B}_i\\) tales que \\(x \\in B_i \\subseteq U\\) con \\(i = 1, 2\\). Luego \\(x \\in B_1 \\cap B_2 \\subseteq U\\). Por lo tanto, \\(\\mathcal{B}\\) forma una base."
    },
    {
        "Pregunta": "¿La familia \\( \\{[a,b] \\ | \\ a,b \\in \\mathbb{R}\\} \\cup \\{(a,b] \\ | \\ a,b \\in \\mathbb{R}\\} \\) es subbase de la topología discreta sobre los reales?",
        "Respuesta": "Verdadero",
        "Tema": 4,
        "Explicación": "Dado \\( \\{a\\} = [a-1, a] \\cap [a, a+1] \\), cada singleton puede formarse como intersección de elementos de la familia, lo que cumple las condiciones para una subbase de la topología discreta."
    },
    {
        "Pregunta": "Sea \\(V\\) un espacio vectorial. ¿La familia de los subespacios vectoriales de \\(V\\) es una subbase de alguna topología sobre \\(V\\)?",
        "Respuesta": "Verdadero",
        "Tema": 4,
        "Explicación": "Cualquier familia de subconjuntos de \\(V\\), incluyendo los subespacios vectoriales, puede ser subbase de alguna topología en \\(V\\)."
    },
    {
        "Pregunta": "¿La familia de subconjuntos de los reales \\( \\{(a,b) \\ | \\ a,b > 0\\} \\) es base de alguna topología?",
        "Respuesta": "Falso",
        "Tema": 4,
        "Explicación": "Esta familia no cubre todo \\(\\mathbb{R}\\) ni satisface las condiciones necesarias para ser una base, ya que depende de \\(a,b > 0\\)."
    },
    {
        "Pregunta": "¿La familia de subconjuntos de los reales \\( \\{[a,b] \\ | \\ a < b\\} \\) es base de alguna topología?",
        "Respuesta": "Falso",
        "Tema": 4,
        "Explicación": "La intersección \\([0,1] \\cap [1,2]\\) no produce ningún intervalo cerrado de la familia, por lo que no satisface las condiciones para ser base."
    },
    {
        "Pregunta": "¿Una base de entornos de \\(x\\) en \\((X, \\mathcal{T})\\) es una familia \\(\\beta\\) de entornos de \\(x\\) tal que cualquier entorno \\(N\\) de \\(x\\) está contenido en algún elemento de \\(\\beta\\)?",
        "Respuesta": "Falso",
        "Tema": 4,
        "Explicación": "En la topología usual de \\(\\mathbb{R}\\), esta condición no es suficiente para garantizar que \\(\\beta\\) sea una base de entornos para todos los puntos. Hay ejemplos donde esta propiedad falla."
    },
    {
        "Pregunta": "En la topología usual sobre los reales, ¿la familia \\( \\{(-\\frac{1}{n}, \\frac{1}{n}) \\cup \\{n\\} \\ | \\ n \\in \\mathbb{N} \\} \\) es una base de entornos de \\(0\\)?",
        "Respuesta": "Falso",
        "Tema": 4,
        "Explicación": "Ninguno de esos entornos está contenido en \\((-\\frac{1}{2}, \\frac{1}{2})\\), lo cual viola la definición de una base de entornos para \\(0\\) en la topología usual."
    },
    {
        "Pregunta": "¿Una base de entornos de \\(x\\) en \\((X, \\mathcal{T})\\) es una familia \\(\\beta\\) de entornos de \\(x\\) tal que para cualquier entorno \\(N\\) de \\(x\\), existe un elemento de \\(\\beta\\) contenido en \\(N\\)?",
        "Respuesta": "Verdadero",
        "Tema": 4,
        "Explicación": "Esto es exactamente la definición de una base de entornos. Cada entorno de \\(x\\) contiene al menos un elemento de \\(\\beta\\)."
    },
    {
        "Pregunta": "Sea \\((X, \\mathcal{T})\\) un espacio topológico y \\(\\mathcal{B}_1, \\mathcal{B}_2\\) dos bases de este espacio. ¿La intersección \\(\\mathcal{B}_1 \\cap \\mathcal{B}_2\\) es base de \\(\\mathcal{T}\\)?",
        "Respuesta": "Falso",
        "Tema": 4,
        "Explicación": "La intersección \\(\\mathcal{B}_1 \\cap \\mathcal{B}_2\\) no necesariamente cubre todo el espacio \\(X\\), por lo que no cumple con las propiedades necesarias para ser una base de \\(\\mathcal{T}\\)."
    },
    {
        "Pregunta": "Considera el conjunto \\(X = \\{a, b, c, d\\}\\). ¿La familia \\(\\{\\{a\\}, \\{b\\}, \\{a, b, c\\}, \\{b, c, d\\}\\}\\) es una base de alguna topología?",
        "Respuesta": "Falso",
        "Tema": 4,
        "Explicación": "El conjunto \\(c \\in \\{a, b, c\\} \\cap \\{b, c, d\\}\\) no tiene ningún conjunto intermedio en la familia, lo cual viola las condiciones para ser una base."
    },
    {
        "Pregunta": "Sea \\((X, \\mathcal{T})\\) un espacio topológico y \\(\\mathcal{B}_1, \\mathcal{B}_2\\) dos bases de este espacio. ¿La unión \\(\\mathcal{B}_1 \\cup \\mathcal{B}_2\\) es base de \\(\\mathcal{T}\\)?",
        "Respuesta": "Verdadero",
        "Tema": 4,
        "Explicación": "\\(\\mathcal{B}_1 \\cup \\mathcal{B}_2 \\subseteq \\mathcal{T}\\), y además, es obvio que cualquier abierto puede ser representado como unión de elementos de \\(\\mathcal{B}_1 \\cup \\mathcal{B}_2\\) (bastaría con los elementos de una de las bases)."
    },
    {
        "Pregunta": "Sea \\(X\\) un conjunto y \\(\\mathcal{B}_i\\) es base de una topología \\(\\mathcal{T}_i\\) en \\(X\\) (con \\(i = 1, 2\\)). ¿Existe una topología \\(\\mathcal{T}\\) tal que \\(\\mathcal{B} = \\{B_1 \\cap B_2 \\ | \\ B_i \\in \\mathcal{B}_i, i \\in \\{1,2\\}\\}\\) es una base de esa topología?",
        "Respuesta": "Verdadero",
        "Tema": 4,
        "Explicación": "Veamos que cumple las condiciones de base: \\(\\text{(B1)}\\) y \\(\\text{(B2)}\\). Sea \\(x \\in X\\), entonces existe \\(B_i \\in \\mathcal{B}_i\\) tal que \\(x \\in B_i\\) para todo \\(i = 1, 2\\). Luego, la unión de todos los elementos de \\(\\mathcal{B}\\) es \\(X\\). Además, para cada \\(x \\in B_1 \\cap B_2\\), se cumple \\(x \\in B_k\\) con \\(B_k \\subseteq B_1 \\cap B_2\\), por lo que \\(\\mathcal{B}\\) es base de una topología."
    },
    {
        "Pregunta": "Sea \\(X\\) un conjunto y \\(\\mathcal{B}_i\\) es base de una topología \\(\\mathcal{T}_i\\) en \\(X\\) (con \\(i = 1, 2\\)). ¿Existe una topología \\(\\mathcal{T}\\) tal que \\(\\mathcal{B}_1 \\cup \\mathcal{B}_2\\) es una base de esa topología?",
        "Respuesta": "Falso",
        "Tema": 4,
        "Explicación": "Aunque \\(\\mathcal{B}_1\\) y \\(\\mathcal{B}_2\\) sean bases separadas, la unión de ambas no necesariamente cubre todas las propiedades necesarias para formar una base conjunta en una topología única."
    },
    {
        "Pregunta": "Si a una base de un espacio topológico se le añaden más abiertos, ¿se obtiene otra base del mismo espacio topológico?",
        "Respuesta": "Verdadero",
        "Tema": 4,
        "Explicación": "Si un abierto es unión de elementos de la base original, con más elementos abiertos añadidos también se puede representar como unión, cumpliendo las condiciones de una base."
    },
    {
        "Pregunta": "Considera el conjunto \\(X = \\{a, b, c, d\\}\\). ¿La familia \\(\\{\\{a\\}, \\{b, c\\}, \\{a, b, c\\}, \\{b, c, d\\}\\}\\) es una base de alguna topología?",
        "Respuesta": "Verdadero",
        "Tema": 4,
        "Explicación": "Se cumplen las condiciones de base: \\(\\text{(B1)}\\) cubre \\(X\\) y \\(\\text{(B2)}\\) permite representar la intersección de elementos como unión de otros elementos en la familia."
    },
    {
        "Pregunta": "¿Una familia \\( \\mathcal{B} \\) de subconjuntos de un conjunto \\( X \\) es base de una topología si y solo si \\( \\bigcup \\mathcal{B} = X \\) y para cada \\( B_1, B_2 \\in \\mathcal{B} \\), entonces \\( B_1 \\cap B_2 \\in \\mathcal{B} \\)?",
        "Respuesta": "Falso",
        "Tema": 4,
        "Explicación": "Las bolas euclídeas del plano no cumplen esta condición (la intersección no necesariamente pertenece a \\( \\mathcal{B} \\)) y aun así son base de la topología usual."
    },
    {
        "Pregunta": "Sea \\( \\mathbb{N} \\) con la topología usual. ¿La familia de los subconjuntos \\( \\{\\{n, m\\} \\ | \\ n, m \\in \\mathbb{N}, n \\neq m\\} \\) es subbase de este espacio topológico?",
        "Respuesta": "Verdadero",
        "Tema": 4,
        "Explicación": "\\( \\{n\\} = \\{n, n+1\\} \\cap \\{n, n+2\\} \\), por lo que cada singleton puede representarse a partir de elementos de la familia, cumpliendo con las condiciones de subbase."
    },
    {
        "Pregunta": "¿La familia \\( \\{(a, b) \\cup (2a, 2b) \\ | \\ a, b \\in \\mathbb{R}; a < b \\} \\) es base de la topología usual?",
        "Respuesta": "Falso",
        "Tema": 4,
        "Explicación": "Por ejemplo, para el abierto \\((1, 2)\\) y el punto \\(\\frac{3}{2}\\), ningún elemento de la forma \\((a, b) \\cup (2a, 2b)\\) puede contener \\(\\frac{3}{2}\\) y estar contenido completamente en \\((1, 2)\\)."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{a, b, c, d\\} \\). ¿La familia \\( \\{\\{b\\}, \\{a, b, c\\}, \\{b, c, d\\}\\} \\) es una base de alguna topología?",
        "Respuesta": "Falso",
        "Tema": 4,
        "Explicación": "Esta familia no satisface las condiciones de base, ya que no cubre todos los elementos de \\( X \\) (por ejemplo, \\(a\\) no está contenido en ningún conjunto)."
    },
    {
        "Pregunta": "Sea \\( A \\) un anillo. ¿La familia de los ideales de \\( A \\) es una base de alguna topología sobre \\( A \\)?",
        "Respuesta": "Verdadero",
        "Tema": 4,
        "Explicación": "Basta observar que \\( A \\) es un ideal (se cumple la condición \\( \\text{(B1)} \\)), y la intersección de ideales también es un ideal (se cumple la condición \\( \\text{(B2)} \\))."
    },
    {
        "Pregunta": "¿La familia \\( \\{(a, a+1) \\ | \\ a \\in \\mathbb{Q}\\} \\) es base de la topología usual?",
        "Respuesta": "Falso",
        "Tema": 4,
        "Explicación": "Podríamos tomar un intervalo con extremos racionales, y no hay forma de escribir dicho intervalo como unión de elementos de \\( \\{(a, a+1) \\ | \\ a \\in \\mathbb{Q}\\} \\)"
    },
    {
        "Pregunta": "¿La familia \\( \\{(a, b) \\cup (a+\\varepsilon, b+\\varepsilon) \\ | \\ a, b, \\varepsilon \\in \\mathbb{R}, a < b \\} \\) es base de la topología usual?",
        "Respuesta": "Verdadero",
        "Tema": 4,
        "Explicación": "Dado que \\(\\varepsilon = 0\\) es permitido, los intervalos abiertos pueden escribirse en su forma estándar. Esto cumple las condiciones de base de la topología usual."
    },
    {
        "Pregunta": "Considera el conjunto \\(X = \\{a, b, c, d\\}\\). ¿La familia \\(\\{\\{d\\}, \\{b, c\\}, \\{a, b, c\\}, \\{b, c, d\\}\\}\\) es una base de alguna topología?",
        "Respuesta": "Verdadero",
        "Tema": 4,
        "Explicación": "Se cumplen las condiciones \\(\\text{(B1)}\\) (cubre \\(X\\)) y \\(\\text{(B2)}\\) (las intersecciones de los conjuntos se pueden expresar como uniones de conjuntos en la familia)."
    },
    {
        "Pregunta": "Sea \\(f: X \\to \\mathbb{R}\\) una aplicación, siendo \\(X\\) un espacio topológico y considerando la topología usual en \\(\\mathbb{R}\\). Si para todos los pares de números reales \\((a, b)\\) con \\(a < b\\), se cumple que \\(f^{-1}((a, b))\\) es abierto en \\(X\\), ¿entonces \\(f\\) es continua?",
        "Respuesta": "Verdadero",
        "Tema": 4,
        "Explicación": "La condición de preimagen abierta para todos los intervalos abiertos \\((a, b)\\) caracteriza la continuidad en la topología usual de \\(\\mathbb{R}\\)."
    },
    {
        "Pregunta": "Sea \\(X\\) un conjunto y \\(\\mathcal{B}_i\\) base de una topología \\(\\mathcal{T}_i\\) en \\(X\\) (con \\(i = 1, 2\\)). ¿Existe una topología \\(\\mathcal{T}\\) tal que \\(\\mathcal{B}_1 \\cap \\mathcal{B}_2\\) es una base de esa topología?",
        "Respuesta": "Falso",
        "Tema": 4,
        "Explicación": "Considera \\(\\mathbb{R}^2\\) con bases formadas por rectas horizontales y verticales. Su intersección es vacía, lo que no cumple \\(\\text{(B1)}\\), por lo que no puede ser base."
    },
    {
        "Pregunta": "Sea \\(X\\) un espacio topológico discreto. ¿La familia de los subconjuntos finitos es una base para esta topología?",
        "Respuesta": "Verdadero",
        "Tema": 4,
        "Explicación": "Dentro de esa familia están los conjuntos unipuntuales, que son suficientes para generar todos los subconjuntos de \\(X\\), cumpliendo así las condiciones para ser una base."
    },
    {
        "Pregunta": "¿La familia \\(\\{[a, b) \\ | \\ a, b \\in \\mathbb{R}, a < b\\}\\) es base de la topología discreta sobre \\(\\mathbb{R}\\)?",
        "Respuesta": "Falso",
        "Tema": 4,
        "Explicación": "Todos los conjuntos de esa familia son infinitos y no pueden estar contenidos en un conjunto unipuntual, requisito indispensable para la topología discreta."
    },
    {
        "Pregunta": "En la topología usual sobre los reales, ¿la familia \\(\\{(-\\frac{1}{n}, \\frac{1}{n}) \\cup \\{\\frac{2}{n}\\} \\ | \\ n \\in \\mathbb{N}\\}\\) es una base de entornos de \\(0\\)?",
        "Respuesta": "Verdadero",
        "Tema": 4,
        "Explicación": "Cumple la definición de una base de entornos para \\(0\\), ya que cada punto cercano a \\(0\\) puede estar contenido en un elemento de la familia."
    },
    {
        "Pregunta": "¿La familia \\(\\{(a, b) \\cup (c, d) \\ | \\ a, b, c, d \\in \\mathbb{Q}, a < b, c < d\\}\\) es base de la topología usual?",
        "Respuesta": "Verdadero",
        "Tema": 4,
        "Explicación": "Dado un punto de cualquier abierto, es obvio que hay una unión de dos intervalos con extremos racionales entre el punto y el abierto, cumpliendo las condiciones de una base."
    },
    {
        "Pregunta": "¿Una familia \\(\\mathcal{B}\\) de abiertos de un espacio topológico \\((X, \\mathcal{T}_X)\\) es base de \\((X, \\mathcal{T}_X)\\) si y solo si \\(\\bigcup \\mathcal{B} = X\\), y para cada \\(B_1, B_2 \\in \\mathcal{B}\\) y \\(x \\in B_1 \\cap B_2\\), existe \\(B_3 \\in \\mathcal{B}\\) tal que \\(x \\in B_3 \\subseteq B_1 \\cap B_2\\)?",
        "Respuesta": "Falso",
        "Tema": 4,
        "Explicación": "Los intervalos abiertos, que son abiertos de Sorgenfrey, cumplen estas condiciones, pero no son base de la topología de Sorgenfrey."
    },
    {
        "Pregunta": "Sea \\((X, \\mathcal{T})\\) un espacio topológico y \\(\\mathcal{B}_1, \\mathcal{B}_2\\) dos bases de este espacio. ¿La familia de abiertos \\(\\mathcal{B} = \\{B_1 \\cup B_2 \\ | \\ B_i \\in \\mathcal{B}_i\\}\\) es también una base?",
        "Respuesta": "Verdadero",
        "Tema": 4,
        "Explicación": "Es obvio que \\(\\mathcal{B} \\subseteq \\mathcal{T}\\). Además, para cualquier \\(U \\in \\mathcal{T}\\) y \\(x \\in U\\), existen \\(B_i \\in \\mathcal{B}_i\\) tal que \\(x \\in B_i \\subseteq U\\) con \\(i = 1, 2\\). Por lo tanto, \\(x \\in B_1 \\cup B_2 \\subseteq U\\), cumpliendo las condiciones de base."
    },
    {
        "Pregunta": "Sea \\(X\\) un conjunto y \\(\\mathcal{B}_i\\) base de una topología \\(\\mathcal{T}_i\\) en \\(X\\) (con \\(i = 1, 2\\)). ¿Existe una topología \\(\\mathcal{T}\\) tal que \\(\\mathcal{B} = \\{B_1 \\cup B_2 \\ | \\ B_i \\in \\mathcal{B}_i\\}\\) es una base de esa topología?",
        "Respuesta": "Falso",
        "Tema": 4,
        "Explicación": "En \\(\\mathbb{R}^2\\), considera las bases \\(\\mathcal{B}_H\\) y \\(\\mathcal{B}_V\\) formadas por rectas horizontales y verticales respectivamente. La familia \\(\\mathcal{B}\\) formada por las uniones de estas rectas no es una base, ya que la intersección de dos elementos en \\(\\mathcal{B}\\) no puede contener una cruz completa."
    },
    {
        "Pregunta": "¿La familia \\(\\{[a, b) \\ | \\ a, b \\in \\mathbb{R}\\} \\cup \\{(a, b] \\ | \\ a, b \\in \\mathbb{R}\\}\\) es subbase de la topología usual sobre los reales?",
        "Respuesta": "Falso",
        "Tema": 4,
        "Explicación": "Los conjuntos de esta familia no son abiertos, por lo que no cumplen las condiciones para ser una subbase de la topología usual."
    },
    {
        "Pregunta": "Sea \\(V\\) un espacio vectorial. ¿La familia de los subespacios vectoriales de \\(V\\) es una base de alguna topología sobre \\(V\\)?",
        "Respuesta": "Verdadero",
        "Tema": 4,
        "Explicación": "Basta observar que \\(V\\) es un subespacio vectorial (cumple \\(\\text{(B1)}\\)) y que la intersección de subespacios vectoriales también es un subespacio vectorial (cumple \\(\\text{(B2)}\\))."
    },
    {
        "Pregunta": "¿La familia de las rectas en el plano es una base de alguna topología?",
        "Respuesta": "Falso",
        "Tema": 4,
        "Explicación": "La intersección de dos rectas es, en general, un punto. Los puntos no contienen ninguna recta, por lo que no cumple las condiciones necesarias para ser una base."
    },
    {
        "Pregunta": "Sea \\(X\\) un conjunto no vacío y \\(x_0 \\in X\\). Considera la topología del punto incluido dada por \\(\\mathcal{T}_{x_0} = \\{U \\subseteq X \\ | \\ x_0 \\in U\\} \\cup \\{\\emptyset\\}\\). ¿La familia \\(\\{\\{x_0, x\\} \\ | \\ x \\in X\\}\\) es base de \\(\\mathcal{T}_{x_0}\\)?",
        "Respuesta": "Verdadero",
        "Tema": 4,
        "Explicación": "Si \\(U \\in \\mathcal{T}_{x_0}\\) y \\(x \\in U\\), entonces \\(\\{x_0, x\\} \\subset U\\), cumpliendo la definición de base."
    },
    {
        "Pregunta": "Considera el conjunto \\(X = \\{a, b, c, d\\}\\) y la familia \\(\\{\\{b, c\\}, \\{a, b, c\\}, \\{b, c, d\\}\\}\\). ¿Es una base de alguna topología?",
        "Respuesta": "Verdadero",
        "Tema": 4,
        "Explicación": "Se cumplen las condiciones \\(\\text{(B1)}\\) y \\(\\text{(B2)}\\) para ser una base de topología, ya que cualquier conjunto abierto se puede expresar como una unión de elementos de la familia."
    },
    {
        "Pregunta": "¿Las bases de entornos han de ser infinitas?",
        "Respuesta": "Falso",
        "Tema": 4,
        "Explicación": "En la topología indiscreta no ocurre, ya que un solo entorno (el conjunto completo) basta como base."
    },
    {
        "Pregunta": "En la topología usual sobre los reales, ¿la familia \\(\\{[-\\frac{1}{n}, \\frac{1}{n}] \\ | \\ n \\in \\mathbb{N}\\}\\) es una base de entornos de \\(0\\)?",
        "Respuesta": "Verdadero",
        "Tema": 4,
        "Explicación": "Cumple la definición de base de entornos de \\(0\\), ya que cada intervalo contiene a \\(0\\) y puede cubrir cualquier entorno más pequeño alrededor de \\(0\\)."
    },
    {
        "Pregunta": "La función identidad entre dos espacios topológicos es siempre continua.",
        "Respuesta": "Falso",
        "Tema": 5,
        "Explicación": "Para que la identidad esté definida, el conjunto subyacente debe ser el mismo, pero no necesariamente la topología. Por ejemplo, en \\( X = \\{0, 1\\} \\), con la topología indiscreta \\( \\mathcal{I} = \\{\\emptyset, X\\} \\) y la topología de Sierpinski \\( \\mathcal{S} \\), la identidad \\( (X, \\mathcal{I}) \\to (X, \\mathcal{S}) \\) no es continua. Esto se debe a que la preimagen de un abierto en \\( \\mathcal{S} \\) puede no ser un abierto en \\( \\mathcal{I} \\)."
    },
    {
        "Pregunta": "Sea \\( C \\) un cerrado de un espacio topológico \\( X \\). Si \\( A \\) es abierto en \\( C \\) como subespacio, entonces no puede ser abierto en \\( X \\).",
        "Respuesta": "Falso",
        "Tema": 5,
        "Explicación": "Por ejemplo, si \\( C = [0, 1] \\) y \\( A = (0, 1) \\) en la recta real, \\( A \\) es abierto en \\( C \\) como subespacio (porque \\( A \\cap C = (0, 1) \\)), pero también es abierto en \\( X \\) (la recta real) bajo la topología usual. Esto demuestra que \\( A \\) puede ser abierto tanto en \\( C \\) como en \\( X \\)."
    },
    {
        "Pregunta": "Una aplicación \\( f : (X, \\mathcal{T}_X) \\to (Y, \\mathcal{T}_Y) \\) entre espacios topológicos es continua si \\( \\forall U \\in \\mathcal{T}_Y, f^{-1}(U) \\in \\mathcal{T}_X \\).",
        "Respuesta": "Verdadero",
        "Tema": 5,
        "Explicación": "Por definición, una función \\( f \\) entre dos espacios topológicos es continua si la preimagen de cualquier conjunto abierto en el espacio de llegada \\( (Y, \\mathcal{T}_Y) \\) es un conjunto abierto en el espacio de partida \\( (X, \\mathcal{T}_X) \\). Esto cumple exactamente lo indicado en la afirmación."
    },
    {
        "Pregunta": "La intersección arbitraria de cerrados es un conjunto cerrado.",
        "Respuesta": "Verdadero",
        "Tema": 5,
        "Explicación": "En un espacio topológico, un conjunto se considera cerrado si su complemento es abierto. Dado que la unión de conjuntos abiertos es abierta, el complemento de una intersección arbitraria de conjuntos cerrados sigue siendo abierto, lo que garantiza que la intersección sea cerrada."
    },
    {
        "Pregunta": "Si la identidad \\( 1_X : (X, \\mathcal{T}_1) \\to (X, \\mathcal{T}_2) \\) es continua, entonces \\( \\mathcal{T}_2 \\subseteq \\mathcal{T}_1 \\).",
        "Respuesta": "Verdadero",
        "Tema": 5,
        "Explicación": "Por definición de continuidad, una función es continua si la preimagen de cualquier conjunto abierto en el codominio pertenece a la topología del dominio. En este caso, si \\( U \\in \\mathcal{T}_2 \\), entonces \\( 1_X^{-1}(U) = U \\in \\mathcal{T}_1 \\), lo que implica que \\( \\mathcal{T}_2 \\subseteq \\mathcal{T}_1 \\)."
    },
    {
        "Pregunta": "Si un conjunto es abierto, no puede ser cerrado.",
        "Respuesta": "Falso",
        "Tema": 5,
        "Explicación": "En un espacio topológico, un conjunto puede ser simultáneamente abierto y cerrado (conocido como 'clopen') si cumple ambas definiciones. Por ejemplo, en la topología trivial, el conjunto vacío \\( \\emptyset \\) y el espacio completo son tanto abiertos como cerrados."
    },
    {
        "Pregunta": "La unión arbitraria de cerrados es un cerrado.",
        "Respuesta": "Falso",
        "Tema": 5,
        "Explicación": "En un espacio topológico, la unión arbitraria de conjuntos cerrados no siempre es cerrada. Por ejemplo, en \\( \\mathbb{R} \\) con la topología usual, considere \\( \\bigcup_{r \\in (0,1)} [-r, r] = (0,1) \\). Aquí, cada \\( [-r, r] \\) es cerrado, pero su unión \\( (0,1) \\) es abierto, lo que demuestra que la afirmación es falsa."
    },
    {
        "Pregunta": "Una aplicación \\( f : (X, \\mathcal{T}_X) \\to (Y, \\mathcal{T}_Y) \\) entre espacios topológicos es continua si \\( \\forall U \\in \\mathcal{T}_X, f(U) \\in \\mathcal{T}_Y \\).",
        "Respuesta": "Falso",
        "Tema": 5,
        "Explicación": "La continuidad de una función entre espacios topológicos se define mediante la preimagen de los conjuntos abiertos, no la imagen. Por ejemplo, la identidad en \\( \\mathbb{R} \\) con la topología usual en el dominio y la topología discreta en el codominio no es continua bajo esta definición. Por lo tanto, la afirmación es falsa."
    },
    {
        "Pregunta": "Sea \\( C \\) un cerrado de un espacio topológico \\( X \\). Si \\( A \\) es abierto en \\( C \\) como subespacio, entonces no puede ser cerrado en \\( X \\).",
        "Respuesta": "Falso",
        "Tema": 5,
        "Explicación": "En un espacio topológico, un conjunto puede ser cerrado en el espacio completo y abierto en un subespacio. Por ejemplo, si \\( C = [0,1] \\) y \\( A = [0,1] \\) en \\( \\mathbb{R} \\), \\( A \\) es abierto en \\( C \\) como subespacio, pero también es cerrado en \\( \\mathbb{R} \\). Esto demuestra que la afirmación es falsa."
    },
    {
        "Pregunta": "Una aplicación \\( f : (X, \\mathcal{T}_X) \\to (Y, \\mathcal{T}_Y) \\) entre espacios topológicos es continua si \\( \\exists U \\in \\mathcal{T}_X, \\text{ tal que } f(U) \\in \\mathcal{T}_Y \\).",
        "Respuesta": "Falso",
        "Tema": 5,
        "Explicación": "Esta condición es trivialmente cumplida por cualquier función al tomar \\( U = \\emptyset \\), ya que \\( f(\\emptyset) = \\emptyset \\), que es abierto en cualquier topología. Esto no implica que la función sea continua, ya que la continuidad requiere que la preimagen de cualquier conjunto abierto en el codominio sea abierto en el dominio."
    },
    {
        "Pregunta": "Sea \\( C \\) un abierto de un espacio topológico \\( X \\). Si \\( A \\) es abierto en \\( C \\) como subespacio, entonces es abierto en \\( X \\).",
        "Respuesta": "Verdadero",
        "Tema": 5,
        "Explicación": "Si \\( A \\) es \\( C \\)-abierto, entonces \\( A = C \\cap B \\), donde \\( B \\) es un conjunto abierto en \\( X \\). La intersección de dos conjuntos abiertos (\\( C \\) y \\( B \\)) es abierta en \\( X \\), por lo que \\( A \\) también es abierto en \\( X \\)."
    },
    {
        "Pregunta": "Sea \\( C \\) un cerrado de un espacio topológico \\( X \\). Si \\( A \\) es cerrado en \\( C \\) como subespacio, entonces es cerrado en \\( X \\).",
        "Respuesta": "Verdadero",
        "Tema": 5,
        "Explicación": "Si \\( A \\) es \\( C \\)-cerrado, entonces \\( A = C \\cap B \\), donde \\( B \\) es un conjunto cerrado en \\( X \\). La intersección de dos conjuntos cerrados (\\( C \\) y \\( B \\)) es cerrado en \\( X \\), lo que implica que \\( A \\) también es cerrado en \\( X \\)."
    },
    {
        "Pregunta": "Sea \\( f : X \\to Y \\) una función no necesariamente continua entre espacios topológicos. Si \\( A \\subseteq X \\), entonces \\( f \\) es continua si y solo si \\( f|_A \\) es continua.",
        "Respuesta": "Falso",
        "Tema": 5,
        "Explicación": "La continuidad de una función \\( f \\) en el espacio completo \\( X \\) no puede ser inferida únicamente a partir de la continuidad de su restricción \\( f|_A \\) a un subconjunto \\( A \\subseteq X \\). La continuidad de \\( f \\) requiere verificar que la preimagen de cualquier conjunto abierto en \\( Y \\) sea abierto en todo \\( X \\)."
    },
    {
        "Pregunta": "Una aplicación \\( f : (X, \\mathcal{T}_X) \\to (Y, \\mathcal{T}_Y) \\) entre espacios topológicos es continua si \\( \\exists U \\in \\mathcal{T}_Y, \\text{ tal que } f^{-1}(U) \\in \\mathcal{T}_X \\).",
        "Respuesta": "Falso",
        "Tema": 5,
        "Explicación": "Esta condición es trivialmente cumplida por cualquier función al tomar \\( U = \\emptyset \\), ya que \\( f^{-1}(\\emptyset) = \\emptyset \\), que es abierto en cualquier topología. Esto no implica que la función sea continua, ya que la continuidad requiere que la preimagen de todo conjunto abierto en \\( Y \\) sea abierto en \\( X \\)."
    },
    {
        "Pregunta": "Sea \\( X \\) un espacio topológico y \\( \\mathcal{B} \\) una base de ese espacio. \\( C \\subseteq X \\) es cerrado si y solo si \\( \\forall x \\in C, \\exists B \\in \\mathcal{B} \\text{ tal que } x \\in B \\subseteq C. \\)",
        "Respuesta": "Falso",
        "Tema": 5,
        "Explicación": "La propiedad dada describe una condición de vecindades locales de puntos en \\( C \\), pero no caracteriza necesariamente la cerradura de \\( C \\) en el sentido topológico. Para que \\( C \\) sea cerrado, su complemento debe ser abierto, lo cual no es garantizado por esta condición en términos de la base \\( \\mathcal{B} \\)."
    },
    {
        "Pregunta": "Toda biyección continua es un homeomorfismo.",
        "Respuesta": "Falso",
        "Tema": 5,
        "Explicación": "Una biyección continua no necesariamente es un homeomorfismo, ya que para serlo debe cumplir además que su inversa sea continua. Por ejemplo, una biyección continua entre \\( \\mathbb{R} \\) con la topología usual y \\( \\mathbb{R} \\) con una topología distinta (como la trivial) no sería un homeomorfismo."
    },
    {
        "Pregunta": "Los cerrados en \\( \\mathbb{R} \\) son conjuntos acotados.",
        "Respuesta": "Falso",
        "Tema": 5,
        "Explicación": "En \\( \\mathbb{R} \\) con la topología usual, hay conjuntos cerrados no acotados, como el conjunto \\( \\mathbb{R} \\) completo o el intervalo \\( [0, \\infty) \\). La acotación no es una propiedad necesaria para que un conjunto sea cerrado."
    },
    {
        "Pregunta": "Toda aplicación en \\( f : X \\to Y \\) entre espacios topológicos donde \\( Y \\) tiene la topología indiscreta es continua.",
        "Respuesta": "Verdadero",
        "Tema": 5,
        "Explicación": "En la topología indiscreta, los únicos conjuntos abiertos son el vacío y el espacio completo. Esto implica que la preimagen de cualquier conjunto abierto en \\( Y \\) (vacío o el espacio completo) es automáticamente abierto en \\( X \\), lo que garantiza que cualquier función \\( f \\) sea continua."
    },
    {
        "Pregunta": "El conjunto \\((-\\pi, \\pi) \\cap \\mathbb{Q}\\) es cerrado en la topología usual sobre \\( \\mathbb{Q} \\).",
        "Respuesta": "Verdadero",
        "Tema": 5,
        "Explicación": "En la topología usual sobre \\( \\mathbb{Q} \\), el conjunto \\((-\\pi, \\pi) \\cap \\mathbb{Q}\\) es cerrado porque su complemento en \\( \\mathbb{Q} \\) es un conjunto abierto relativo, es decir, es la intersección de un abierto en \\( \\mathbb{R} \\) con \\( \\mathbb{Q} \\)."
    },
    {
        "Pregunta": "Sean \\( X \\) e \\( Y \\) dos espacios topológicos y \\( f : X \\to Y \\) una aplicación continua. Entonces, para cada \\( U \\in \\mathcal{T}_X \\), se tiene que \\( f(U) \\in \\mathcal{T}_Y \\).",
        "Respuesta": "Falso",
        "Tema": 5,
        "Explicación": "La continuidad de una función \\( f \\) asegura que la preimagen de un abierto en \\( Y \\) sea abierto en \\( X \\), pero no necesariamente que la imagen de un abierto en \\( X \\) sea abierto en \\( Y \\). Por ejemplo, la función constante \\( f(x) = 0 \\) es continua, pero la imagen de cualquier conjunto abierto no vacío es \\( \\{0\\} \\), que no es abierto si \\( Y \\) tiene más de un punto y la topología usual."
    },
    {
        "Pregunta": "Una aplicación biyectiva entre dos espacios topológicos es continua.",
        "Respuesta": "Falso",
        "Tema": 5,
        "Explicación": "Una aplicación biyectiva no necesariamente es continua. Un contraejemplo es una biyección entre un conjunto con la topología indiscreta y otro con la topología discreta (si tienen más de un punto). En este caso, la función no preserva la estructura topológica requerida para la continuidad."
    },
    {
        "Pregunta": "Sea \\( h : X \\to Y \\) un homeomorfismo. Entonces \\( h \\) es biyectiva y continua.",
        "Respuesta": "Verdadero",
        "Tema": 5,
        "Explicación": "Es parte de la definición de un homeomorfismo que \\( h \\) sea una función biyectiva, continua y cuya inversa también sea continua. Por lo tanto, la afirmación es verdadera."
    },
    {
        "Pregunta": "Toda biyección continua y abierta es un homeomorfismo.",
        "Respuesta": "Verdadero",
        "Tema": 5,
        "Explicación": "Si una biyección es continua y abierta, entonces su inversa también es continua, cumpliendo la definición de un homeomorfismo. Esto es porque ser 'abierta' implica que las imágenes de los abiertos son abiertos, lo que garantiza la continuidad de la inversa."
    },
    {
        "Pregunta": "Sea \\( (X, \\mathcal{T}) \\) un espacio topológico y \\( A \\) un subespacio de \\( X \\). La inclusión \\( A \\hookrightarrow X \\) es una aplicación continua.",
        "Respuesta": "Verdadero",
        "Tema": 5,
        "Explicación": "Por construcción de la topología subespacio, la inclusión \\( A \\hookrightarrow X \\) es siempre continua, ya que los abiertos en \\( A \\) son intersecciones de abiertos en \\( X \\) con \\( A \\), lo que asegura la continuidad."
    },
    {
        "Pregunta": "Sea \\( X \\) un espacio topológico y \\( \\mathcal{B} \\) una base de ese espacio. \\( C \\subseteq X \\) es cerrado si y solo si \\( \\forall x \\notin C, \\exists B \\in \\mathcal{B} \\text{ tal que } x \\in B \\subseteq X \\setminus C. \\)",
        "Respuesta": "Verdadero",
        "Tema": 5,
        "Explicación": "Por definición, un conjunto \\( C \\) es cerrado si su complemento es abierto. La condición enunciada utiliza la base \\( \\mathcal{B} \\) para caracterizar la apertura del complemento de \\( C \\), lo que implica que \\( C \\) es cerrado."
    },
    {
        "Pregunta": "\\( \\mathbb{Q} \\) es un conjunto cerrado en \\( \\mathbb{R} \\) con la topología discreta.",
        "Respuesta": "Verdadero",
        "Tema": 5,
        "Explicación": "En la topología discreta, todos los subconjuntos son abiertos y cerrados. Por lo tanto, \\( \\mathbb{Q} \\), como subconjunto de \\( \\mathbb{R} \\), es cerrado en la topología discreta."
    },
    {
        "Pregunta": "Una aplicación \\( f : (X, \\mathcal{T}_X) \\to (Y, \\mathcal{T}_Y) \\) que es constante es continua.",
        "Respuesta": "Verdadero",
        "Tema": 5,
        "Explicación": "Si \\( f \\) es constante, su preimagen de cualquier conjunto abierto en \\( Y \\) es el vacío o todo el dominio \\( X \\), ambos de los cuales son abiertos en \\( X \\). Por lo tanto, \\( f \\) es continua."
    },
    {
        "Pregunta": "Toda aplicación en \\( f : X \\to Y \\) entre espacios topológicos donde \\( X \\) tiene la topología discreta es continua.",
        "Respuesta": "Verdadero",
        "Tema": 5,
        "Explicación": "En la topología discreta, todos los subconjuntos de \\( X \\) son abiertos. Por lo tanto, para cualquier conjunto abierto \\( U \\) en \\( Y \\), la preimagen \\( f^{-1}(U) \\) será un subconjunto de \\( X \\) y, por lo tanto, abierto. Esto asegura que \\( f \\) es continua."
    },
    {
        "Pregunta": "El conjunto \\([-\\pi, \\pi] \\cap \\mathbb{Q}\\) es abierto en la topología usual sobre \\( \\mathbb{Q} \\).",
        "Respuesta": "Verdadero",
        "Tema": 5,
        "Explicación": "En la topología usual sobre \\( \\mathbb{Q} \\), el conjunto \\([-\\pi, \\pi] \\cap \\mathbb{Q}\\) es abierto porque es la intersección de un abierto en \\( \\mathbb{R} \\) (\\([-\\pi, \\pi]\\)) con \\( \\mathbb{Q} \\), que es abierto relativo en \\( \\mathbb{Q} \\)."
    },
    {
        "Pregunta": "Una unión de infinitos cerrados nunca es cerrada.",
        "Respuesta": "Falso",
        "Tema": 5,
        "Explicación": "La afirmación es incorrecta, ya que existen uniones de infinitos conjuntos cerrados que son cerradas. Por ejemplo, en \\( \\mathbb{R} \\), la unión de todos los cerrados \\( \\{x\\} \\) para \\( x \\in \\mathbb{R} \\) es \\( \\mathbb{R} \\), que es cerrado. Esto demuestra que una unión infinita de conjuntos cerrados puede ser cerrada."
    },
    {
        "Pregunta": "¿Existe un espacio topológico \\( X \\) en el que todos los subconjuntos son densos (excepto \\( \\emptyset \\))?",
        "Respuesta": "Verdadero",
        "Tema": 6,
        "Explicación": "Esto es cierto en la topología indiscreta, ya que en dicha topología todos los subconjuntos no vacíos son densos, y el único subconjunto que no es denso es el vacío."
    },
    {
        "Pregunta": "Sea \\( X \\) un espacio topológico, y \\( f : X \\to X \\) una biyección. \\( f \\) es un homeomorfismo si y solo si para todo \\( A \\subseteq X \\), \\( \\overline{f(A)} = f(\\overline{A}) \\).",
        "Respuesta": "Verdadero",
        "Tema": 6,
        "Explicación": "Esta propiedad es característica de los homeomorfismos, ya que estos preservan la estructura topológica del espacio, incluyendo la cerradura de conjuntos. Es decir, la preimagen de un cerrado es cerrado, lo que satisface la condición dada."
    },
    {
        "Pregunta": "¿La clausura de un abierto es estrictamente mayor que el propio abierto?",
        "Respuesta": "Falso",
        "Tema": 6,
        "Explicación": "Esto no es necesariamente cierto, ya que depende del contexto del espacio topológico. Por ejemplo, el total, que es un conjunto abierto y cerrado."
    },
    {
        "Pregunta": "En un espacio topológico \\( X \\) se tiene que para cualquier conjunto \\( A \\) se cumple que \\( \\partial A \\subseteq \\overline{A} \\).",
        "Respuesta": "Verdadero",
        "Tema": 6,
        "Explicación": "Sabemos que el borde de \\( A \\) está definido como \\( \\partial A = \\overline{A} \\cap \\overline{X - A} \\). Por definición, siempre estará contenido en \\( \\overline{A} \\), lo cual verifica la afirmación."
    },
    {
        "Pregunta": "Sea \\( X \\) un espacio topológico y sea \\( Y \\) un subespacio de \\( X \\) con la topología inducida. Si \\( A \\subset Y \\), entonces \\( \\text{Int}_Y(A) = Y \\cap \\text{Int}_X(A) \\).",
        "Respuesta": "Falso",
        "Tema": 6,
        "Explicación": "Por ejemplo, si \\( X = \\mathbb{R} \\) con la topología euclidiana y \\( Y = A = [0, 1] \\), entonces \\( \\text{Int}_Y(A) = [0, 1] \\), mientras que \\( Y \\cap \\text{Int}_X(A) = (0, 1) \\), lo que contradice la afirmación."
    },
    {
        "Pregunta": "Sea \\( A \\) un subconjunto no vacío en un espacio topológico \\( X \\). Si \\( \\text{Int}(A) = \\emptyset \\), entonces \\( \\text{Int}(X - A) \\neq \\emptyset \\).",
        "Respuesta": "Falso",
        "Tema": 6,
        "Explicación": "Un contraejemplo es \\( A = \\mathbb{Q} \\) (los números racionales) en la recta real usual \\( \\mathbb{R} \\). En este caso, \\( \\text{Int}(A) = \\emptyset \\) y \\( \\text{Int}(X - A) = \\emptyset \\) también, ya que ni \\( \\mathbb{Q} \\) ni su complemento contienen puntos interiores en \\( \\mathbb{R} \\)."
    },
    {
        "Pregunta": "Sea \\( X \\) un espacio topológico y sea \\( A \\subset X \\). Si unimos el interior y el exterior de \\( A \\), obtenemos el total \\( X \\).",
        "Respuesta": "Falso",
        "Tema": 6,
        "Explicación": "En la recta real, \\( A = [0, 1] \\) es un contraejemplo, ya que \\( \\text{Int}(A) \\cup \\text{Ext}(A) \\) no cubre el total \\( X \\), pues queda el borde \\( \\partial A \\) sin incluir."
    },
    {
        "Pregunta": "Sea \\( X \\) un espacio topológico y \\( A \\) y \\( B \\) dos subconjuntos. Entonces \\( A \\subset B \\iff A' \\subset B' \\).",
        "Respuesta": "Falso",
        "Tema": 6,
        "Explicación": "Los números racionales \\( \\mathbb{Q} \\) y los irracionales \\( \\mathbb{R} \\setminus \\mathbb{Q} \\) tienen el mismo conjunto derivado (todos los reales), pero son disjuntos. Solo la implicación \\( \\impliedby \\) es válida."
    },
    {
        "Pregunta": "Sea \\( D \\) un denso en un espacio topológico \\( X \\). Entonces \\( \\text{Int}(\\overline{D}) = \\emptyset \\).",
        "Respuesta": "Falso",
        "Tema": 6,
        "Explicación": "Si \\( D \\) es denso, entonces su clausura \\( \\overline{D} \\) es el espacio total \\( X \\), y su interior es \\( X \\), no \\( \\emptyset \\), salvo que \\( X = \\emptyset \\)."
    },
    {
        "Pregunta": "Sea \\( (X, d) \\) un espacio métrico y sea \\( x \\in X \\). Entonces \\( \\partial B(x, r) = S(x, r) \\) o \\( \\partial D(x, r) = S(x, r) \\).",
        "Respuesta": "Falso",
        "Tema": 6,
        "Explicación": "Considera la métrica discreta en algún conjunto, como los números reales, por ejemplo. En este caso, cualquier conjunto tiene frontera vacía, lo que contradice la afirmación."
    },
    {
        "Pregunta": "En un espacio topológico \\( X \\), se tiene que para cualquier conjunto \\( A \\) se cumple que \\( \\partial A \\subset A \\).",
        "Respuesta": "Falso",
        "Tema": 6,
        "Explicación": "Un contraejemplo es \\( A = (0, 1) \\) en los números reales con la topología usual. En este caso, la frontera de \\( A \\) no está contenida en \\( A \\), ya que incluye los puntos \\( 0 \\) y \\( 1 \\)."
    },
    {
        "Pregunta": "En un espacio topológico \\( X \\), dado \\( A \\), se tiene que \\( \\text{Int}(A) = \\text{Int}(\\overline{A}) \\).",
        "Respuesta": "Falso",
        "Tema": 6,
        "Explicación": "Un contraejemplo es \\( A = \\mathbb{Q} \\) (los números racionales) en la recta real. En este caso, \\( \\text{Int}(A) \\) y \\( \\text{Int}(\\overline{A}) \\) no coinciden, ya que \\( \\mathbb{Q} \\) no tiene puntos interiores, mientras que \\( \\overline{\\mathbb{Q}} = \\mathbb{R} \\)."
    },
    {
        "Pregunta": "En la topología discreta sobre los reales, la clausura de \\( \\mathbb{Q} \\) es \\( \\mathbb{R} \\).",
        "Respuesta": "Falso",
        "Tema": 6,
        "Explicación": "En la topología discreta, todos los conjuntos son cerrados. Por lo tanto, \\( \\mathbb{Q} \\) ya es cerrado y no puede tener como clausura a \\( \\mathbb{R} \\)."
    },
    {
        "Pregunta": "Sea \\( X \\) un espacio topológico y \\( A \\) un subconjunto, entonces \\( A \\) y \\( A' \\) pueden ser disjuntos, uno estrictamente contenido en el otro, o incluso iguales.",
        "Respuesta": "Verdadero",
        "Tema": 6,
        "Explicación": "Ejemplos: \\( A = \\{ \\frac{1}{n} \\}_{n \\in \\mathbb{N}} \\cup \\{ 0 \\} \\), aquí \\( A' = \\{ 0 \\} \\subset A \\). En otro caso, \\( [0,1]' = [0,1] \\), mostrando igualdad. Por último, \\( \\mathbb{Q}' = \\mathbb{R} \\), siendo disjuntos en \\( \\mathbb{R} \\setminus \\mathbb{Q} \\)."
    },
    {
        "Pregunta": "La clausura de \\( \\mathbb{R} \\times (0, \\infty) \\) en el plano euclidiano es \\( \\mathbb{R} \\times \\{0\\} \\).",
        "Respuesta": "Falso",
        "Tema": 6,
        "Explicación": "La clausura de \\( \\mathbb{R} \\times (0, \\infty) \\) en el plano euclidiano es \\( \\mathbb{R} \\times [0, \\infty) \\), no \\( \\mathbb{R} \\times \\{0\\} \\), ya que incluye todos los puntos del intervalo cerrado."
    },
    {
        "Pregunta": "En un espacio topológico \\( X \\), dado \\( A \\), se tiene que \\( \\overline{A} = \\overline{Int(A)} \\).",
        "Respuesta": "Falso",
        "Tema": 6,
        "Explicación": "Un contraejemplo es \\( A = \\mathbb{Q} \\) (los números racionales) en la recta real. La clausura de \\( \\mathbb{Q} \\) es \\( \\mathbb{R} \\), mientras que el interior de \\( \\mathbb{Q} \\) es vacío, lo que muestra que \\( \\overline{A} \\neq \\text{Int}(A) \\)."
    },
    {
        "Pregunta": "Sea \\( X \\) un espacio topológico y \\( A, B \\subset X \\). Entonces \\( \\partial (A \\cup B) = \\partial A \\cup \\partial B \\).",
        "Respuesta": "Falso",
        "Tema": 6,
        "Explicación": "En la recta real con la topología usual, considera \\( A = [0, 1] \\) y \\( B = [0, 2] \\). La frontera de \\( A \\cup B \\) no coincide con la unión de las fronteras de \\( A \\) y \\( B \\)."
    },
    {
        "Pregunta": "En la topología usual sobre los reales, la clausura de \\( \\mathbb{R} \\setminus \\mathbb{Q} \\) es \\( \\mathbb{R} \\).",
        "Respuesta": "Verdadero",
        "Tema": 6,
        "Explicación": "En la topología usual, cualquier abierto no vacío contiene puntos irracionales, lo que implica que la clausura de \\( \\mathbb{R} \\setminus \\mathbb{Q} \\) es el espacio total \\( \\mathbb{R} \\)."
    },
    {
        "Pregunta": "Sea \\( X \\) un espacio topológico y sea \\( A \\) un subconjunto. Entonces \\( \\partial A = \\partial \\text{Int}(A) \\).",
        "Respuesta": "Falso",
        "Tema": 6,
        "Explicación": "Un contraejemplo son los números racionales \\( \\mathbb{Q} \\) en la recta real, donde la frontera de \\( \\mathbb{Q} \\) no coincide con la frontera de su interior (que es vacío)."
    },
    {
        "Pregunta": "Sea \\( X \\) un espacio topológico y \\( A, B \\subset X \\) tales que \\( A \\subset B \\). Entonces \\( \\partial A \\subset \\partial B \\).",
        "Respuesta": "Falso",
        "Tema": 6,
        "Explicación": "Un contraejemplo es \\( A = [0,1] \\subset B = \\mathbb{R} \\) en la topología usual. Aquí, \\( \\partial A = \\{0,1\\} \\) pero \\( \\partial B = \\emptyset \\), lo que muestra que \\( \\partial A \\not\\subset \\partial B \\)."
    },
    {
        "Pregunta": "Sea \\( f : X \\to Y \\) una aplicación continua y suprayectiva. Si \\( A \\) es un subconjunto denso de \\( X \\), \\( f(A) \\) es denso en \\( f(X) \\).",
        "Respuesta": "Verdadero",
        "Tema": 6,
        "Explicación": "La preimagen de un abierto no vacío en \\( f(X) \\) es un abierto no vacío en \\( X \\), que debe intersectar a \\( A \\) porque \\( A \\) es denso. Por lo tanto, \\( f(A) \\) es denso en \\( f(X) \\)."
    },
    {
        "Pregunta": "Sea \\( X \\) un espacio topológico. Entonces el derivado de un subconjunto cualquiera de \\( X \\) es un cerrado de \\( X \\).",
        "Respuesta": "Falso",
        "Tema": 6,
        "Explicación": "Considera \\( X \\) con la topología indiscreta y sea \\( \\{x\\} \\) un subconjunto unipuntual. En este caso, \\( \\{x\\}' \\) no es necesariamente cerrado ni abierto, ya que los conjuntos derivados no siempre cumplen esta propiedad en la topología indiscreta."
    },
    {
        "Pregunta": "Sea \\( X \\) un espacio topológico y \\( A \\subset X \\). Entonces es posible que \\( \\overline{A} = \\emptyset \\).",
        "Respuesta": "Verdadero",
        "Tema": 6,
        "Explicación": "Esto es cierto si y solo si \\( A = \\emptyset \\), ya que la clausura de un conjunto vacío sigue siendo vacío."
    },
    {
        "Pregunta": "Sea \\( X \\) un espacio topológico y \\( A \\subset X \\). Las aplicaciones \\( A \\mapsto \\overline{A} \\) y \\( A \\mapsto \\text{Int}(A) \\) son monótonas con respecto a la inclusión.",
        "Respuesta": "Verdadero",
        "Tema": 6,
        "Explicación": "Sabemos que \\( A \\subset \\overline{A} \\) (\\( \\overline{A} \\) es el cerrado más pequeño que contiene a \\( A \\)) y \\( \\text{Int}(A) \\subset A \\) (\\( \\text{Int}(A) \\) es el mayor abierto contenido en \\( A \\)). Por lo tanto, estas aplicaciones son monótonas con respecto a la inclusión."
    },
    {
        "Pregunta": "Sea \\( X \\) un espacio topológico y \\( A \\subset X \\). Entonces es posible que \\( \\text{Int}(A) = X \\).",
        "Respuesta": "Verdadero",
        "Tema": 6,
        "Explicación": "Esto es posible si y solo si \\( A = X \\), ya que el interior de \\( A \\) coincide con \\( X \\) únicamente cuando \\( A \\) es el conjunto total."
    },
    {
        "Pregunta": "Considera la topología indiscreta sobre \\( X \\). Entonces el conjunto \\( \\{x\\} \\) es denso para cualquier \\( x \\in X \\).",
        "Respuesta": "Verdadero",
        "Tema": 6,
        "Explicación": "En la topología indiscreta, el único conjunto abierto no vacío es \\( X \\). Por lo tanto, cualquier conjunto no vacío, incluido \\( \\{x\\} \\), es denso en \\( X \\)."
    }
]