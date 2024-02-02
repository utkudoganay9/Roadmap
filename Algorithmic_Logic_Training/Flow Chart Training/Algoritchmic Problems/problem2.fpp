9       	 <--SHAPES
9       	 <--LINES
id1
2       	 <--TYPE
286       	 <--LEFT
61       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
START



id2
2       	 <--TYPE
531       	 <--LEFT
468       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
STOP



id3
91       	 <--TYPE
213       	 <--LEFT
120       	 <--TOP
244       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INPUT
1.sýnav notunu gir
Sýnav1

id4
91       	 <--TYPE
208       	 <--LEFT
191       	 <--TOP
244       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INPUT
2.sýnav notunu gir
Sýnav2

id5
0       	 <--TYPE
222       	 <--LEFT
257       	 <--TOP
212       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
ADD
Sýnav1
Sýnav2
toplam
id6
0       	 <--TYPE
226       	 <--LEFT
316       	 <--TOP
188       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DIVIDE
toplam
2
ortalama
id7
92       	 <--TYPE
245       	 <--LEFT
365       	 <--TOP
144       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_GREATER
ortalama
70

id8
91       	 <--TYPE
475       	 <--LEFT
369       	 <--TOP
132       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
geçti


id9
91       	 <--TYPE
254       	 <--LEFT
445       	 <--TOP
132       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
kaldý


  
---- LINES ---- from,to ----
id3,id4
reserved 1

id1,id3
reserved 1

id4,id5
reserved 1

id5,id6
reserved 1

id7,id8
reserved 1
EVET
id7,id9
reserved 1
HAYIR
id8,id2
reserved 1

id9,id2
reserved 1

id6,id7
reserved 1

