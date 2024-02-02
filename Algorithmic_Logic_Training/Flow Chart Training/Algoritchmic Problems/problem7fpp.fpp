9       	 <--SHAPES
8       	 <--LINES
id1
2       	 <--TYPE
263       	 <--LEFT
120       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
START



id2
91       	 <--TYPE
191       	 <--LEFT
180       	 <--TOP
204       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INPUT
uzun kenarý girin
uk

id3
91       	 <--TYPE
194       	 <--LEFT
248       	 <--TOP
204       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INPUT
kýsa kenarý girin
kk

id4
0       	 <--TYPE
190       	 <--LEFT
317       	 <--TOP
228       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
ADD
uk
kk
kenarlar toplamý
id5
0       	 <--TYPE
193       	 <--LEFT
372       	 <--TOP
244       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
MULTIPLY
kenarlar toplamý
2
çevre
id6
0       	 <--TYPE
227       	 <--LEFT
427       	 <--TOP
132       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
MULTIPLY
uk
kk
alan
id7
2       	 <--TYPE
313       	 <--LEFT
556       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
STOP



id8
91       	 <--TYPE
177       	 <--LEFT
473       	 <--TOP
252       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
dikdörtgenýn çevresi
çevre

id9
91       	 <--TYPE
489       	 <--LEFT
476       	 <--TOP
228       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
dikdörtgenin alaný
alan

  
---- LINES ---- from,to ----
id1,id2
reserved 1

id2,id3
reserved 1

id3,id4
reserved 1

id4,id5
reserved 1

id5,id6
reserved 1

id6,id8
reserved 1

id8,id9
reserved 1

id9,id7
reserved 1

