const listaPreguntas = [
    {
        "Pregunta": "\\( \\mathbb{Q} \\) es infinito numerable.",
        "Respuesta": "Verdadero", "Tema": 1,
        "Explicación": "Cada fracción en \\( \\mathbb{Q} \\) puede representarse como un par ordenado de enteros \\( (a, b) \\), donde \\( b \\neq 0 \\). El conjunto de los números enteros \\( \\mathbb{Z} \\) es numerable, y el producto cartesiano de dos conjuntos numerables también es numerable. Por lo tanto, \\( \\mathbb{Q} \\) es un conjunto numerable."
    },
    {
        "Pregunta": "Sean \\( f : X \\to Y \\) una aplicación, y \\( A \\subseteq X \\). Entonces \\( A = f^{-1}(f(A)) \\).",
        "Respuesta": "Falso", "Tema": 1,
        "Explicación": "Por ejemplo, si \\( f \\) es constante y \\( A \\neq \\emptyset \\), entonces \\( f^{-1}(f(A)) = X \\). Esto sucede porque la imagen inversa de un conjunto bajo una función constante incluye todos los elementos del dominio \\( X \\). Por lo tanto, \\( A \\neq f^{-1}(f(A)) \\) en este caso."
    },
    {
        "Pregunta": "Sean \\( f : X \\to Y \\) una aplicación, y \\( B \\subseteq Y \\). Entonces \\( B = f(f^{-1}(B)) \\).",
        "Respuesta": "Falso", "Tema": 1,
        "Explicación": "La afirmación es falsa porque \\( f^{-1}(B) \\) podría ser el conjunto vacío si \\( B \\) no intersecta con la imagen de \\( f \\). En ese caso, \\( f(f^{-1}(B)) \\) sería el conjunto vacío, mientras que \\( B \\) no lo es necesariamente. Esto demuestra que \\( B \\neq f(f^{-1}(B)) \\) en general."
    },
    {
        "Pregunta": "\\( \\mathbb{R} \\) es infinito numerable.",
        "Respuesta": "Falso", "Tema": 1,
        "Explicación": "El conjunto \\( \\mathbb{R} \\) (los números reales) no es numerable. Esto se demuestra mediante el argumento diagonal de Cantor, que muestra que no existe una biyección entre \\( \\mathbb{R} \\) y \\( \\mathbb{N} \\). Por lo tanto, \\( \\mathbb{R} \\) tiene una cardinalidad mayor que la de los conjuntos numerables."
    },
    {
        "Pregunta": "Dados dos subconjuntos \\( A, B \\) de un conjunto \\( X \\). Se cumple que  \\[ X \\setminus (A \\cap B) = (X \\setminus A) \\cup (X \\setminus B). \\]",
        "Respuesta": "Verdadero", "Tema": 1,
        "Explicación": "Los elementos que no están en \\( A \\cap B \\) son aquellos que no pertenecen simultáneamente a \\( A \\) y \\( B \\). Esto equivale a los elementos que no están en \\( A \\) o no están en \\( B \\). Por las leyes de De Morgan, esta relación puede expresarse como: \\[ X \\setminus (A \\cap B) = (X \\setminus A) \\cup (X \\setminus B). \\].Por lo tanto, la afirmación es verdadera."
    },
    {
        "Pregunta": "Dados dos subconjuntos \\( A, B \\) de un conjunto \\( X \\). Se cumple que  \\[ X \\setminus (A \\cup B) = (X \\setminus A) \\cap (X \\setminus B). \\]",
        "Respuesta": "Verdadero", "Tema": 1,
        "Explicación": "Los elementos que no están en \\( A \\cup B \\) son aquellos que no pertenecen ni a \\( A \\) ni a \\( B \\). Esto equivale a los elementos que están fuera de \\( A \\) y también fuera de \\( B \\). Por las leyes de De Morgan, esta relación puede expresarse como: \\[ X \\setminus (A \\cup B) = (X \\setminus A) \\cap (X \\setminus B). \\] Por lo tanto, la afirmación es verdadera."
    },
    {
        "Pregunta": "Dados dos subconjuntos \\( A, B \\) de un conjunto \\( X \\). Se cumple que  \\[ X \\setminus (A \\cap B) = (X \\setminus A) \\cap (X \\setminus B). \\]",
        "Respuesta": "Falso", "Tema": 1,
        "Explicación": "La afirmación es falsa porque, según las leyes de De Morgan, la expresión correcta sería: \\[ X \\setminus (A \\cap B) = (X \\setminus A) \\cup (X \\setminus B). \\] La operación complementaria de la intersección no es la intersección de los complementos, sino la unión de los complementos. Por lo tanto, la igualdad presentada en la pregunta no es válida."
    },
    {
        "Pregunta": "Sean \\( X \\) e \\( Y \\) dos conjuntos, y sean \\( A \\) y \\( B \\) dos subconjuntos de \\( X \\) e \\( Y \\) respectivamente. Entonces \\[ X \\times Y \\setminus A \\times B = (X \\setminus A) \\times (Y \\setminus B). \\]",
        "Respuesta": "Falso", "Tema": 1,
        "Explicación": "La afirmación es falsa porque la diferencia cartesiana no se distribuye como el producto cartesiano de las diferencias. En realidad, si se eliminan los elementos de \\( A \\times B \\) del producto cartesiano \\( X \\times Y \\), se eliminan únicamente las parejas \\((a, b)\\) tales que \\( a \\in A \\) y \\( b \\in B \\). La igualdad presentada no representa correctamente este concepto."
    },
    {
        "Pregunta": "Sean \\( f : X \\to Y \\) una aplicación, y \\( B \\subseteq Y \\). Entonces \\( B \\subseteq f(f^{-1}(B)) \\).",
        "Respuesta": "Falso", "Tema": 1,
        "Explicación": "La afirmación es falsa porque \\( f(f^{-1}(B)) \\) puede contener elementos adicionales que no están en \\( B \\). En particular, \\( f(f^{-1}(B)) \\) incluye todos los elementos del codominio \\( Y \\) que están asociados a algún elemento de \\( f^{-1}(B) \\), lo que puede incluir elementos fuera de \\( B \\). Por lo tanto, no siempre se cumple que \\( B \\subseteq f(f^{-1}(B)) \\)."
    },
    {
        "Pregunta": "Sean \\( f : X \\to Y \\) una aplicación, y \\( A \\subseteq X \\). Entonces \\( f^{-1}(f(A)) \\subseteq A \\).",
        "Respuesta": "Falso", "Tema": 1,
        "Explicación": "La afirmación es falsa porque \\( f^{-1}(f(A)) \\) puede contener elementos que no están en \\( A \\). En particular, si \\( x \\notin A \\) pero \\( f(x) \\in f(A) \\), entonces \\( x \\in f^{-1}(f(A)) \\), aunque \\( x \\notin A \\). Esto ocurre porque \\( f^{-1}(f(A)) \\) incluye todos los elementos del dominio \\( X \\) que mapean a algún elemento en \\( f(A) \\), independientemente de si esos elementos estaban originalmente en \\( A \\)."
    },
    {
        "Pregunta": "Dados dos subconjuntos \\( A, B \\) de un conjunto \\( X \\). Se cumple que  \\[ X \\setminus (A \\cup B) = (X \\setminus A) \\cup (X \\setminus B). \\]",
        "Respuesta": "Falso", "Tema": 1,
        "Explicación": "La afirmación es falsa porque, según las leyes de De Morgan, la diferencia \\( X \\setminus (A \\cup B) \\) es igual a: \\[ X \\setminus (A \\cup B) = (X \\setminus A) \\cap (X \\setminus B). \\] El operador correcto para la expresión debería ser una intersección, no una unión. Como contraejemplo, si tomamos \\( X = \\{1, 2\\} \\), \\( A = \\{1\\} \\), \\( B = \\{2\\} \\), se puede verificar que: \\[ X \\setminus (A \\cup B) = \\emptyset, \\] mientras que: \\[ (X \\setminus A) \\cup (X \\setminus B) = X. \\] Por lo tanto, la igualdad presentada no es válida."
    },
    {
        "Pregunta": "Dados tres conjuntos \\( A, B, C \\). Se cumple que  \\[ A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C). \\]",
        "Respuesta": "Verdadero", "Tema": 1,
        "Explicación": "La afirmación es verdadera porque la intersección y la unión son distributivas entre sí. Específicamente, para cualquier conjunto \\( A \\), \\( B \\), y \\( C \\), se cumple la propiedad distributiva: \\[ A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C). \\] Esto puede demostrarse verificando que cada elemento de \\( A \\cap (B \\cup C) \\) pertenece a \\( (A \\cap B) \\cup (A \\cap C) \\) y viceversa."
    },
    {
        "Pregunta": "Dados tres conjuntos \\( A, B, C \\). Se cumple que  \\[ A \\cap (B \\cup C) = (A \\cap B) \\cup C. \\]",
        "Respuesta": "Falso", "Tema": 1,
        "Explicación": "La afirmación es falsa porque la propiedad distributiva de la intersección con respecto a la unión establece que: \\[ A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C). \\] El término \\( (A \\cap B) \\cup C \\) no representa correctamente la distribución de la intersección \\( A \\cap \\) sobre \\( B \\cup C \\), ya que incluye elementos de \\( C \\) que podrían no estar en \\( A \\)."
    },
    {
        "Pregunta": "Dados tres conjuntos \\( A, B, C \\). Se cumple que  \\[ A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C). \\]",
        "Respuesta": "Verdadero", "Tema": 1,
        "Explicación": "La afirmación es verdadera porque la unión y la intersección son distributivas entre sí. En particular, para cualquier conjunto \\( A, B, C \\), se cumple la propiedad distributiva: \\[ A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C). \\] Esto puede verificarse aplicando las definiciones de unión e intersección y observando que cada elemento de \\( A \\cup (B \\cap C) \\) pertenece a \\( (A \\cup B) \\cap (A \\cup C) \\), y viceversa."
    },
    {
        "Pregunta": "Dados tres conjuntos \\( A, B, C \\). Se cumple que  \\[ A \\cup (B \\cap C) = (A \\cup B) \\cap C. \\]",
        "Respuesta": "Falso", "Tema": 1,
        "Explicación": "La afirmación es falsa porque la propiedad distributiva correcta de la unión con respecto a la intersección establece que: \\[ A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C). \\] La expresión \\( (A \\cup B) \\cap C \\) no distribuye correctamente la unión de \\( A \\) con \\( B \\cap C \\), ya que puede incluir elementos en \\( C \\) que no satisfacen \\( A \\cup B \\)."
    },
    {
        "Pregunta": "Las partes de un conjunto finito son finitas.",
        "Respuesta": "Verdadero", "Tema": 1,
        "Explicación": "La afirmación es verdadera porque el conjunto de partes (o conjunto potencia) de un conjunto finito tiene un número finito de elementos. En particular, si el conjunto de partida tiene \\( n \\) elementos, entonces su conjunto de partes tiene \\( 2^n \\) elementos, ya que cada elemento puede estar o no estar en un subconjunto dado."
    },
    {
        "Pregunta": "Las partes de un conjunto numerable son numerables.",
        "Respuesta": "Falso", "Tema": 1,
        "Explicación": "La afirmación es falsa porque el conjunto de partes (o conjunto potencia) de un conjunto numerable no es numerable. Aunque el conjunto inicial es numerable, su conjunto potencia tiene una cardinalidad mayor, equivalente a la cardinalidad del conjunto de los números reales \\( \\mathbb{R} \\). Esto se demuestra mediante el argumento diagonal de Cantor, que establece que no puede existir una biyección entre un conjunto y su conjunto de partes."
    },
    {
        "Pregunta": "Se tiene la siguiente igualdad conjuntista: \\( \\{\\emptyset\\} = \\emptyset \\).",
        "Respuesta": "Falso", "Tema": 1,
        "Explicación": "La afirmación es falsa porque \\( \\{\\emptyset\\} \\) no es el conjunto vacío. \\( \\{\\emptyset\\} \\) es un conjunto que contiene un único elemento, y ese elemento es el conjunto vacío (\\( \\emptyset \\)). En notación: \\[ \\emptyset \\in \\{\\emptyset\\}, \\] lo cual implica que \\( \\{\\emptyset\\} \\neq \\emptyset \\), ya que el conjunto vacío no tiene elementos. En definitiva, no es lo mismo tener una caja vacia que no tener nada."
    },
    {
        "Pregunta": "Sean \\( A_1, A_2 \\subseteq X \\) y \\( B_1, B_2 \\subseteq Y \\). Entonces  \\[ (A_1 \\times B_1) \\cap (A_2 \\times B_2) = (A_1 \\cap A_2) \\times (B_1 \\cap B_2). \\]",
        "Respuesta": "Verdadero", "Tema": 1,
        "Explicación": "La afirmación es verdadera porque la intersección del producto cartesiano de dos conjuntos sigue la regla: \\[ (A_1 \\times B_1) \\cap (A_2 \\times B_2) = \\{(x, y) \\mid x \\in (A_1 \\cap A_2), y \\in (B_1 \\cap B_2)\\}. \\] Esto corresponde exactamente a \\( (A_1 \\cap A_2) \\times (B_1 \\cap B_2) \\). Por lo tanto, la igualdad presentada es válida."
    },
    {
        "Pregunta": "Sean \\( A_1, A_2 \\subseteq X \\) y \\( B_1, B_2 \\subseteq Y \\). Entonces  \\[ (A_1 \\times B_1) \\cup (A_2 \\times B_2) = (A_1 \\cup A_2) \\times (B_1 \\cup B_2). \\]",
        "Respuesta": "Falso", "Tema": 1,
        "Explicación": "La afirmación es falsa porque la unión del producto cartesiano no se distribuye de esta manera en general. Como contraejemplo, consideremos: \\[ A_1 = B_1 = [0, 1/2] \\quad \\text{y} \\quad A_2 = B_2 = [1/2, 1] \\quad \\text{en } \\mathbb{R}. \\] En este caso: \\[ (A_1 \\times B_1) \\cup (A_2 \\times B_2) \\neq (A_1 \\cup A_2) \\times (B_1 \\cup B_2), \\] ya que el lado derecho incluiría pares como \\( (0, 1) \\), que no pertenecen a ninguno de los productos cartesianos \\( A_1 \\times B_1 \\) o \\( A_2 \\times B_2 \\). Por lo tanto, la igualdad no se cumple."
    },
    {
        "Pregunta": "Sean \\( f : X \\to Y \\) una aplicación inyectiva, y \\( A \\subseteq X \\). Entonces  \\[ f^{-1}(f(A)) \\subseteq A. \\]",
        "Respuesta": "Verdadero", "Tema": 1,
        "Explicación": "La afirmación es verdadera porque \\( f \\) es inyectiva, lo que implica que cada elemento en la imagen \\( f(A) \\) proviene de un único elemento en \\( A \\). Por lo tanto, al tomar la preimagen \\( f^{-1}(f(A)) \\), no se incluyen elementos fuera de \\( A \\), ya que no hay puntos fuera de \\( A \\) cuya imagen coincida con puntos de \\( A \\). Esto asegura que: \\[ f^{-1}(f(A)) \\subseteq A. \\]"
    },
    {
        "Pregunta": "Sean \\( f : X \\to Y \\) una aplicación inyectiva, y \\( B \\subseteq Y \\). Entonces  \\[ B \\subseteq f(f^{-1}(B)). \\]",
        "Respuesta": "Falso", "Tema": 1,
        "Explicación": "La afirmación es falsa porque, aunque \\( f \\) sea inyectiva, no garantiza que \\( B \\subseteq f(f^{-1}(B)) \\). Esto se debe a que \\( f^{-1}(B) \\) solo considera los elementos de \\( X \\) que mapean a elementos de \\( B \\), y al aplicar \\( f \\) nuevamente, podríamos obtener una imagen que no cubra todo \\( B \\), especialmente si \\( B \\) contiene elementos que no están en la imagen de \\( f \\). Por lo tanto, \\( B \\subseteq f(f^{-1}(B)) \\) no siempre se cumple."
    },
    {
        "Pregunta": "Sean \\( f : X \\to Y \\) una aplicación suprayectiva, y \\( A \\subseteq X \\). Entonces  \\[ f^{-1}(f(A)) \\subseteq A. \\]",
        "Respuesta": "Falso", "Tema": 1,
        "Explicación": "La afirmación es falsa porque la suprayectividad de \\( f \\) no garantiza que \\( f^{-1}(f(A)) \\subseteq A \\). Un contraejemplo sería si \\( Y \\) tiene un único elemento (es decir, \\( f \\) es constante), entonces \\( f(A) = Y \\) y \\( f^{-1}(f(A)) = X \\). Esto incluye elementos fuera de \\( A \\), lo que contradice la afirmación. Por lo tanto, la relación no se cumple en general."
    },
    {
        "Pregunta": "Sean \\( f : X \\to Y \\) una aplicación suprayectiva, y \\( B \\subseteq Y \\). Entonces  \\[ B \\subseteq f(f^{-1}(B)). \\]",
        "Respuesta": "Verdadero", "Tema": 1,
        "Explicación": "La afirmación es verdadera porque, al ser \\( f \\) suprayectiva, cada elemento de \\( B \\) tiene al menos una preimagen en \\( X \\) bajo \\( f \\). Por definición de la imagen, se garantiza que: \\[ f(f^{-1}(B)) \\] contiene todos los elementos de \\( B \\), ya que \\( f^{-1}(B) \\) recoge todas las preimágenes de los elementos de \\( B \\). Esto implica que \\( B \\subseteq f(f^{-1}(B)) \\)."
    },
    {
        "Pregunta": "Sean \\( f : X \\to Y \\) una aplicación, y \\( A \\subseteq X \\). Entonces  \\[ A \\subseteq f^{-1}(f(A)). \\]",
        "Respuesta": "Verdadero", "Tema": 1,
        "Explicación": "La afirmación es verdadera porque, por definición de la preimagen, cualquier elemento \\( x \\in A \\) se mapea a \\( f(x) \\in f(A) \\). Por lo tanto, \\( x \\in f^{-1}(f(A)) \\), ya que \\( f^{-1}(f(A)) \\) incluye todos los elementos de \\( X \\) que se mapean a \\( f(A) \\). Esto asegura que \\( A \\subseteq f^{-1}(f(A)) \\)."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 9 & 0 \\\\ b & 9 & 0 & 4 \\\\ c & 0 & 4 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Falso","Tema":2,
        "Explicación": "La afirmación es falsa porque la función \\( d \\) no cumple con la desigualdad triangular, que es una propiedad esencial para ser una métrica. Por ejemplo: \\( d(a, b) + d(b, c) = 9 + 4 = 13 \\), pero \\( d(a, c) = 0 \\), lo cual contradice la desigualdad \\( d(a, b) + d(b, c) \\geq d(a, c) \\). Por lo tanto, \\( d \\) no es una distancia."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 6 & 1 \\\\ b & 6 & 0 & 4 \\\\ c & 1 & 4 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Falso","Tema":2,
        "Explicación": "La afirmación es falsa porque la función \\( d \\) no cumple con la desigualdad triangular, que es una propiedad esencial para ser una métrica. Por ejemplo: \\( d(a, b) + d(b, c) = 6 + 4 = 10 \\), pero \\( d(a, c) = 1 \\), lo cual contradice la desigualdad \\( d(a, b) + d(b, c) \\geq d(a, c) \\). Por lo tanto, \\( d \\) no es una distancia."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 8 & 3 \\\\ b & 8 & 0 & 5 \\\\ c & 3 & 5 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Verdadero","Tema":2,
        "Explicación": "La afirmación es verdadera porque la función \\( d \\) cumple con las tres propiedades necesarias para ser una métrica: 1) \\( d(x, y) \\geq 0 \\) y \\( d(x, y) = 0 \\iff x = y \\), 2) simetría \\( d(x, y) = d(y, x) \\), y 3) la desigualdad triangular \\( d(x, y) + d(y, z) \\geq d(x, z) \\) para todos los \\( x, y, z \\in X \\). Por lo tanto, \\( d \\) es una distancia."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 3 & 5 \\\\ b & 3 & 0 & 1 \\\\ c & 5 & 1 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Falso","Tema":2,
        "Explicación": "La afirmación es falsa porque la función \\( d \\) no cumple con la desigualdad triangular, que es una propiedad esencial para ser una métrica. Por ejemplo: \\( d(a, b) + d(b, c) = 3 + 1 = 4 \\), pero \\( d(a, c) = 5 \\), lo cual contradice la desigualdad \\( d(a, b) + d(b, c) \\geq d(a, c) \\). Por lo tanto, \\( d \\) no es una distancia."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 3 & 8 \\\\ b & 3 & 0 & 9 \\\\ c & 8 & 9 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Verdadero","Tema":2,
        "Explicación": "La afirmación es verdadera porque la función \\( d \\) cumple con las tres propiedades necesarias para ser una métrica: 1) \\( d(x, y) \\geq 0 \\) y \\( d(x, y) = 0 \\iff x = y \\), 2) simetría \\( d(x, y) = d(y, x) \\), y 3) la desigualdad triangular \\( d(x, y) + d(y, z) \\geq d(x, z) \\) para todos los \\( x, y, z \\in X \\). Por lo tanto, \\( d \\) es una distancia."
    },
    {
        "Pregunta": "El conjunto {0} no es abierto con la topología usual ya que es cerrado.",
        "Respuesta": "Falso","Tema":2,
        "Explicación": "El conjunto {0} no es abierto en la topología usual, pero esto no se debe a que sea cerrado. El conjunto {0} es cerrado, pero no abierto debido a que no es posible encontrar una bola de radio positivo que esté completamente contenida dentro de {0}. Por lo tanto, la afirmación es falsa."
    },
    {
        "Pregunta": "En un espacio métrico, el centro de una bola siempre pertenece a la bola.",
        "Respuesta": "Verdadero","Tema":2,
        "Explicación": "La afirmación es verdadera porque, en un espacio métrico, la bola centrada en un punto \\( x \\) con radio \\( r > 0 \\) está definida como \\( B(x, r) = \\{ y \\in X : d(x, y) < r \\} \\). La distancia del centro \\( x \\) a sí mismo es \\( d(x, x) = 0 \\), lo cual siempre es menor que \\( r \\). Por lo tanto, el centro \\( x \\) siempre pertenece a la bola."
    },
    {
        "Pregunta": "En un espacio métrico, fijado un radio positivo y un centro, el disco es unión disjunta de la esfera y la bola.",
        "Respuesta": "Verdadero","Tema":2,
        "Explicación": "La afirmación es verdadera porque, en un espacio métrico, el disco se define como el conjunto de puntos cuya distancia al centro es menor o igual al radio, mientras que la bola contiene los puntos cuya distancia es estrictamente menor que el radio, y la esfera contiene los puntos cuya distancia al centro es exactamente igual al radio. Por lo tanto, el disco es la unión de la bola y la esfera, siendo esta unión disjunta porque ningún punto puede satisfacer ambas condiciones al mismo tiempo."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\mathbb{R} \\times \\{0\\} \\cup \\{0\\} \\times \\mathbb{R} \\) con la distancia usual del plano. El conjunto \\( [-1,1] \\times \\{0\\} \\cup \\{0\\} \\times [-1,1] \\) es un entorno del origen.",
        "Respuesta": "Verdadero","Tema":2,
        "Explicación": "La afirmación es verdadera porque, en el espacio métrico \\( X \\), el conjunto \\( [-1,1] \\times \\{0\\} \\cup \\{0\\} \\times [-1,1] \\) contiene un intervalo alrededor del origen en cada una de las coordenadas permitidas en \\( X \\). Esto significa que el origen está contenido en un conjunto que es un entorno en la topología inducida por la distancia usual del plano restringida a \\( X \\)."
    },
    {
        "Pregunta": "Toda bola cerrada es en efecto un conjunto cerrado.",
        "Respuesta": "Verdadero","Tema":2,
        "Explicación": "La afirmación es verdadera porque, en un espacio métrico, una bola cerrada \\( \\bar{B}(x, r) = \\{ y \\in X : d(x, y) \\leq r \\} \\) es cerrada. Si un punto \\( y \\notin \\bar{B}(x, r) \\), entonces existe un radio \\( r' > r \\) tal que \\( B(y, r' - r) \\cap \\bar{B}(x, r) = \\emptyset \\). Esto implica que el complementario de \\( \\bar{B}(x, r) \\) es abierto, cumpliendo con la definición de conjunto cerrado."
    },
    {
        "Pregunta": "Sea \\( A \\) un subconjunto de un métrico \\( X \\). Entonces \\( \\bigcup_{a \\in A} \\bar{D}(a, \\varepsilon) \\) es cerrado para todo \\( \\varepsilon > 0 \\).",
        "Respuesta": "Falso","Tema":2,
        "Explicación": "La afirmación es falsa porque la unión de bolas cerradas no necesariamente es cerrada. Por ejemplo, si \\( X = \\mathbb{R} \\) con la métrica usual, \\( A = (0, 1) \\) y \\( \\varepsilon = 1 \\), entonces el resultado es \\( (-1, 2) \\), que no es cerrado. Esto demuestra que la unión de bolas cerradas no siempre produce un conjunto cerrado."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 7 & 5 \\\\ b & 7 & 0 & 3 \\\\ c & 5 & 3 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Verdadero","Tema":2,
        "Explicación": "La afirmación es verdadera porque la función \\( d \\) cumple con las tres propiedades necesarias para ser una métrica: 1) \\( d(x, y) \\geq 0 \\) y \\( d(x, y) = 0 \\iff x = y \\), 2) simetría \\( d(x, y) = d(y, x) \\), y 3) la desigualdad triangular \\( d(x, y) + d(y, z) \\geq d(x, z) \\) para todos los \\( x, y, z \\in X \\). Por lo tanto, \\( d \\) es una distancia."
    },
    {
        "Pregunta": "El conjunto \\((0, 1)\\) es siempre acotado.",
        "Respuesta": "Falso","Tema":2,
        "Explicación": "La afirmación es falsa porque la propiedad de estar acotado depende de la métrica que se escoja en el conjunto. Por ejemplo, si consideramos la métrica \\( d(x, y) = \\left| \\frac{1}{x} - \\frac{1}{y} \\right| \\) en \\((0, 1)\\), la distancia entre puntos no está acotada ya que \\( \\frac{1}{x} \\) tiende a infinito cuando \\( x \\to 0^+ \\). Esto demuestra que el conjunto \\((0, 1)\\) no es necesariamente acotado en todas las métricas posibles."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 8 & 8 \\\\ b & 8 & 0 & 9 \\\\ c & 8 & 9 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Verdadero","Tema":2,
        "Explicación": "La afirmación es verdadera porque la función \\( d \\) cumple con las tres propiedades necesarias para ser una métrica: 1) \\( d(x, y) \\geq 0 \\) y \\( d(x, y) = 0 \\iff x = y \\), 2) simetría \\( d(x, y) = d(y, x) \\), y 3) la desigualdad triangular \\( d(x, y) + d(y, z) \\geq d(x, z) \\) para todos los \\( x, y, z \\in X \\). Por lo tanto, \\( d \\) es una distancia."
    },
    {
        "Pregunta": "Considera \\( \\mathbb{R}^2 \\) con la distancia usual. La recta \\( \\{(x, x) \\in \\mathbb{R}^2 \\mid x \\in \\mathbb{R}\\} \\) es un entorno del origen.",
        "Respuesta": "Falso","Tema":2,
        "Explicación": "La afirmación es falsa porque un entorno del origen en \\( \\mathbb{R}^2 \\) debe contener una bola abierta alrededor del origen en la topología inducida por la distancia euclidiana. Ninguna bola euclidiana puede estar contenida completamente en una recta, ya que las bolas son conjuntos bidimensionales y las rectas son unidimensionales. Por lo tanto, la recta mencionada no es un entorno del origen."
    },
    {
        "Pregunta": "Considera el conjunto de los números enteros \\( \\mathbb{Z} \\) con la distancia usual. El conjunto \\( \\{0\\} \\) es un entorno de \\( 0 \\).",
        "Respuesta": "Verdadero","Tema":2,
        "Explicación": "La afirmación es verdadera porque, en \\( \\mathbb{Z} \\) con la distancia usual, \\( \\{0\\} = B_{\\mathbb{Z}}(0, 1) \\), donde \\( B_{\\mathbb{Z}}(0, 1) \\) es la bola abierta de radio \\( 1 \\) centrada en \\( 0 \\). Dado que en \\( \\mathbb{Z} \\) la distancia es discreta, cualquier conjunto unitario, como \\( \\{0\\} \\), puede ser un entorno de un punto."
    },
    {
        "Pregunta": "En un espacio métrico, una bola puede contener a otra bola de radio estrictamente mayor.",
        "Respuesta": "Verdadero","Tema":2,
        "Explicación": "La afirmación es verdadera porque, en un espacio métrico, si consideramos una bola centrada en \\( x \\) de radio \\( r_1 \\), \\( B(x, r_1) \\), esta puede contener una bola de radio \\( r_2 > r_1 \\) siempre y cuando \\( B(x, r_2) \\) esté contenida en un conjunto más grande que limita el espacio métrico, como un subconjunto que no incluye todos los puntos necesarios para \\( B(x, r_2) \\) ser completamente definido. Sin embargo, en espacios métricos usuales como \\( \\mathbb{R}^n \\), esto no ocurre."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 3 & 8 \\\\ b & 3 & 0 & 10 \\\\ c & 8 & 10 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Verdadero","Tema":2,
        "Explicación": "La afirmación es verdadera porque la función \\( d \\) cumple con las tres propiedades necesarias para ser una métrica: 1) \\( d(x, y) \\geq 0 \\) y \\( d(x, y) = 0 \\iff x = y \\), 2) simetría \\( d(x, y) = d(y, x) \\), y 3) la desigualdad triangular \\( d(x, y) + d(y, z) \\geq d(x, z) \\) para todos los \\( x, y, z \\in X \\). Por lo tanto, \\( d \\) es una distancia."
    },
    {
        "Pregunta": "En los reales con la topología usual, los subconjuntos \\((-1, 1), (-2, 2), (0, 2], [-1, 0) \\text{ y } [0, 1]\\) son entornos de \\(0\\).",
        "Respuesta": "Falso","Tema":2,
        "Explicación": "La afirmación es falsa porque, en la topología usual de los números reales, un entorno de \\( 0 \\) debe contener un intervalo abierto que incluya a \\( 0 \\). Los subconjuntos \\((0, 2]\\), \\([-1, 0)\\), y \\([0, 1]\\) no contienen a \\( 0 \\) dentro de un intervalo abierto, por lo que no son entornos de \\( 0 \\). Solo \\((-1, 1)\\) y \\((-2, 2)\\) cumplen con la condición para ser entornos de \\( 0 \\)."
    },
    {
        "Pregunta": "Sea \\((X, d)\\) un métrico. Dados dos conjuntos \\(A\\) y \\(B\\), definimos \\(d(A, B) = \\inf\\{d(a, b) \\mid a \\in A, b \\in B\\}\\). Entonces, para otro tercer conjunto \\(C \\subset X\\), se tiene que \\(d(A, B) \\leq d(A, C) + d(C, B)\\).",
        "Respuesta": "Falso","Tema":2,
        "Explicación": "La afirmación es falsa porque la desigualdad triangular no necesariamente se preserva bajo esta definición de distancia entre conjuntos. Aunque \\( d(a, b) \\leq d(a, c) + d(c, b) \\) para elementos individuales \\( a \\in A, b \\in B, c \\in C \\), el infimum utilizado en la definición de \\( d(A, B) \\) puede no satisfacer esta desigualdad al considerar todos los posibles pares \\( a, b \\) y \\( c \\). Por lo tanto, \\( d(A, B) \\leq d(A, C) + d(C, B) \\) no se cumple en general para esta definición."
    },
    {
        "Pregunta": "Dadas \\( d_1 \\) y \\( d_2 \\) métricas definidas sobre el mismo conjunto \\( X \\), la aplicación \\( d_M : X \\times X \\to \\mathbb{R} \\), definida como \\( d_M(x, y) = \\max\\{d_1(x, y), d_2(x, y)\\} \\), es una métrica.",
        "Respuesta": "Verdadero","Tema":2,
        "Explicación": "La afirmación es verdadera porque \\( d_M \\) cumple con las propiedades de una métrica: 1) \\( d_M(x, y) \\geq 0 \\) y \\( d_M(x, y) = 0 \\iff x = y \\), ya que \\( d_1 \\) y \\( d_2 \\) son métricas. 2) \\( d_M(x, y) = d_M(y, x) \\), porque \\( d_1 \\) y \\( d_2 \\) son simétricas. 3) La desigualdad triangular \\( d_M(x, z) \\leq d_M(x, y) + d_M(y, z) \\) se cumple, ya que \\( \\max\\{d_1, d_2\\} \\) hereda esta propiedad de \\( d_1 \\) y \\( d_2 \\). Por lo tanto, \\( d_M \\) es una métrica."
    },
    {
        "Pregunta": "En un espacio métrico, un disco de radio positivo nunca está contenido en la bola del mismo centro y radio.",
        "Respuesta": "Falso","Tema":2,
        "Explicación": "La afirmación es falsa porque, en un espacio métrico, el disco cerrado de radio \\( r \\), definido como \\( \\{x \\in X : d(c, x) \\leq r\\} \\), incluye a la bola abierta de radio \\( r \\), definida como \\( \\{x \\in X : d(c, x) < r\\} \\). Por lo tanto, el disco cerrado está contenido en la bola cerrada, y no hay contradicción entre sus definiciones."
    },
    {
        "Pregunta": "Dadas \\( d_1 \\) y \\( d_2 \\) métricas definidas sobre el mismo conjunto \\( X \\), la aplicación \\( d_m : X \\times X \\to \\mathbb{R} \\), definida como \\( d_m(x, y) = \\min\\{d_1(x, y), d_2(x, y)\\} \\), es una métrica.",
        "Respuesta": "Falso","Tema":2,
        "Explicación": "La afirmación es falsa porque \\( d_m(x, y) = \\min\\{d_1(x, y), d_2(x, y)\\} \\) no siempre satisface la desigualdad triangular, que es una condición necesaria para ser una métrica. Por ejemplo, considere un conjunto \\( \\{a, b, c\\} \\) con \\( d_1(a, b) = 1 \\), \\( d_1(b, c) = 2 \\), \\( d_1(a, c) = 3 \\), y \\( d_2(a, b) = 2 \\), \\( d_2(b, c) = 1 \\), \\( d_2(a, c) = 3 \\). Aquí, \\( d_m(a, c) = \\min\\{d_1(a, c), d_2(a, c)\\} = 3 \\), pero \\( d_m(a, b) + d_m(b, c) = \\min\\{1, 2\\} + \\min\\{2, 1\\} = 1 + 1 = 2 \\), lo cual viola la desigualdad triangular \\( d_m(a, c) \\leq d_m(a, b) + d_m(b, c) \\)."
    },
    {
        "Pregunta": "En un espacio métrico, el centro de una esfera siempre pertenece a la esfera.",
        "Respuesta": "Falso","Tema":2,
        "Explicación": "La afirmación es falsa porque una esfera en un espacio métrico está definida como el conjunto de puntos a una distancia exacta \\( r \\) del centro. Por lo tanto, el centro de la esfera no pertenece a ella, ya que la distancia del centro a sí mismo es \\( 0 \\), que no es igual al radio \\( r \\) si \\( r > 0 \\)."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 9 & 2 \\\\ b & 9 & 0 & 5 \\\\ c & 2 & 5 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Falso","Tema":2,
        "Explicación": "La afirmación es falsa porque \\( d \\) no cumple con la desigualdad triangular, que es una condición necesaria para ser una métrica. Por ejemplo, \\( d(a, b) = 9 \\) pero \\( d(a, c) + d(c, b) = 2 + 5 = 7 \\), lo cual contradice la desigualdad triangular \\( d(a, b) \\leq d(a, c) + d(c, b) \\). Por lo tanto, \\( d \\) no es una distancia."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 8 & 7 \\\\ b & 8 & 0 & 1 \\\\ c & 7 & 1 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Verdadero","Tema":2,
        "Explicación": "La afirmación es verdadera porque la función \\( d \\) cumple con las tres propiedades necesarias para ser una métrica: 1) \\( d(x, y) \\geq 0 \\) y \\( d(x, y) = 0 \\iff x = y \\), 2) simetría \\( d(x, y) = d(y, x) \\), y 3) la desigualdad triangular \\( d(x, y) + d(y, z) \\geq d(x, z) \\) para todos los \\( x, y, z \\in X \\). Por lo tanto, \\( d \\) es una distancia."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 2 & 5 \\\\ b & 2 & 0 & 5 \\\\ c & 5 & 5 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Verdadero","Tema":2,
        "Explicación": "La afirmación es verdadera porque la función \\( d \\) cumple con las tres propiedades necesarias para ser una métrica: 1) \\( d(x, y) \\geq 0 \\) y \\( d(x, y) = 0 \\iff x = y \\), 2) simetría \\( d(x, y) = d(y, x) \\), y 3) la desigualdad triangular \\( d(x, y) + d(y, z) \\geq d(x, z) \\) para todos los \\( x, y, z \\in X \\). Por lo tanto, \\( d \\) es una distancia."
    },
    {
        "Pregunta": "Una bola en un espacio métrico puede ser el conjunto vacío.",
        "Respuesta": "Falso","Tema":2,
        "Explicación": "La afirmación es falsa porque, en un espacio métrico, una bola \\( B(x, r) \\) con radio \\( r > 0 \\) siempre contiene al menos al centro \\( x \\), ya que \\( d(x, x) = 0 < r \\). Por lo tanto, una bola no puede ser el conjunto vacío."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 5 & 0 \\\\ b & 5 & 0 & 6 \\\\ c & 0 & 6 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Falso","Tema":2,
        "Explicación": "La afirmación es falsa porque \\( d \\) no cumple con las propiedades necesarias para ser una métrica. En particular, no satisface el requisito de que \\( d(x, y) > 0 \\) para \\( x \\neq y \\). Por ejemplo, \\( d(a, c) = 0 \\) aunque \\( a \\neq c \\), lo cual viola la definición de distancia. Por lo tanto, \\( d \\) no es una métrica."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 5 & 7 \\\\ b & 7 & 0 & 3 \\\\ c & 5 & 3 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Falso","Tema":2,
        "Explicación": "La afirmación es falsa porque \\( d \\) no cumple con la desigualdad triangular, que es una condición necesaria para ser una métrica. Por ejemplo, \\( d(a, b) = 5 \\), \\( d(b, c) = 3 \\), y \\( d(a, c) = 7 \\). Sin embargo, \\( d(a, b) + d(b, c) = 5 + 3 = 8 \\geq 7 \\), lo cual cumple, pero en otros casos podría fallar dependiendo de las combinaciones. Por esta razón se analiza con más detalle métrico real."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 3 & 8 \\\\ b & 3 & 8 & 10 \\\\ c & 8 & 10 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Falso","Tema":2,
        "Explicación": "La afirmación es falsa porque \\( d \\) no cumple con la propiedad \\( d(x, x) = 0 \\) para todos los \\( x \\in X \\). En particular, \\( d(b, b) = 8 > 0 \\), lo cual viola la definición de distancia. Por lo tanto, \\( d \\) no es una métrica."
    },
    {
        "Pregunta": "En un espacio métrico, un disco de radio positivo contiene siempre a la bola del mismo centro y radio.",
        "Respuesta": "Verdadero","Tema":2,
        "Explicación": "La afirmación es verdadera porque, en un espacio métrico, la bola abierta de radio \\( r \\), definida como \\( \\{x \\in X : d(c, x) < r\\} \\), está contenida en el disco cerrado de radio \\( r \\), definido como \\( \\{x \\in X : d(c, x) \\leq r\\} \\). Por definición, cualquier punto cuya distancia al centro sea menor que \\( r \\) también cumple con la condición de ser menor o igual a \\( r \\), por lo que la bola está contenida en el disco."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 2 & 3 \\\\ b & 3 & 0 & 5 \\\\ c & 3 & 5 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Falso","Tema":2,
        "Explicación": "La afirmación es falsa porque \\( d \\) no cumple con la desigualdad triangular, que es una condición necesaria para ser una métrica. Por ejemplo, \\( d(a, b) = 2 \\), \\( d(b, c) = 5 \\), y \\( d(a, c) = 3 \\). Sin embargo, \\( d(a, b) + d(b, c) = 2 + 5 = 7 \\), lo cual no es mayor o igual que \\( d(a, c) = 3 \\). Esto viola la desigualdad triangular, por lo que \\( d \\) no es una métrica."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 2 & 3 \\\\ b & 2 & 0 & 5 \\\\ c & 3 & 5 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Verdadero","Tema":2,
        "Explicación": "La afirmación es verdadera porque \\( d \\) cumple con todas las propiedades necesarias para ser una métrica: 1) \\( d(x, y) \\geq 0 \\) y \\( d(x, y) = 0 \\iff x = y \\), 2) simetría \\( d(x, y) = d(y, x) \\), y 3) la desigualdad triangular \\( d(x, z) \\leq d(x, y) + d(y, z) \\) para todos los \\( x, y, z \\in X \\). Por lo tanto, \\( d \\) es una métrica."
    },
    {
        "Pregunta": "Sea \\( d : X \\times X \\to \\mathbb{R} \\) una función que satisface: \\( 1. \\ d(x, y) = 0 \\iff x = y \\), \\( 2. \\ \\forall x, y \\in X \\ d(x, y) = d(y, x) \\), \\( 3. \\ \\forall x, y, z \\in X \\ \\) se cumple la desigualdad triangular. Entonces \\( d \\) es no negativa y, por lo tanto, es una métrica.",
        "Respuesta": "Verdadero","Tema":2,
        "Explicación": "La afirmación es verdadera porque, dadas las propiedades especificadas: \\( d(x, y) = 0 \\iff x = y \\), simetría \\( d(x, y) = d(y, x) \\), y la desigualdad triangular \\( d(x, z) \\leq d(x, y) + d(y, z) \\), podemos deducir que \\( d(x, y) \\geq 0 \\). Esto se sigue de la desigualdad triangular: \\( 0 = d(x, x) \\leq d(x, y) + d(y, x) = 2d(x, y) \\), implicando que \\( d(x, y) \\geq 0 \\). Por lo tanto, \\( d \\) es una métrica válida."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 1 & 9 & 9 \\\\ b & 9 & 1 & 14 \\\\ c & 9 & 14 & 1 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Falso","Tema":2,
        "Explicación": "La afirmación es falsa porque \\( d \\) no cumple con la propiedad \\( d(x, x) = 0 \\) para todos los \\( x \\in X \\). En este caso, \\( d(a, a) = d(b, b) = d(c, c) = 1 \\neq 0 \\), lo cual viola la definición de métrica. Por lo tanto, \\( d \\) no es una distancia."
    },
    {
        "Pregunta": "Existe un espacio métrico donde todos los triángulos son isósceles.",
        "Respuesta": "Verdadero","Tema":2,
        "Explicación": "La afirmación es verdadera. En un espacio métrico con la distancia discreta, definida como \\( d(x, y) = 0 \\) si \\( x = y \\) y \\( d(x, y) = 1 \\) si \\( x \\neq y \\), todos los triángulos son isósceles. Esto se debe a que las distancias entre puntos son siempre \\( 0 \\) o \\( 1 \\), lo que hace que al menos dos lados de cualquier triángulo tengan la misma longitud."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 9 & 9 \\\\ b & 9 & 0 & 14 \\\\ c & 9 & 14 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Verdadero","Tema":2,
        "Explicación": "La afirmación es verdadera porque \\( d \\) cumple con todas las propiedades necesarias para ser una métrica: \\( d(x, y) \\geq 0 \\) y \\( d(x, y) = 0 \\iff x = y \\), \\( d(x, y) = d(y, x) \\) (simetría), y la desigualdad triangular \\( d(x, z) \\leq d(x, y) + d(y, z) \\) para todos \\( x, y, z \\in X \\). Por lo tanto, \\( d \\) es una función distancia válida."
    },
    {
        "Pregunta": "Sea \\( X = \\{a, b, c\\} \\) un conjunto. La aplicación \\( d : X \\times X \\to \\mathbb{R} \\) dada por la matriz: \\[ \\begin{array}{c|ccc} & a & b & c \\\\ \\hline a & 0 & 3 & 1 \\\\ b & 3 & 0 & 2 \\\\ c & 1 & 2 & 0 \\\\ \\end{array} \\] es una distancia.",
        "Respuesta": "Verdadero","Tema":2,
        "Explicación": "La afirmación es verdadera porque \\( d \\) cumple con todas las propiedades necesarias para ser una métrica: \\( d(x, y) \\geq 0 \\) y \\( d(x, y) = 0 \\iff x = y \\), \\( d(x, y) = d(y, x) \\) (simetría), y la desigualdad triangular \\( d(x, z) \\leq d(x, y) + d(y, z) \\) para todos \\( x, y, z \\in X \\). Por lo tanto, \\( d \\) es una función distancia válida."
    },
    {
        "Pregunta": "Todo cerrado es una bola cerrada.",
        "Respuesta": "Falso","Tema":2,
        "Explicación": "La afirmación es falsa porque un conjunto cerrado no necesariamente tiene la forma de una bola cerrada. Por ejemplo, en \\( \\mathbb{R} \\) con la métrica usual, el conjunto \\( [0, 1] \\cup \\{2\\} \\) es cerrado, pero no es una bola cerrada porque no tiene la estructura requerida para ser una bola métrica alrededor de un punto."
    },
    {
        "Pregunta": "Las esferas son conjuntos cerrados.",
        "Respuesta": "Verdadero","Tema":2,"Tema":2,
        "Explicación": "La afirmación es verdadera porque en un espacio métrico, una esfera \\( S(x, r) = \\{y \\in X : d(x, y) = r\\} \\) es el conjunto de puntos a una distancia fija \\( r \\) de un centro \\( x \\). Este conjunto es cerrado ya que es el complemento de la unión de las bolas abiertas \\( B(x, r - \\epsilon) \\) para \\( \\epsilon > 0 \\), lo cual garantiza su cierre bajo la métrica."
    },
    {
        "Pregunta": "Sea \\( X \\) un conjunto no vacío. ¿Siempre podemos definir una métrica sobre él?",
        "Respuesta": "Verdadero","Tema":2,"Tema":2,
        "Explicación": "Es posible definir una métrica sobre cualquier conjunto no vacío \\( X \\). Por ejemplo, la métrica discreta está definida como \\( d(x, y) = 0 \\) si \\( x = y \\), y \\( d(x, y) = 1 \\) si \\( x \\neq y \\). Esta métrica cumple con las propiedades necesarias (no negatividad, simetría y desigualdad triangular) y puede ser aplicada a cualquier conjunto."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{3\\}, \\{1,3\\}, \\{1, 2, 3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "No lo es. La familia dada no es una topología porque no cumple con las propiedades necesarias: la intersección de \\( \\{2\\} \\) y \\( \\{3\\} \\) (que es el conjunto vacío) no pertenece a la familia, lo que viola la propiedad de intersección finita."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{2,3\\}, \\{1,2\\}, \\{1, 2, 3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "Bien. La familia dada es una topología porque cumple con las propiedades necesarias: contiene el conjunto vacío y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{1,2\\}, \\{1,3\\}, \\{1, 2, 3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "Bien. La familia dada es una topología porque cumple con las propiedades necesarias: contiene el conjunto vacío y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{3\\}, \\{1,2\\}, \\{1,3\\}, \\{2,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "No lo es. La familia dada no es una topología porque no cumple con las propiedades necesarias. Por ejemplo, la intersección de \\( \\{1,3\\} \\) y \\( \\{2,3\\} \\), que es \\( \\{3\\} \\), pertenece a la familia, pero no es cerrada bajo uniones arbitrarias o intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "Bien. La familia dada es una topología porque cumple con las propiedades necesarias: contiene el conjunto vacío y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{3\\}, \\{1\\}, \\{2,3\\}, \\{1,2\\}, \\{1,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "Bien. La familia dada es una topología porque cumple con las propiedades necesarias: contiene el conjunto vacío y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{1\\}, \\{2\\}, \\{3\\}, \\{1,2\\}, \\{1,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "No lo es. La familia dada no es una topología porque no contiene todas las uniones posibles. Por ejemplo, la unión de \\( \\{1,2\\} \\) y \\( \\{1,3\\} \\), que es \\( \\{1,2,3\\} \\), no pertenece a la familia."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{1,2\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "Bien. La familia dada es una topología porque cumple con las propiedades necesarias: contiene el conjunto vacío y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{1\\}, \\{2\\}, \\{3\\}, \\{1,2\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "No lo es. La familia dada no es una topología porque no contiene el conjunto vacío ni el conjunto \\( X \\), lo que viola las propiedades necesarias de una topología."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{1\\}, \\{2\\}, \\{3\\}, \\{1,2\\}, \\{1,3\\}, \\{2,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "No lo es. La familia dada no es una topología porque no contiene el conjunto vacío y no es cerrada bajo intersecciones finitas; por ejemplo, la intersección de \\( \\{1,2\\} \\) y \\( \\{1,3\\} \\) es \\( \\{1\\} \\), que no está en la familia."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{3\\}, \\{1,2\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "Bien. La familia dada es una topología porque contiene el conjunto vacío y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "En un espacio topológico la intersección finita de abiertos es un conjunto abierto.",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "Es uno de los axiomas de la topología (T3). La intersección finita de conjuntos abiertos siempre es un conjunto abierto en un espacio topológico."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "No lo es. La familia dada no es una topología porque no es cerrada bajo intersecciones finitas ni uniones arbitrarias; por ejemplo, \\( \\{2\\} \\cup \\{1,2,3\\} = \\{1,2,3\\} \\), pero algunas combinaciones no cumplen."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{1,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "Bien. La familia dada es una topología porque contiene el conjunto vacío y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{1\\}, \\{2\\}, \\{3\\}, \\{1,3\\}, \\{2,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "No lo es. La familia dada no es una topología porque no cumple con las propiedades necesarias, como la cerradura bajo uniones arbitrarias. Por ejemplo, la unión de \\( \\{1\\} \\) y \\( \\{2\\} \\) que es \\( \\{1,2\\} \\), no pertenece a la familia."
    },
    {
        "Pregunta": "Existen métricas distintas a la discreta que dan lugar a la topología discreta.",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "Si \\( d \\) es la métrica discreta, \\( 2d \\) es distinta y proporciona la misma topología discreta, ya que todas las métricas equivalentes inducen la misma topología."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{1\\}, \\{2\\}, \\{3\\}, \\{1,3\\}, \\{2,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "No lo es. Aunque contiene \\( \\emptyset \\) y \\( X \\), la familia no es cerrada bajo intersecciones finitas. Por ejemplo, la intersección de \\( \\{1,3\\} \\) y \\( \\{2,3\\} \\) es \\( \\{3\\} \\), que no pertenece a la familia."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{3\\}, \\{1\\}, \\{1,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "Bien. La familia dada es una topología porque contiene \\( \\emptyset \\), \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "La distancia discreta es la única que da lugar a la topología discreta.",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "Si \\( d \\) es la métrica discreta, \\( 2d \\) es una métrica distinta que también genera la misma topología discreta. Por lo tanto, la métrica discreta no es única en este sentido."
    },
    {
        "Pregunta": "Los abiertos de un espacio métrico determinan una topología.",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "Hay un teorema que establece que los conjuntos abiertos en un espacio métrico cumplen los axiomas de una topología, lo que los convierte en una topología en dicho espacio."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{1\\}, \\{2\\}, \\{3\\}, \\{1,3\\}, \\{2,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "No lo es. Aunque contiene \\( \\emptyset \\) y \\( X \\), la familia no es cerrada bajo intersecciones finitas ni uniones arbitrarias, lo que viola los axiomas de la topología."
    },
    {
        "Pregunta": "Es posible definir el concepto de conjunto acotado en una topología arbitraria.",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "Si no existe otra estructura adicional, como una métrica, no es posible definir el concepto de conjunto acotado en una topología arbitraria."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "La familia dada es una topología porque contiene \\( \\emptyset \\) y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{3\\}, \\{1\\}, \\{1,2\\}, \\{1,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "La familia dada es una topología porque cumple con las propiedades necesarias: contiene \\( \\emptyset \\) y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "La topología usual de los números reales tiene una cantidad contable de abiertos.",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "Los intervalos abiertos \\((x, x+1)\\) con \\(x \\in \\mathbb{R}\\) son infinitos y forman una cantidad no contable de abiertos en la topología usual de \\(\\mathbb{R}\\)."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{3\\}, \\{2,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "La familia dada no es una topología porque no incluye el conjunto vacío, lo cual es un requisito esencial para que sea una topología."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{1\\}, \\{1,2\\}, \\{1,3\\}, \\{2,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "La familia dada no es una topología porque no incluye el conjunto vacío y no cumple con la cerradura bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{3\\}, \\{1,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "La familia dada no es una topología porque no contiene \\( \\emptyset \\) ni \\( X \\), y no es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{1\\}, \\{3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "La familia dada no es una topología porque no contiene el conjunto vacío \\( \\emptyset \\), lo cual es un requisito fundamental para que sea una topología."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{2\\}, \\{1,2\\}, \\{1,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "La familia dada no es una topología porque no incluye \\( \\emptyset \\) y no es cerrada bajo intersecciones finitas. Por ejemplo, la intersección de \\( \\{1,2\\} \\) y \\( \\{1,3\\} \\) es \\( \\{1\\} \\), que no pertenece a la familia."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{3\\}, \\{2,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "La familia dada es una topología porque contiene \\( \\emptyset \\) y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Sean \\( \\mathcal{T}_1 \\) y \\( \\mathcal{T}_2 \\) dos topologías en un conjunto \\( X \\). La intersección \\( \\mathcal{T}_1 \\cap \\mathcal{T}_2 \\) es una topología.",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "La intersección de dos topologías es una topología porque satisface las propiedades necesarias: \\( \\emptyset \\) y \\( X \\) pertenecen a \\( \\mathcal{T}_1 \\cap \\mathcal{T}_2 \\), y esta es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{1,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "La familia dada es una topología porque cumple con las propiedades necesarias: contiene \\( \\emptyset \\) y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{2\\}, \\{1,3\\}, \\{2,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "La familia dada no es una topología porque no incluye \\( \\emptyset \\) y \\( X \\), lo que viola los axiomas de una topología."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{3\\}, \\{1,2\\}, \\{1,3\\}, \\{2,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "La familia dada es una topología porque contiene \\( \\emptyset \\) y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{1, 3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "La familia dada no es una topología porque no contiene \\( \\emptyset \\), \\( X \\), ni cumple las propiedades de cierre bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{3\\}, \\{2, 3\\}, \\{1, 3\\}, \\{1, 2, 3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "La familia dada es una topología porque contiene \\( \\emptyset \\) y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{1, 2, 3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "La familia dada cumple los axiomas de una topología: contiene \\( \\emptyset \\) y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{1\\}, \\{3\\}, \\{1, 2\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "La familia dada no es una topología porque no contiene \\( \\emptyset \\) ni \\( X \\), y no es cerrada bajo uniones arbitrarias ni intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{1\\}, \\{3\\}, \\{1, 3\\}, \\{2, 3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "La familia dada no cumple con los axiomas de una topología, ya que no es cerrada bajo uniones arbitrarias ni intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{1\\}, \\{1, 2\\}, \\{1, 2, 3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "La familia dada es una topología porque contiene \\( \\emptyset \\) y \\( X \\), y es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Sea \\( X \\) un conjunto no vacío. Siempre podemos definir una topología sobre \\( X \\).",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "Es posible definir una topología sobre cualquier conjunto no vacío, como la topología indiscreta \\( \\{\\emptyset, X\\} \\)."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{\\{1\\}, \\{1, 3\\}, \\{1, 2, 3\\}\\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "La respuesta es incorrecta porque \\( \\{\\emptyset, \\{1\\}, \\{1, 3\\}, \\{1, 2, 3\\}\\} \\) sería una topología, no \\( \\{\\{1\\}, \\{1, 3\\}, \\{1, 2, 3\\}\\} \\). Debe incluir el conjunto vacío para ser una topología."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{\\emptyset, \\{1\\}, \\{2\\}, \\{1, 2\\}, \\{1, 3\\}, \\{2, 3\\}\\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "No cumple con los axiomas de una topología, ya que la intersección de \\( \\{1, 2\\} \\) y \\( \\{1, 3\\} \\), que es \\( \\{1\\} \\), no pertenece a la familia."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{\\{1, 2\\}, \\{1, 2, 3\\}\\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "La familia no contiene el conjunto vacío, por lo que no cumple el primer axioma de una topología."
    },
    {
        "Pregunta": "En un espacio topológico la unión finita de abiertos es abierto.",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "Cualquier unión, finita o infinita, de conjuntos abiertos en un espacio topológico es también un conjunto abierto por definición de topología."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{\\emptyset, \\{1, 2, 3\\}\\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "La familia cumple con los axiomas de una topología: contiene el conjunto vacío y el conjunto total, es cerrada bajo uniones e intersecciones (trivialmente en este caso porque no hay más conjuntos)."
    },
    {
        "Pregunta": "Si \\( \\mathcal{T} \\subseteq \\mathcal{P}(X) \\) es una familia de subconjuntos de un conjunto \\( X \\), y queremos probar que es topología debemos probar (entre otras cosas) que una intersección finita de elementos de \\( \\mathcal{T} \\) sigue perteneciendo a \\( \\mathcal{T} \\). Pero es suficiente probarlo para la intersección de dos.",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "Es correcto porque la intersección de un número finito de conjuntos puede ser descompuesta como una serie de intersecciones binarias, debido a la asociatividad de la intersección."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{\\emptyset, \\{3\\}, \\{1, 3\\}, \\{1, 2, 3\\}\\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "La familia \\( \\{\\emptyset, \\{3\\}, \\{1, 3\\}, \\{1, 2, 3\\}\\} \\) cumple con los axiomas de una topología: incluye el conjunto vacío y el total, es cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{1\\}, \\{2\\}, \\{3\\}, \\{2,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "La familia no es una topología porque no incluye todas las uniones posibles de sus conjuntos. Por ejemplo, la unión de \\( \\{1\\} \\cup \\{2,3\\} \\) no pertenece a la familia."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{3\\}, \\{1,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "No es una topología porque no satisface la condición de cierre bajo intersecciones finitas y uniones arbitrarias de sus elementos."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{3\\}, \\{2,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "Esta familia satisface las condiciones de ser una topología: contiene el conjunto vacío y \\( X \\), y es cerrada bajo intersecciones finitas y uniones arbitrarias."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{1\\}, \\{1,2\\}, \\{1,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "Incluye el conjunto vacío y el conjunto total \\( X \\), y es cerrada bajo intersecciones finitas y uniones arbitrarias."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{1\\}, \\{2,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "Cumple las condiciones de una topología: contiene el conjunto vacío, \\( X \\), y es cerrada bajo uniones e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{1\\}, \\{1,2\\}, \\{1,3\\}, \\{1,2,3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "Esta familia cumple con las condiciones necesarias para ser una topología en \\( X \\)."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{1\\}, \\{1,3\\}, \\{2,3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "No es una topología porque no contiene el conjunto vacío ni el conjunto total \\( X \\)."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{2, 3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "La familia \\( \\{\\{2, 3\\}\\} \\) no cumple con las propiedades de una topología, ya que no incluye al conjunto vacío ni al conjunto total \\( X \\), que son requisitos fundamentales para ser una topología."
    },
    {
        "Pregunta": "Sean \\( \\mathcal{T}_1 \\) y \\( \\mathcal{T}_2 \\) dos topologías en un conjunto \\( X \\). La unión \\( \\mathcal{T}_1 \\cup \\mathcal{T}_2 \\) es una topología.",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "La unión de dos topologías no necesariamente forma una topología, ya que podría no ser cerrada bajo intersección finita o unión arbitraria, lo cual es un requisito fundamental de una topología."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{3\\}, \\{1, 3\\}, \\{2, 3\\}, \\{1, 2, 3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "Esta familia no cumple las propiedades de una topología, ya que la intersección de ciertos conjuntos no pertenece a la familia (por ejemplo, la intersección de \\( \\{1, 3\\} \\) y \\( \\{2, 3\\} \\) no está en la familia)."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{2\\}, \\{3\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "Esta familia no es una topología porque no contiene el conjunto vacío ni el conjunto total \\( X \\). Además, no está cerrada bajo uniones ni intersecciones."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{3\\}, \\{2, 3\\}, \\{1, 3\\}, \\{1, 2, 3\\} \\} \\) es una topología",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "Esta familia cumple con las propiedades de una topología: contiene al conjunto vacío y al conjunto total, y está cerrada bajo uniones arbitrarias e intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "Esta no es una topología válida ya que no contiene el conjunto total \\( X \\)."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{1\\} \\} \\) es una topología",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "Esta no es una topología válida ya que no contiene el conjunto total \\( X \\)."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{3\\}, \\{1,2\\}, \\{2,3\\}, \\{1,2,3\\} \\} \\) es una topología.",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "No cumple con los axiomas de una topología. Por ejemplo, la intersección de \\( \\{3\\} \\) y \\( \\{1, 2\\} \\) no pertenece a la familia, lo que viola uno de los axiomas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{3\\}, \\{1\\}, \\{2,3\\}, \\{1,3\\}, \\{1,2,3\\} \\) es una topología.",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "Cumple con los axiomas de una topología: contiene el conjunto vacío y \\( X \\), es cerrada bajo uniones arbitrarias y la intersección finita de sus elementos pertenece a la familia."
    },{
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\{3\\}, \\{1, 2\\} \\} \\) es una topología.",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "No contiene al conjunto vacío ni a \\( X \\), por lo que no satisface los axiomas de una topología."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{1\\}, \\{1, 2\\}, \\{1,3\\}, \\{1,2,3\\} \\} \\) es una topología.",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "Satisface los axiomas de una topología: contiene el vacío y \\( X \\), es cerrada bajo uniones arbitrarias y bajo intersecciones finitas."
    },
    {
        "Pregunta": "Considera el conjunto \\( X = \\{1, 2, 3\\} \\). La familia de subconjuntos de \\( X \\) \\( \\{ \\emptyset, \\{2\\}, \\{1\\}, \\{1, 2\\}, \\{1, 3\\}, \\{1,2,3\\} \\} \\) es una topología.",
        "Respuesta": "Verdadero",
        "Tema":3,
        "Explicación": "Cumple con todos los axiomas requeridos para ser una topología, incluyendo el vacío, \\( X \\), uniones y la cerradura bajo intersecciones finitas."
    },
    {
        "Pregunta": "En un espacio topológico la intersección arbitraria de abiertos nunca puede ser un conjunto abierto.",
        "Respuesta": "Falso",
        "Tema":3,
        "Explicación": "En la topología discreta, cualquier conjunto es abierto, por lo que la intersección arbitraria de abiertos también es un conjunto abierto."
    }
]